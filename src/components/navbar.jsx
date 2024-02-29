import React, { useState } from "react";
import "../styles/homenavbar.css";
import insta from '../img/instalogo.png';
import fb from '../img/fblogo.png';
import as from '../img/logo.png';
//import {Link, useMatch, useResolvedPath} from "react-router-dom";

function Navbar() {

    const [active, setActive] = useState("nav__menu");
    const [icon, setIcon] = useState("nav__toggler");
    const navToggle = () => {

        if (active === "nav__menu") {
            setActive("nav__menu nav__active");
        } else setActive("nav__menu");
        /* active === 'nav__menu' 
         ? setActive('nav__menu nav__active') 
         : setActive('nav__menu'); 
         */
        //Icon Toggler

        if (icon === "nav__toggler") {
            setIcon("nav__toggler toggle");
        } else setIcon("nav__toggler");
    };

    return (
        <nav className="nav">
            <a href="/" className="nav__link" target="_blank">
                <img src={as} alt="asesores image" width={40} height={40}></img>
            </a>
            <ul className={active}>
                <li className="nav__item">
                    <a href={"/"} className="nav__link">
                        INICIO
                    </a>
                </li>
                <li className="nav__item">
                    <a href={"/About"} className="nav__link">
                        NOSOTROS
                    </a>
                </li>
                <li className="nav__item">
                    <a href="/Portafolio" className="nav__link">
                        PORTAFOLIOaaa
                    </a>
                </li>
                <li className="nav__item">
                    <a href="/Contact" className="nav__link">
                        CONTACTO
                    </a>
                </li>
                <li className="nav__item">
                    <a href="https://www.facebook.com/grupoasesores.sv" className="nav__link" target="_blank">
                        <img src={fb} alt="fb image" width={40} height={40}></img>
                    </a>
                </li>
                <li className="nav__item">
                    <a href="https://www.instagram.com/grupoasesores.sv/" className="nav__link" target="_blank">
                        <img src={insta} alt="insta image" width={40} height={40}></img>
                        
                    </a>
                </li>
            </ul>
            <div onClick={navToggle} className={icon}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>

    );

}

export default Navbar;
