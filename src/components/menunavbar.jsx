import { Link } from "react-router-dom";

export default function Navbar() {
    
    return (
        <nav className="nav">
            <a href="/" className="site-title">
                ASESORES
            </a>
            
            <ul>
            <CustomLink href="/About">Nosotros</CustomLink>
            <CustomLink href="/Portafolio">Portafolio</CustomLink>
            <CustomLink href="/Contacto">Contacto</CustomLink>
           
            </ul>
        </nav>
    )
}

function CustomLink({ href, children, ...props }) {
    const path = window.location.pathname
    return (
        <li className={path === href ? "active" : ""}>
            <a href={href} {...props}>{children}</a> 
        </li>
    )
}