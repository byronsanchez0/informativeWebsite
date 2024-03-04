import "../styles/footerstyles.css";
import fb from '../img/fblogo.png';
import insta from '../img/instalogo.png';
function footer() {
    return (
        <footer>
            <a href="#" class="btn">grupo@asesores.com.sv</a>
            <p>&copy; 2024 Grupo Asesores. Todos los derechos reservados.</p>
            <a href="https://www.facebook.com/grupoasesores.sv" className="nav__link">
                <img src={fb} alt="insta image" width={35} height={35}></img>
            </a>
            <a href="https://www.instagram.com/grupoasesores.sv/" className="nav__link">
                <img src={insta} alt="insta image" width={35} height={35}></img>
            </a>
        </footer>
    );
}
export default footer;
