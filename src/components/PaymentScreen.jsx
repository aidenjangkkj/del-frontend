// src/PaymentScreen.js
import React from "react";
import Navbar from "./NavBar";
import { db } from "../firebaseConfig";
import {
  doc,
  setDoc,
  updateDoc,
  serverTimestamp,
  increment,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const PaymentScreen = ({ orders, address, userId, phone, setOrders }) => {
  // 전체 결제 금액 계산: 각 주문의 총합 계산
  const navigate = useNavigate()
  const overallTotal = orders.reduce((total, order) => {
    const orderTotal = order.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    return total + orderTotal;
  }, 0);
  const orderId = orders[0].id;
  // sanitizeOrders: 주문 데이터 중 이미지 필드 제거한 새 데이터 생성
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

  // 주문 데이터를 Firestore에 저장하고 포인트를 적립하는 함수
  const sendOrderToFirebase = async () => {
    try {
      const customOrderId = orderId;
      // 주문 데이터 저장
      await setDoc(doc(db, "orders", customOrderId), {
        orders: sanitizeOrders, // 이미지 제외된 주문 데이터
        overallTotal, // 총 결제 금액
        address, // 선택한 주소 정보
        userId, // 현재 사용자의 uid
        phone, // 현재 사용자의 전화번호
        paid: true,
        createdAt: serverTimestamp(),
      });

      // Firestore의 "users" 컬렉션에서 해당 사용자의 포인트 업데이트 (누적 포인트 증가)
      await updateDoc(doc(db, "users", userId), {
        points: increment(overallTotal * 0.1),
      });

      alert("결제가 완료되었습니다. 주문 내역이 저장되고 포인트가 적립되었습니다.");
      setOrders([]);
      navigate("/paid");
    } catch (error) {
      console.error("Error saving order: ", error);
      alert("주문 저장에 실패했습니다.");
    }
  };

  // 다른 결제 방식은 그대로 유지 (예시)
  const handleTossPayment = async () => {
    alert("토스 간편결제를 선택하셨습니다.");
    // 결제 처리 로직...
  };

  const handleCardPayment = async () => {
    alert("카드 결제를 선택하셨습니다.");
    // 결제 처리 로직...
  };

  const handleOnsiteCashPayment = async () => {
    alert("현장 현금 결제를 선택하셨습니다.");
    await sendOrderToFirebase();
    // 결제 처리 로직...
  };

  const handleOnsiteCardPayment = async () => {
    alert("현장 카드 결제를 선택하셨습니다.");
    await sendOrderToFirebase();
    // 결제 처리 로직...
  };

  // 계좌이체 버튼 클릭 시 BankTransferScreen으로 이동
  const handleKakaoPayment = () => {
    navigate("/bankTransfer");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 pb-32">
      <header className="bg-white p-4 rounded-lg shadow-md text-center">
        <h1 className="text-xl font-bold">결제 화면</h1>
        {address ? (
          <p className="text-gray-500 mt-2 font-bold">배달 주소: {address}</p>
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
            onClick={handleKakaoPayment}
          >
            계좌이체
          </button>
          {/* 필요 시 아래 주석 해제 */}
          {/* 
          <button
            className="w-full bg-blue-500 text-white p-4 rounded-lg"
            onClick={handleTossPayment}
          >
            토스 간편결제
          </button>
          <button
            className="w-full bg-green-500 text-white p-4 rounded-lg"
            onClick={handleCardPayment}
          >
            카드 결제
          </button> 
          */}
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
      <Navbar/>
    </div>
  );
};

export default PaymentScreen;
