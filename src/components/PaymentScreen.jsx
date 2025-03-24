// src/PaymentScreen.js
import React from "react";
import Navbar from "./NavBar";
import { db } from "../firebaseConfig";
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  serverTimestamp,
  increment,
} from "firebase/firestore";
import { useNavigate, useLocation } from "react-router-dom";

const PaymentScreen = ({ orders, address, userId, phone, setOrders }) => {
  const navigate = useNavigate();
  const location = useLocation();
  // OrdersScreen에서 전달한 요청 사항 받아오기
  const { specialRequest } = location.state || {};

  // 전체 결제 금액 계산
  const overallTotal = orders.reduce((total, order) => {
    const orderTotal = order.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    return total + orderTotal;
  }, 0);

  const orderId = orders[0].id;
  // sanitizeOrders: 이미지 필드를 제외한 주문 데이터 생성
  const sanitizeOrders = orders.map((order) => ({
    id: order.id,
    items: order.items.map(({ id, name, category, price, quantity }) => ({
      id,
      name,
      category,
      price,
      quantity,
    })),
  }));

  // 주문 데이터를 Firestore에 저장하고 포인트 적립 또는 차감하는 함수
  const sendOrderToFirebase = async (paymentMethod) => {
    try {
      const customOrderId = orderId;
      await setDoc(doc(db, "orders", customOrderId), {
        orders: sanitizeOrders,
        overallTotal,
        address,
        userId,
        phone,
        payment: paymentMethod, // 결제 수단 전달
        request: specialRequest, // 요청 사항 전달
        paid: true,
        createdAt: serverTimestamp(),
      });

      // 포인트 결제가 아닌 경우, 결제 금액의 10%를 포인트로 적립
      if (paymentMethod !== "포인트 결제") {
        await updateDoc(doc(db, "users", userId), {
          points: increment(overallTotal * 0.1),
        });
      }

      alert("결제가 완료되었습니다. 주문 내역이 저장되었습니다.");
      setOrders([]);
      navigate("/paid");
    } catch (error) {
      console.error("Error saving order: ", error);
      alert("주문 저장에 실패했습니다.");
    }
  };

  const handleOnsiteCashPayment = async () => {
    alert("현장 현금 결제를 선택하셨습니다.");
    await sendOrderToFirebase("현장 현금 결제");
  };

  const handleOnsiteCardPayment = async () => {
    alert("현장 카드 결제를 선택하셨습니다.");
    await sendOrderToFirebase("현장 카드 결제");
  };

  // 포인트 결제: 사용자의 포인트가 충분한지 확인 후 차감
  const handlePointPayment = async () => {
    alert("포인트 결제를 선택하셨습니다.");
    const userDocRef = doc(db, "users", userId);
    const userSnap = await getDoc(userDocRef);
    if (userSnap.exists()) {
      const currentPoints = userSnap.data().points || 0;
      // 여기서는 포인트와 결제 금액의 단위가 동일하다고 가정합니다.
      if (currentPoints < overallTotal) {
        alert("포인트가 부족합니다.");
        return;
      }
      // 충분한 포인트가 있다면 결제 금액만큼 차감
      await updateDoc(userDocRef, { points: increment(-overallTotal) });
      // 포인트 결제는 별도의 포인트 적립 없이 주문 저장
      await sendOrderToFirebase("포인트 결제");
    } else {
      alert("사용자 정보를 불러오지 못했습니다.");
    }
  };

  // 계좌이체 버튼 클릭 시 BankTransferScreen으로 이동하며 결제 수단을 state로 전달
  const handleBankTransfer = () => {
    navigate("/bank-transfer", {
      state: { paymentMethod: "계좌이체", specialRequest },
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 pb-32">
      <header className="bg-white p-4 rounded-lg shadow-md text-center">
        <h1 className="text-xl font-bold">결제 화면</h1>
        {address ? (
          <p className="text-gray-500 mt-2 font-bold">
            배달 주소: {address}
          </p>
        ) : (
          <p className="text-gray-500 mt-2">주소가 설정되지 않았습니다.</p>
        )}
      </header>
      <div className="mt-4">
        <div className="bg-white p-4 rounded-lg shadow-md text-center">
          <h2 className="text-lg font-bold">총 결제 금액</h2>
          <p className="text-gray-500">₩{overallTotal.toLocaleString()}</p>
        </div>
      </div>
      <div className="mt-4">
        <h2 className="text-lg font-bold mb-2">결제 방법 선택</h2>
        <div className="flex flex-col space-y-2">
          <button
            className="w-full bg-yellow-500 text-white p-4 rounded-lg"
            onClick={handleBankTransfer}
          >
            계좌이체
          </button>
          <button
            className="w-full bg-blue-500 text-white p-4 rounded-lg"
            onClick={handlePointPayment}
          >
            포인트 결제
          </button>
          <div className="flex space-x-2">
            <button
              className="w-1/2 bg-purple-500 text-white p-4 rounded-lg"
              onClick={handleOnsiteCashPayment}
            >
              현장 현금 결제
            </button>
            <button
              className="w-1/2 bg-indigo-500 text-white p-4 rounded-lg"
              onClick={handleOnsiteCardPayment}
            >
              현장 카드 결제
            </button>
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default PaymentScreen;
