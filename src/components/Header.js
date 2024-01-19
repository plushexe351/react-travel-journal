import React from 'react'
import logo from "../images/headerLogo.svg"

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="header-logo" className='header--logo' />
            <h1 className="header--title">my travel journal.</h1>
        </div>
    )
}

export default Header
