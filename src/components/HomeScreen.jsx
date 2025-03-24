// src/HomeScreen.js
import React, { useState, useEffect } from "react";
import Navbar from "./NavBar";
import { useNavigate } from "react-router-dom";
import DaumPostcode from "react-daum-postcode";
import { db } from "../firebaseConfig";
import {
  collection,
  onSnapshot,
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

const HomeScreen = ({ cart, setCart, setAddress }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [authLoaded, setAuthLoaded] = useState(false);

  // 사용자 인증 상태 관리
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setAuthLoaded(true);
    });
    return () => unsubscribe();
  }, []);

  // 인증 완료 후 로그인하지 않은 경우 로그인 화면으로 이동
  useEffect(() => {
    if (authLoaded && !user) {
      navigate("/login");
    }
  }, [authLoaded, user]);

  // 주소 상태
  const [mainAddress, setMainAddress] = useState("");
  const [detailAddress, setDetailAddress] = useState("");
  const [showPostcode, setShowPostcode] = useState(false);

  // Firestore에 저장된 주소 불러오기
  useEffect(() => {
    if (user) {
      const userDocRef = doc(db, "users", user.uid);
      getDoc(userDocRef)
        .then((docSnap) => {
          if (docSnap.exists()) {
            const data = docSnap.data();
            if (data.address) {
              setMainAddress(data.address.mainAddress || "");
              setDetailAddress(data.address.detailAddress || "");
            }
          }
        })
        .catch((error) => console.error("주소 불러오기 오류:", error));
    }
  }, [user]);

  // 주소 저장 및 전체 주소 업데이트
  const fullAddress =
    mainAddress && detailAddress ? `${mainAddress} ${detailAddress}` : mainAddress;

  useEffect(() => {
    setAddress(fullAddress);
  }, [fullAddress, setAddress]);

  useEffect(() => {
    if (user && fullAddress) {
      const userDocRef = doc(db, "users", user.uid);
      setDoc(
        userDocRef,
        { address: { mainAddress, detailAddress } },
        { merge: true }
      ).catch((error) => console.error("주소 저장 오류:", error));
    }
  }, [user, fullAddress, mainAddress, detailAddress]);

  // 가게 정보 (영업시간 및 공지사항)를 Firestore에서 불러오기
  const [businessHours, setBusinessHours] = useState("");
  const [announcement, setAnnouncement] = useState("");
  useEffect(() => {
    const fetchRestaurantInfo = async () => {
      try {
        const docRef = doc(db, "settings", "restaurantInfo");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setBusinessHours(data.businessHours || "");
          setAnnouncement(data.announcement || "");
        }
      } catch (error) {
        console.error("가게 정보 불러오기 오류:", error);
      }
    };
    fetchRestaurantInfo();
  }, []);

  // 카테고리, 메뉴 데이터, 장바구니 기능 등 기존 코드 유지...
  const categories = ["전체", "세트메뉴", "면류", "밥류", "요리류", "사이드", "음료"];
  const [activeCategory, setActiveCategory] = useState("전체");
  const [menuItems, setMenuItems] = useState([]);

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

  const handleComplete = (data) => {
    setMainAddress(data.address);
    setShowPostcode(false);
  };

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

  // 기존 상수: 기본 가게 이름 및 영업시간(파이어스토어 정보가 없을 경우 대체 값)
  const restaurantName = "맛차이나";
  const defaultHours = "11:00 - 22:00";

  if (!authLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        로딩 중...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 pb-32 relative">
      <header className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold">{restaurantName}</h1>
          <p className="text-gray-500">
            영업시간: {businessHours ? businessHours : defaultHours}
          </p>
          <p className="text-gray-500">최소 주문 금액: ₩20000</p>
          {announcement && (
            <p className="font-semibold">공지 사항: {announcement}</p>
          )}
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

      <div className="my-4 bg-white p-4 rounded-lg shadow-md">
        <label className="block text-gray-700 mb-2">배달 받을 주소</label>
        {fullAddress ? (
          <p className="mb-2 text-gray-700 font-extrabold text-xl">
            현재 주소: {fullAddress}
          </p>
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

      <div className="mt-4">{renderMenu()}</div>
      <Navbar
        activeScreen="home"
        cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)}
      />
    </div>
  );
};

export default HomeScreen;
