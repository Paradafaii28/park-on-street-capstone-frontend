import React from 'react'
import './Navbar.css'
import Logo from '../Photo/carlogo1.png'

export default function Navbar() {
    return (
        <div>
            <div className="navbar-container">
                <div className="logo-car">
                    <img src={Logo}/>
                </div> 
                <div className="navbar-list">
                    <ul>
                        <li>LOG IN</li>
                        <li>SIGN UP</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
