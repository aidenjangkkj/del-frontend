import React from "react";
import Navbar from "./NavBar";
import { useNavigate } from "react-router-dom";


const OrdersScreen = ({ orders}) => {
  // 아직 결제되지 않은 주문만 필터링 (order.paid가 false이거나 undefined인 경우)
  const pendingOrders = orders.filter((order) => !order.paid);
  const navigate = useNavigate()
  // 필터링된 주문에 대해 전체 총액 계산
  const overallTotal = pendingOrders.reduce((total, order) => {
    const orderTotal = order.items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    return total + orderTotal;
  }, 0);

  return (
    <div className="min-h-screen bg-gray-100 p-4 pb-32">
      <header className="bg-white p-4 rounded-lg shadow-md text-center">
        <h1 className="text-xl font-bold">진행 중인 주문 내역</h1>
      </header>
      <div className="mt-4">
        {pendingOrders.length > 0 ? (
          pendingOrders.map((order, index) => {
            const orderTotal = order.items.reduce(
              (acc, item) => acc + item.price * item.quantity,
              0
            );
            return (
              <div key={index} className="bg-white p-4 mb-2 rounded-lg shadow-md">
                <h2 className="text-lg font-semibold">주문 #{order.id}</h2>
                {order.items.map((item, idx) => (
                  <p key={idx} className="text-gray-500">
                    {item.name} x {item.quantity} - ₩
                    {(item.price * item.quantity).toLocaleString()}
                  </p>
                ))}
                <p className="mt-2 font-bold">
                  주문 총액: ₩{orderTotal.toLocaleString()}
                </p>
              </div>
            );
          })
        ) : (
          <p className="text-center text-gray-500">
            진행 중인 주문이 없습니다.
          </p>
        )}
      </div>
      {pendingOrders.length > 0 && (
        // 진행 중인 주문이 있을 때만 결제하기 버튼 표시
        <button
          onClick={() => navigate("/payment")}
          className="w-full bg-blue-500 text-white p-4 rounded-lg mt-4"
        >
          결제하기
        </button>
      )}
      <div className="fixed bottom-20 left-0 w-full px-4">
        <div className="bg-white p-4 rounded-lg shadow-md text-center">
          <h1 className="text-xl font-bold">전체 주문 총액</h1>
          <p className="text-lg font-semibold">
            ₩{overallTotal.toLocaleString()}
          </p>
        </div>
      </div>
      <Navbar/>
    </div>
  );
};

export default OrdersScreen;
