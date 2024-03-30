import { useState } from "react";
import "./styles/header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleChangeOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header-foodi">
      <img className="logo-header" src="/logo foodi.PNG" alt="logo not found" />

      <nav className={isOpen ? "main-nav open" : "main-nav"}>
        <ul className="list-box-header">
          <li className="item-li-header">Home</li>
          <li className="item-li-header">Menu</li>
          <li className="item-li-header">Services</li>
          <li className="item-li-header">Offers</li>
        </ul>

        <div className="logo-and-icon-box">
          <img className="img-logo-visible" src="/logo foodi.PNG" alt="" />
          <div className="close-icon-box" onClick={handleChangeOpen}>
            <i className="bx bx-x icon-close"></i>
          </div>
        </div>
      </nav>

      <div className="actions-box-header">
        <i className="bx bx-search"></i>
        <i className="bx bx-shopping-bag"></i>
        <button className="contact-button">
          <i className="bx bx-phone-call"></i>
          <span className="text-contact">Contact</span>
        </button>
        <div onClick={handleChangeOpen} className="menu-icon-box">
          <i className="bx bx-menu"></i>
        </div>
      </div>
    </header>
  );
};

export default Header;
