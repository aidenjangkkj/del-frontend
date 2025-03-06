// src/CartScreen.js
import { useNavigate } from "react-router-dom";
import Navbar from "./NavBar";
import { CiSquareMinus } from "react-icons/ci";

const CartScreen = ({ cart,setOrders, setCart, address }) => {
  const navigate = useNavigate()
  const generateOrderId = () => {
    const characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = "";
    for (let i = 0; i < 4; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  };

  // 최소 주문 금액 (예: ₩10,000)
  const MIN_ORDER_AMOUNT = 20000;

  // 장바구니의 총 주문 금액 계산
  const totalAmount = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const placeOrder = () => {
    // 주소가 설정되어 있지 않으면 경고 후 주소 설정 화면(홈 화면)으로 이동
    if (!address || address.trim() === "") {
      alert("주소를 설정해야 합니다. 먼저 주소를 입력해 주세요.");
      navigate("/");
      return;
    }

    // 총 주문 금액이 최소 주문 금액 미만이면 아무 작업도 하지 않음
    if (totalAmount < MIN_ORDER_AMOUNT) {
      return;
    }

    setOrders((prevOrders) => [
      ...prevOrders,
      { id: generateOrderId(), items: cart,paid:false }
    ]);
    setCart([]);
    navigate("/orders");
  };

  // 항목의 수량을 줄이는 함수 (수량이 1이면 항목을 제거)
  const decreaseItemQuantity = (itemId) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.id === itemId) {
            if (item.quantity > 1) {
              return { ...item, quantity: item.quantity - 1 };
            } else {
              // 수량이 1이면 해당 항목 제거
              return null;
            }
          }
          return item;
        })
        .filter((item) => item !== null)
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 pb-32">
      <header className="bg-white p-4 rounded-lg shadow-md text-center">
        <h1 className="text-xl font-bold">장바구니</h1>
      </header>
      <div className="mt-4">
        {cart.length > 0 ? (
          cart.map((item, index) => (
            <div
              key={index}
              className="bg-white p-4 mb-2 rounded-lg shadow-md flex items-center"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 rounded-lg mr-4"
              />
              {/* 상품명과 가격이 들어가는 영역 */}
              <div className="flex-1">
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-gray-500">
                  ₩{(item.price * item.quantity).toLocaleString()}
                </p>
              </div>
              {/* 오른쪽 끝에 위치하는 수량 조절 영역 */}
              <div className="flex items-center">
              <span className="mx-2">{item.quantity}개</span>
                <CiSquareMinus
                size={'3rem'}
                  onClick={() => decreaseItemQuantity(item.id)}
                >
                  
                </CiSquareMinus>

              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">장바구니가 비어 있습니다.</p>
        )}
      </div>
      {cart.length > 0 && (
        <button
          className="w-full bg-green-500 text-white p-4 rounded-lg mt-4 disabled:opacity-50"
          onClick={placeOrder}
          disabled={totalAmount < MIN_ORDER_AMOUNT}
        >
          {totalAmount < MIN_ORDER_AMOUNT
            ? `최소 주문 금액은 ₩${MIN_ORDER_AMOUNT.toLocaleString()} 이상이어야 합니다.`
            : "주문하기"}
        </button>
      )}
      <Navbar
        cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)}
      />
    </div>
  );
};

export default CartScreen;
