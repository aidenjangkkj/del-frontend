// src/BankTransferScreen.js
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


const BankTransferScreen = ({ orders, setScreen, address, userId, phone,setOrders }) => {
  // 주문 ID 및 총 결제 금액 계산
  const orderId = orders[0].id;
  const overallTotal = orders.reduce((total, order) => {
    const orderTotal = order.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    return total + orderTotal;
  }, 0);

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

  // 주문 데이터를 Firestore에 저장하는 함수
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
      setScreen("paid");
    } catch (error) {
      console.error("Error saving order: ", error);
      alert("주문 저장에 실패했습니다.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 pb-32">
      <header className="bg-white p-4 rounded-lg shadow-md text-center">
        <h1 className="text-xl font-bold">계좌이체 안내</h1>
        <p className="text-gray-500 mt-2">
          입금자명은 주문ID로 해주셔야 합니다.
        </p>
        <p className="text-gray-500 mt-2">
          주문하신 주문ID는 <span className="font-bold">{orderId}</span> 입니다.
        </p>
        <p className="text-gray-500 mt-2">
          계좌정보: 국민은행 123-456789 장석환(맛차이나)
        </p>
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
      <div className="mt-4 flex justify-center">
        <button
          className="bg-blue-500 text-white p-4 rounded-lg"
          onClick={sendOrderToFirebase}
        >
          주문 완료 (결제 완료)
        </button>
      </div>
      <Navbar activeScreen="bankTransfer" setScreen={setScreen} />
    </div>
  );
};

export default BankTransferScreen;
