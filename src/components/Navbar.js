import React from 'react'
import Logo from "../assets/aaa.png";
import {Link} from 'react-router-dom';  
import '../styles/Navbar.css';

function Navbar() {
    return (
        <div className="navbar">
            <div className="leftSide">
            <img src={Logo} />
            </div>
            <div className="rightSide">
                <Link to = "/">Anasayfa</Link>
                <Link to = "/products">Ürünler</Link>
                <Link to = "/about">Hakkımızda</Link>
                <Link to = "/contact">Iletişim</Link>
                

            </div>

        </div>
    )
}

export default Navbar
