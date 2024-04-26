import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assests/logo.png'
import cart_icon from '../Assests/cart_icon.png'
import { Link } from 'react-router-dom' // import Link

export default function Navbar() {

    const [menu, setMenu] = useState("shop")

  return (
    <>
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>
                    SHOPPER
                </p>
            </div>
            <ul className="nav-menu">
                <li onClick={()=> {setMenu("shop")}}>
                  <Link className='navbar_link' to="/">Shop</Link>  {menu ==="shop" && <hr />}
                </li>
                <li onClick={()=> {setMenu("men")}}>
                    <Link className='navbar_link' to="/mens">Men</Link> {menu ==="men" && <hr />}
                </li>
                <li onClick={()=> {setMenu("womens")}}>
                    <Link className='navbar_link' to="/womens">Women</Link> {menu ==="womens" && <hr />}
                </li>
                <li onClick={()=> {setMenu("kids")}}>
                  <Link className='navbar_link' to="/kids" >Kids</Link>  {menu ==="kids" && <hr />}
                </li>
            </ul>
            <div className="nav-login-cart">
                <Link className='navbar_link' to="/login"><button>Login</button></Link>
                <Link className='navbar_link' to="/cart"><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">
                    0
                </div>
            </div>
        </div>
    </>
  )
}
