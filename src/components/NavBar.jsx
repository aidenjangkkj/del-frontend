// src/NavBar.js
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ cartCount = 0 }) => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white p-4 flex justify-around shadow-md">
      <Link
        to="/"
        className={isActive("/") ? "text-blue-500 font-semibold" : "text-gray-500"}
      >
        홈
      </Link>
      <Link
        to="/cart"
        className={isActive("/cart") ? "text-blue-500 font-semibold" : "text-gray-500"}
      >
        장바구니 {cartCount > 0 ? `(${cartCount})` : ""}
      </Link>
      <Link
        to="/paid"
        className={isActive("/paid") ? "text-blue-500 font-semibold" : "text-gray-500"}
      >
        주문 내역
      </Link>
      <Link
        to="/myinfo"
        className={isActive("/myinfo") ? "text-blue-500 font-semibold" : "text-gray-500"}
      >
        내 정보
      </Link>
    </nav>
  );
};

export default Navbar;
