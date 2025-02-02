import React, { useState } from "react";
// import "./Header.css"; // Import the CSS file

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="header" data-aos="fade-down" data-aos-once="true">
        <div className="logo">Café Crust</div>

        <nav className={`nav ${menuOpen ? "active" : ""}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <a className="nav-link" href="#FirstPage">
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#CoffeePage">
                COFFEE
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#BakeryPage">
                BAKERY
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#app">
                TESTIMONIAL
              </a>
            </li>
          </ul>
        </nav>

        <div className="search">
          <input
            type="text"
            className="search-input"
            placeholder="Search..."
            aria-label="Search"
          />
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          ☰
        </div>
      </header>
    </>
  );
};

export default Header;
