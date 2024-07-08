import React, { useState } from 'react'
import bars from './assests/bars-solid.svg'
import Avatar from './Avatar'
import logo from './assests/logo.jpeg'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import './Nav.css'
import { useLocation } from 'react-router-dom'

const Nav = () => {

  const user =JSON.parse(localStorage.getItem("profile"))
  const navigate=useNavigate()
  const handleclick=()=>
  {
                 localStorage.clear()
                 navigate('/signin')
       
  }
  return (
   <>
         <nav className="main-nav">

         <div className="navbar">

         <button className="slide-in-icon" >
          <img src={bars} alt="bars" width="15" />
        </button>

        <div className="navbar-1">
          <Link to="/" className="nav-item nav-logo">
            <img src={logo} alt="logo" width={100} height={50}/>
          </Link>
          <Link to="/" className="nav-item nav-btn res-nav">
           Welcome
          </Link>
          <Link to="/" className="nav-item nav-btn res-nav">
            Safety
          </Link>
          <Link to="/" className="nav-item nav-btn res-nav">
           Adventure
          </Link>
          <Link to="/" className="nav-item nav-btn res-nav">
            Communities
          </Link>
          
          
        </div>
        <div className="navbar-2">

        <Avatar
                backgroundColor="#009dff"
                px="10px"
                py="7px"
                borderRadius="50%"
                color="white"
              >
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                >
                  {user.name.charAt(0).toUpperCase()}
                </Link>
              </Avatar>
              <button className="nav-item nav-links" onClick={handleclick} >
                Log out
              </button>
          </div>
         </div>
         </nav>
   
   </>



  )
}

export default Nav