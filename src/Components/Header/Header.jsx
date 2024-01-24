import "./Header.css";
import { IoSearch } from "react-icons/io5";
import { BsPersonFill } from "react-icons/bs";
import { IoCart } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import DropDown from "./DropDown/DropDown";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";



function Header() {
  const [dropDown,setdropDown] = useState(false)
  const cart = useSelector(state=> state.persistedReducer.myCart)
  const navigate = useNavigate()
  const handleNavigate = ()=>{
    navigate('/cart')
  }
  return (
    <header>
      <div className="headerWrapper">
        <NavLink to="/" className="headerLeft">
          {" "}
          COLO<p className="p">SHOP</p>
        </NavLink>
        <div className="headerRight">
          <div className="headerRight1">
            <ul className="ul">
              <NavLink to="/" className="home">HOME</NavLink>
              <li>SHOP</li>
              <li>PROMOTION</li>
              <li>PAGES</li>
              <li>BLOG</li>
              <li>CONTACT</li>
            </ul>
          </div>
          <div className="headerRight2">
            <div className="headerRight-Icons">
              <IoSearch />
            </div>
            <div className="headerRight-Icons" id="headerRight-DropDown" onMouseOver={()=>setdropDown(true)}>
              <BsPersonFill />
            </div>
            {
              dropDown? <DropDown setdropDown={setdropDown} />: null
            }
            <div className="headerRight2CartHolder" onClick={handleNavigate}>
              <IoCart />
              <div className="headerRight-SmallCircle">{cart.length}</div>
            </div>
            <div className="headerRight-Icons" id="burgerMenu">
            <GiHamburgerMenu />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
