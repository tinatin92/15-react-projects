import React from "react";
import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";
import Submenu from "./Submenu";

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();

  const displaySubmenu = (event) => {
  
    const page = event.target.textContent;
    const tempBtn = event.target.getBoundingClientRect()
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3
    openSubmenu(page, {
      center,
      bottom
    });
  };
  const handleSubmenu = (event) =>{
    if(!event.target.classList.contains('link-btn')){
      closeSubmenu()
    }

 
  }



  return (
    <>
      <nav className="nav" onMouseOver={handleSubmenu}>
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} alt="logo" className="nav-logo" />
            <button className="btn toggle-btn" onClick={openSidebar}>
              <FaBars />
            </button>
          </div>
          <ul className="nav-links">
            <li>
              <button
                
                onMouseOver={displaySubmenu}
                className="link-btn"
              >
                products
              </button>
            </li>
            <li>
              <button onMouseOver={displaySubmenu} className="link-btn">
                developers
              </button>
            </li>
            <li>
              <button onMouseOver={displaySubmenu} className="link-btn">
                company
              </button>
            </li>
          </ul>
          <button className="btn signin-btn">Signin</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
