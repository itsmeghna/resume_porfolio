import React, { useState } from "react";
import "../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("about");

  const handleClick = (id) => {
    setActive(id);
    setMenuOpen(false);
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar">
      <div className="logo">Meghna</div>
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        {["about", "skills", "experience", "projects", "education", "contact"].map((item) => (
          <a
            key={item}
            href={`#${item}`}
            className={active === item ? "active" : ""}
            onClick={() => handleClick(item)}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </a>
        ))}
      </div>
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>☰</div>
    </nav>
  );
}

export default Navbar;
