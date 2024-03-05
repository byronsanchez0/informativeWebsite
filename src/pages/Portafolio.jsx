import '../styles/portafoliostyles.css';
import produccion from '../img/PRODUCCION.png';
import TwoRowCarousel from '../components/carousel';
import "react-multi-carousel/lib/styles.css";
function Portafolio() {
    return (
        <body>
            <section class="grid-container">
                <div class="grid-item1">
                    <div className='colum-div-1'>
                        <h1 className='portfolio-h1'>NUESTROS SOCIOS</h1>
                        <p className='portfolio-text'>Impresión Offset, Impresión Digital, Impresión UV, Plotter, Corte Láser, Madera, Acrílico, Estructuras, Promocionales.</p>
                    </div>
                </div>
                <div class="grid-item2">
                    <div className='colum-div-2'>
                        <h1 className='portfolio-h1'>CREAMOS EXPERIENCIAS</h1>
                        <p className='portfolio-text'>Activaciones de Marca, Lanzamientos, Perifoneo, Sampling, PhotoBooth, VideoBooth, Audio y Sonido, Cobertura, Pantallas, Eventos.</p>
                    </div>
                </div>
                <div class="grid-item3">
                    <div className='colum-div-3'>
                        <h1 className='portfolio-h1'>SOMOS CREATIVOS</h1>
                        <p className='portfolio-text'>Estrategias, Branding, Social Media, Trademarketing, Diseño Editorial, Diseño Digital,  Diseño Industrial, Diseño Publicitario. </p>
                    </div>
                </div>
                
            </section>
            <div className='carousel'>
                <TwoRowCarousel className='complete-carousel'/>
                </div>
        </body>
    );
}

export default Portafolio;