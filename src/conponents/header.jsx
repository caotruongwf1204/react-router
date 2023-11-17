import { Link } from "react-router-dom";
import Navigation from "./navigation";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
      <Link to={"/"}>
          <h1>Logo</h1>
        </Link>
      </div>

      <Navigation />
    </header>
  );
}
