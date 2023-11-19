import { Link } from "react-router-dom";
import Navigation from "./navigation";
import './header.css'

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
      <Link className="logo-link" to={"/"}>
          <h1>LOGO</h1>
        </Link>
      </div>

      <Navigation />
    </header>
  );
}
