import { Link, NavLink } from "react-router-dom";
import './navigation.css'
import { LuLogIn } from "react-icons/lu";
import { SiGnuprivacyguard } from "react-icons/si";
import { FaShoppingCart } from "react-icons/fa";


export default function Navigation() {
  return (
    <nav className="nav-header">
      <div className="nav-bar">
        <NavLink className="link" to={"/"}>Home</NavLink>
        <NavLink className="link" to={"/collection"}>Collection</NavLink>
        <NavLink className="link" to={"/about"}>About</NavLink>
        <NavLink className="link" to={"/contact"}>Contact</NavLink>
        <NavLink className="link" to={"/policy"}>Policy</NavLink>
      </div>

      <div className="use">
        <Link className="link" to={"/login"}><LuLogIn /></Link>
        <Link className="link" to={"/signup"}><SiGnuprivacyguard /></Link>
        <Link className="link" to={"/shopping-cart"}><FaShoppingCart /></Link>
      </div>
    </nav>
  );
}
