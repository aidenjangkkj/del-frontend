// src/HomeScreen.js
import React, { useState, useEffect } from "react";
import Navbar from "./NavBar";
import { useNavigate } from "react-router-dom";
import DaumPostcode from "react-daum-postcode";
import { db } from "../firebaseConfig";
import { collection, onSnapshot } from "firebase/firestore";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

const HomeScreen = ({ cart, setCart, setAddress}) => {
  // 로그인 상태 및 인증 로딩 상태 관리
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [authLoaded, setAuthLoaded] = useState(false);
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setAuthLoaded(true);
    });
    return () => unsubscribe();
  }, []);

  // 인증 로딩이 완료되었고, 로그인하지 않았다면 로그인 화면으로 이동
  useEffect(() => {
    if (authLoaded && !user) {
      navigate("/login");
    }
  }, [authLoaded, user]);

  // 주소 관련 상태 (메인 주소와 상세 주소를 별도로 관리)
  const [mainAddress, setMainAddress] = useState("");
  const [detailAddress, setDetailAddress] = useState("");
  const [showPostcode, setShowPostcode] = useState(false);

  // 카테고리 목록 (전체 포함)
  const categories = ["전체", "세트메뉴", "면류", "밥류", "요리류", "사이드", "음료"];
  const [activeCategory, setActiveCategory] = useState("전체");

  // Firestore에서 메뉴 데이터를 저장할 상태
  const [menuItems, setMenuItems] = useState([]);

  // Firestore "menu" 컬렉션에서 메뉴 데이터를 실시간으로 불러오기
  useEffect(() => {
    const colRef = collection(db, "menu");
    const unsubscribe = onSnapshot(
      colRef,
      (snapshot) => {
        const items = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setMenuItems(items);
      },
      (error) => console.error("메뉴 데이터를 불러오는 중 오류:", error)
    );
    return () => unsubscribe();
  }, []);

  // 메뉴 아이템을 장바구니에 추가하는 함수
  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  // DaumPostcode에서 주소 선택 완료 시 호출
  const handleComplete = (data) => {
    setMainAddress(data.address);
    setShowPostcode(false);
  };

  // 메인 주소와 상세 주소를 합쳐 최종 주소 생성
  const fullAddress =
    mainAddress && detailAddress ? `${mainAddress} ${detailAddress}` : mainAddress;

  // fullAddress가 변경될 때 App의 address 상태 업데이트
  useEffect(() => {
    setAddress(fullAddress);
  }, [fullAddress, setAddress]);

  // 메뉴 출력 함수 (activeCategory에 따라 필터링 혹은 그룹화하여 출력)
  const renderMenu = () => {
    if (activeCategory !== "전체") {
      const filteredMenu = menuItems.filter(
        (item) => item.category === activeCategory
      );
      return (
        <div>
          <h2 className="text-xl font-bold mt-4 mb-2">{activeCategory}</h2>
          {filteredMenu.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 mb-2 rounded-lg shadow-md flex items-center"
            >
              {item.image && (
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-lg mr-4"
                />
              )}
              <div className="flex-1">
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-gray-500">
                  ₩{Number(item.price).toLocaleString()}
                </p>
                {item.description && (
                  <p className="text-gray-500">설명: {item.description}</p>
                )}
              </div>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                onClick={() => addToCart(item)}
              >
                추가
              </button>
            </div>
          ))}
        </div>
      );
    } else {
      // "전체" 선택 시, 각 카테고리별로 그룹화하여 출력
      return categories
        .filter((cat) => cat !== "전체")
        .map((cat) => {
          const itemsForCategory = menuItems.filter(
            (item) => item.category === cat
          );
          if (itemsForCategory.length === 0) return null;
          return (
            <div key={cat}>
              <h2 className="text-xl font-bold mt-4 mb-2">{cat}</h2>
              {itemsForCategory.map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-4 mb-2 rounded-lg shadow-md flex items-center"
                >
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded-lg mr-4"
                    />
                  )}
                  <div className="flex-1">
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                    <p className="text-gray-500">
                      ₩{Number(item.price).toLocaleString()}
                    </p>
                    {item.description && (
                      <p className="text-gray-500">설명: {item.description}</p>
                    )}
                  </div>
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                    onClick={() => addToCart(item)}
                  >
                    추가
                  </button>
                </div>
              ))}
            </div>
          );
        });
    }
  };

  // 레스토랑 정보 (원하는 경우 Firestore에서 가져올 수도 있음)
  const restaurantName = "중화반점";
  const restaurantHours = "11:00 - 22:00";

  // 인증 로딩 중에는 간단한 로딩 UI를 표시 (선택 사항)
  if (!authLoaded) {
    return <div className="min-h-screen flex items-center justify-center">로딩 중...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 pb-32 relative">
      {/* 헤더: 좌측에는 레스토랑 정보, 우측에는 로그아웃 버튼 배치 */}
      <header className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold">{restaurantName}</h1>
          <p className="text-gray-500">영업시간: {restaurantHours}</p>
          <p className="text-gray-500">최소 주문 금액: ₩20000</p>
        </div>
        {user && (
          <button
            className="bg-gray-800 text-white px-4 py-2 rounded"
            onClick={() => {
              const auth = getAuth();
              signOut(auth)
                .then(() => {
                  alert("로그아웃 되었습니다.");
                  navigate("/login");
                })
                .catch((error) => {
                  alert(error.message);
                });
            }}
          >
            로그아웃
          </button>
        )}
      </header>

      {/* 주소 설정 영역 */}
      <div className="my-4 bg-white p-4 rounded-lg shadow-md">
        <label className="block text-gray-700 mb-2">배달 받을 주소</label>
        {fullAddress ? (
          <p className="mb-2 text-gray-700">전체 주소: {fullAddress}</p>
        ) : (
          <p className="mb-2 text-gray-700">주소가 설정되지 않았습니다.</p>
        )}
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={() => setShowPostcode(true)}
        >
          주소 검색
        </button>
        {showPostcode && (
          <div className="mt-2">
            <DaumPostcode onComplete={handleComplete} />
          </div>
        )}
        {mainAddress && (
          <div className="mt-4">
            <label className="block text-gray-700 mb-2">상세 주소</label>
            <input
              type="text"
              value={detailAddress}
              onChange={(e) => setDetailAddress(e.target.value)}
              placeholder="상세 주소를 입력하세요"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
        )}
      </div>

      {/* 카테고리 선택 Nav (옆으로 스크롤) */}
      <div className="mb-4">
        <div className="flex space-x-4 overflow-x-auto p-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-lg whitespace-nowrap ${
                activeCategory === category
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* 메뉴 목록 (필터링 또는 그룹화된 메뉴) */}
      <div className="mt-4">{renderMenu()}</div>

      {/* 하단 Navbar */}
      <Navbar
        activeScreen="home"
        cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)}
      />
    </div>
  );
};

export default HomeScreen;
