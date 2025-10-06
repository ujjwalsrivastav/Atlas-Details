import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const[show,setShow]=useState(false);
  const handlebuttonToggle=()=>{
    return setShow(!show)
  }
  return (
    <header>
      <div className="container">
        <div className="grid navbar-grid">
          <div className="logo">
            <NavLink to="/">
              <h1>Atlas Details</h1>
            </NavLink>
          </div>

          <nav className={show?"menu-mobile":"menu-web"}>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/country">Country</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
                
            </ul>
          </nav>
          <div className="ham-menu">
            <button onClick={handlebuttonToggle}>
              <GiHamburgerMenu/>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
