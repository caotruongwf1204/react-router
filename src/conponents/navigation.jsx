import { Link, NavLink } from "react-router-dom";
import "./navigation.css";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../hooks/use-cart";

export default function Navigation() {
  const { totalItem } = useCart();

  return (
    <nav className="nav-header">
      <div className="nav-bar">
        <NavLink className="link" to={"/"}>
          Home
        </NavLink>
        <NavLink className="link" to={"/collection"}>
          Collection
        </NavLink>
        <NavLink className="link" to={"/about"}>
          About
        </NavLink>
        <NavLink className="link" to={"/contact"}>
          Contact
        </NavLink>
        <NavLink className="link" to={"/policy"}>
          Policy
        </NavLink>
      </div>

      <div className="use">
        <Link className="link" to={"/login"}>
          Login
        </Link>
        <Link className="link" to={"/signup"}>
          Sign up
        </Link>
        <Link className="link link-total-item" to={"/shopping-cart"}>
          <FaShoppingCart />
          <span className="total-item">{totalItem}</span>
        </Link>
      </div>
    </nav>
  );
}
