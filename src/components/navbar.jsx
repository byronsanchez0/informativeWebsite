import React, { useState } from "react";
import "../homenavbar.css";
import insta from '../img/instalogo.png';
import fb from '../img/fblogo.png';
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

        if(icon === "nav__toggler"){
            setIcon("nav__toggler toggle");
        }else setIcon ("nav__toggler");
    };
    
    return (
        <nav className="nav">
            <a href="/Home" className="nav__brand">
                Asesores
            </a>
            <ul className={active}>
                <li className="nav__item">
                    <a href={"/Home"} className="nav__link">
                        INICIO
                    </a>
                </li>
                <li className="nav__item">
                    <a href={"/About"}  className="nav__link">
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
                    <a href="#" className="nav__link">
                    <img src={fb} alt="fb image" width={100} height={100}></img>
                    </a>
                </li>
                <li className="nav__item">
                    <a href="#" className="nav__link">
                    <img src={insta} alt="insta image" width={100} height={100}></img>
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

/*function CustomLink({to, children, props})
{
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
    return(
        <li className={isActive ? "active" : ""}>
            <Link to= {to} {...props}>
                {children}
            </Link>
        </li>
    )
    
}*/