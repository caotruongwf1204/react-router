import { Link, useNavigate } from "react-router-dom";
import Navigation from "./navigation";
import "./header.css";
import { useState } from "react";

export default function Header() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
 
    navigate(`/search?q=${search.trim()}`);

  };


  return (
    <header className="header">
      <div className="logo">
        <Link className="logo-link" to={"/"}>
          <h1>LOGO</h1>
        </Link>
      </div>

      <form onSubmit={handleSearch}>
        <input
          placeholder="Search product"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button>Search</button>
      </form>

      <Navigation />
    </header>
  );
}
