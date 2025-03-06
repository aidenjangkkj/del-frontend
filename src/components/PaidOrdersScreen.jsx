// src/PaidOrdersScreen.js
import React, { useState, useEffect } from "react";
import Navbar from "./NavBar";
import { db } from "../firebaseConfig";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const PaidOrdersScreen = ({ userId }) => {
  const navigate = useNavigate()
  // 만약 userId가 없다면 로그인 필요 메시지를 출력
  if (!userId) {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
        <p className="text-xl mb-4">주문 내역을 확인하려면 로그인이 필요합니다.</p>
        <button
          onClick={() => navigate("/login")}
          className="bg-blue-500 text-white p-4 rounded-lg"
        >
          로그인 하러 가기
        </button>
      </div>
    );
  }

  const [paidOrders, setPaidOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 'orders' 컬렉션에서 paid가 true이고 userId가 현재 사용자와 일치하는 주문만 쿼리
    const ordersRef = collection(db, "orders");
    const q = query(
      ordersRef,
      where("userId", "==", userId),
      where("paid", "==", true)
    );

    const unsubscribe = onSnapshot(
      q,
      (querySnapshot) => {
        const ordersData = [];
        querySnapshot.forEach((doc) => {
          ordersData.push({ id: doc.id, ...doc.data() });
        });
        setPaidOrders(ordersData);
        setLoading(false);
      },
      (error) => {
        console.error("결제 완료 주문 내역을 불러오는 중 에러 발생: ", error);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [userId]);

  if (loading) {
    return <div className="p-4">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 pb-32">
      <header className="bg-white p-4 rounded-lg shadow-md text-center">
        <h1 className="text-xl font-bold">결제 완료 주문 내역</h1>
      </header>
      <div className="mt-4">
        {paidOrders.length > 0 ? (
          paidOrders.map((order) => {
            // Firestore에 저장된 결제 완료 시간(Timestamp)을 Date 객체로 변환하여 표시
            const paidAt = order.createdAt
              ? order.createdAt.toDate().toLocaleString()
              : "";
            return (
              <div key={order.id} className="bg-white p-4 mb-2 rounded-lg shadow-md">
                <h2 className="text-lg font-semibold">주문 ID: {order.id}</h2>
                <p className="text-gray-500">
                  총 결제 금액: ₩{order.overallTotal?.toLocaleString()}
                </p>
                {order.address && (
                  <p className="text-gray-500">배송 주소: {order.address}</p>
                )}
                {paidAt && (
                  <p className="text-gray-500">결제일: {paidAt}</p>
                )}
              </div>
            );
          })
        ) : (
          <p className="text-center text-gray-500">결제된 주문 내역이 없습니다.</p>
        )}
      </div>
      <Navbar/>
    </div>
  );
};

export default PaidOrdersScreen;
