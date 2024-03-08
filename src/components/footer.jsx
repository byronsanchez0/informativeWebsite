import "../styles/footerstyles.css";
import fb from '../img/fblogo.png';
import insta from '../img/instalogo.png';
function footer() {
    return (
        <footer>
            <a href="./Contact" className="mailfooter"> grupo@asesores.com.sv</a>
            <br />
            <div className="socialmediadiv">
            <a href="https://www.facebook.com/grupoasesores.sv" className="media_links">
                <img src={fb} alt="insta image" width={35} height={35}></img>
            </a>
            <a href="https://www.instagram.com/grupoasesores.sv/" className="media_links">
                <img src={insta} alt="insta image" width={35} height={35}></img>
            </a>
            </div>
            
           
            <p>&copy; 2024 Grupo Asesores. Todos los derechos reservados.</p>
            
        </footer>
    );
}
export default footer;
