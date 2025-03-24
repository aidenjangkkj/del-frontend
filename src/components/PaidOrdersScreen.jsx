// src/PaidOrdersScreen.js
import React, { useState, useEffect } from "react";
import Navbar from "./NavBar";
import { db } from "../firebaseConfig";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

// 오늘 날짜를 "YYYY-MM-DD" 형식으로 반환하는 함수
const getTodayDateString = () => new Date().toISOString().split("T")[0];

const PaidOrdersScreen = ({ userId }) => {
  const navigate = useNavigate();

  // 로그인 상태 확인
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
  // 기본값을 오늘 날짜로 설정
  const [selectedDate, setSelectedDate] = useState(getTodayDateString());

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

  // 날짜 필터링: selectedDate가 있을 경우 해당 날짜의 주문만 필터링
  const filteredOrders = selectedDate
    ? paidOrders.filter((order) => {
        if (order.createdAt && order.createdAt.toDate) {
          const orderDate = order.createdAt.toDate().toISOString().split("T")[0];
          return orderDate === selectedDate;
        }
        return false;
      })
    : paidOrders;

  if (loading) {
    return <div className="p-4">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 pb-32">
      <header className="bg-white p-4 rounded-lg shadow-md text-center">
        <h1 className="text-xl font-bold">결제 완료 주문 내역</h1>
      </header>

      {/* 날짜 필터링 입력 */}
      <div className="mt-4 flex items-center space-x-2">
        <label htmlFor="date-filter" className="font-medium">
          날짜 필터:
        </label>
        <input
          type="date"
          id="date-filter"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="border border-gray-300 rounded p-1"
        />
      </div>

      <div className="mt-4">
        {filteredOrders.length > 0 ? (
          filteredOrders.map((order) => {
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
      <Navbar />
    </div>
  );
};

export default PaidOrdersScreen;
