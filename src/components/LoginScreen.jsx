// src/LoginScreen.js
import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const LoginScreen = ({}) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // 이메일 인증 여부 확인
        if (!user.emailVerified) {
          alert("이메일 인증을 완료해주세요.");
          return;
        }
        alert("로그인 성공!");
        navigate("/");
      })
      .catch((error) => {
        console.error("로그인 오류:", error);
        alert(error.message);
      });
  };

  // 비밀번호 재설정 함수
  const handleForgotPassword = () => {
    const auth = getAuth();
    if (!email) {
      alert("비밀번호 재설정을 위해 이메일을 입력해주세요.");
      return;
    }
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("비밀번호 재설정 이메일을 보냈습니다. 이메일을 확인해주세요.");
      })
      .catch((error) => {
        console.error("비밀번호 재설정 오류:", error);
        alert(error.message);
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">로그인</h1>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">이메일</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="이메일 입력"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">비밀번호</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="비밀번호 입력"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg"
          >
            로그인
          </button>
        </form>
        <div className="mt-4 text-center">
          <button
            type="button"
            className="text-blue-500 underline"
            onClick={handleForgotPassword}
          >
            비밀번호 찾기
          </button>
        </div>
        <div className="mt-4 text-center">
          <p>계정이 없으신가요?</p>
          <button
            className="mt-2 text-blue-500 underline"
            onClick={() => navigate("/signup")}
          >
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
