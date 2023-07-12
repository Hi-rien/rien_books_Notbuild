import React from "react";
import {Link} from 'react-router-dom'
import logo from '../img/book.png'

export default function Header() {

  return (
    <header className="header_container">
      <div className="head_line"></div>
      <Link to="/">
        <img className="logo" src={logo} alt="logo" />
      </Link>
    </header>
  )

}