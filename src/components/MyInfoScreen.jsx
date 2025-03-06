// src/MyInfoScreen.js
import React, { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";
import { db } from "../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import Navbar from "./NavBar";

const MyInfoScreen = ({}) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  // 현재 로그인한 사용자의 정보를 가져옴
  const auth = getAuth();
  const user = auth.currentUser;

  useEffect(() => {
    if (user) {
      const docRef = doc(db, "users", user.uid);
      getDoc(docRef)
        .then((docSnap) => {
          if (docSnap.exists()) {
            setUserData(docSnap.data());
          } else {
            console.log("사용자 데이터가 없습니다.");
          }
        })
        .catch((error) => {
          console.error("사용자 정보를 불러오는 중 오류:", error);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [user]);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* 헤더 영역 */}
      <header className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center text-center">
        <h1 className="text-xl font-bold">내 정보</h1>
      </header>

      {/* 사용자 정보 표시 영역 */}
      <div className="mt-4 bg-white p-4 rounded-lg shadow-md">
        {loading ? (
          <p>내 정보를 불러오는 중...</p>
        ) : userData ? (
          <div className="space-y-2">
            <p>
              <strong>이름:</strong> {userData.username}
            </p>
            <p>
              <strong>이메일:</strong> {userData.email}
            </p>
            <p>
              <strong>전화번호:</strong> {userData.phone}
            </p>
            <p>
              <strong>포인트:</strong> {userData.points}
            </p>
          </div>
        ) : (
          <p>사용자 정보가 존재하지 않습니다.</p>
        )}
      </div>
      <Navbar/>
    </div>
  );
};

export default MyInfoScreen;
