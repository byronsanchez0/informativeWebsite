import "../styles/homestyles.css";
import logovideo from '../img/logoasesores.mp4';
import logotranspar from '../img/Transparencia.mp4';
function Home() {
    return (
        <section class="herohome">
            <video
            
                    src={logotranspar}
                    type="video/mp4"
                    autoPlay
                    loop
                    muted
                    width="600px"
                    height="400px"
                  />
            <p className='heroText'>Producimos soluciones y experiencias, generando éxitos en marcas y productos dentro del rubro publicitario. Pensamos  y ejecutamos todo en un sólo lugar.  Somos la única agencia con <b className="homeboldtext">#AllinOne</b>, posicionada regionalmente por más de <b className="homeboldtext">22 años</b> colaborando con nuestros socios estratégicos gracias a nuestro equipo creativo y planta de producción.</p>
        </section>
    );
}

export default Home;