import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import "../styles/homenavbar.css";
import insta from '../img/instalogo.png';
import fb from '../img/fblogo.png';
import as from '../img/aros-LOGO-ASESORES.png';
import AboutScreen from '../pages/About';
//import {Link, useMatch, useResolvedPath} from "react-router-dom";

function Navbar({screen}) {

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


    /*  const renderContent = () => {
         switch (activePage)
     } */
    //ESTOOOOOOO ES LA FORMA QUE QUEIRO PROBAR
    const [condition, setCondition] = useState(false);

  // OTRA OPCIONNNNNNNNNNNN

     const getScreenName = () => {
    switch (screen) {
      case 'home':
        return 'Home';
      case 'about':
        return 'About';
      case 'services':
        return 'Services';
      case 'contact':
        return 'Contact';
      default:
        return 'Unknown Screen';
    }
  };


    // ESTOOOOOOOOOOO ES OTRA FORMA
     
    const [activePage, setActivePage] = useState('Home');



    const handleItemClick = (pageName) => {

        setActivePage(pageName);

    };

    function CustomLink({ href, children, ...props }) {
        const path = window.location.pathname
        return (
            <li className={path === href ? "active" : ""}>
                <a href={href} {...props}>{children}</a> 
            </li>
        )
    }

    return (
        <nav className="nav">
            <a href="/" className="nav__link" > 
                <img src={as} alt="asesores image" width={40} height={40}></img>
            </a>
            <ul className={active}>
            <CustomLink href="/">Inicio</CustomLink>
            <CustomLink href="/About">Nosotros</CustomLink>
            <CustomLink href="/Portafolio">Portafolio</CustomLink>
            <CustomLink href="/Contact">Contacto</CustomLink>
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
