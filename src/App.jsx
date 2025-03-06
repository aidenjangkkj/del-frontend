import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomeScreen from "./components/HomeScreen";
import CartScreen from "./components/CartScreen";
import OrdersScreen from "./components/OrderScreen";
import PaymentScreen from "./components/PaymentScreen";
import LoginScreen from "./components/LoginScreen";
import SignUpScreen from "./components/SignUpScreen";
import MyInfoScreen from "./components/MyInfoScreen";
import PaidOrdersScreen from "./components/PaidOrdersScreen";
import BankTransferScreen from "./components/BankTransferScreen";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db } from "./firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

const App = () => {
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);
  const [address, setAddress] = useState("");
  const [userId, setUserId] = useState(null);
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUserId(user.uid);
        try {
          const userDocRef = doc(db, "users", user.uid);
          const userDocSnap = await getDoc(userDocRef);
          if (userDocSnap.exists()) {
            setPhone(userDocSnap.data().phone || "");
          }
        } catch (error) {
          console.error("사용자 정보를 불러오는 중 오류 발생:", error);
        }
      } else {
        setUserId(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) return <div>로딩 중...</div>;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen cart={cart} setCart={setCart} address={address} setAddress={setAddress} />} />
        <Route path="/cart" element={<CartScreen cart={cart} setCart={setCart} setOrders={setOrders} address={address} />} />
        <Route path="/orders" element={<OrdersScreen orders={orders} />} />
        <Route path="/payment" element={userId ? <PaymentScreen orders={orders} address={address} userId={userId} phone={phone} setOrders={setOrders} /> : <Navigate to="/login" />} />
        <Route path="/bank-transfer" element={userId ? <BankTransferScreen orders={orders} address={address} userId={userId} phone={phone} setOrders={setOrders} /> : <Navigate to="/login" />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/signup" element={<SignUpScreen />} />
        <Route path="/myinfo" element={userId ? <MyInfoScreen /> : <Navigate to="/login" />} />
        <Route path="/paid" element={userId ? <PaidOrdersScreen userId={userId} phone={phone} /> : <Navigate to="/login" />} />
        <Route path="*" element={<div>404 - 페이지를 찾을 수 없습니다.</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
