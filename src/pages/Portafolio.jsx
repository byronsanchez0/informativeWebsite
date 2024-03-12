import '../styles/portafoliostyles.css';
import produccion from '../img/PRODUCCION.png';
import TwoRowCarousel from '../components/carousel';
import "react-multi-carousel/lib/styles.css";
import { useState, useEffect } from 'react';
//import { isVisible } from '@testing-library/user-event/dist/utils';
function Portafolio() {

        /* const [isVisible, setIsVisible] = useState(false);
 

    useEffect (() => {
        setIsVisible(true);
    }, []); */
    //{`section ${isVisible ? 'visible' : 'hidden'}`}
    return (
        <body >
                
            {/* <section class={`grid-container ${isVisible ? 'visible' : 'hidden'} `}> */}
            <section >
                <div className='griditems'>
                    <div class="grid-item1">
                    </div>
                    <div className='colum-div-1'>
                        <h1 className='portfolio-h1'>NUESTROS SOCIOS</h1>
                        <p className='portfolio-text'>Impresión Offset, Impresión Digital, Impresión UV, Plotter, Corte Láser, Madera, Acrílico, Estructuras, Promocionales.</p>
                    </div>

                </div>
                <div className='griditems'>
                    <div class="grid-item2">
                    </div>
                    <div className='colum-div-2'>
                        <h1 className='portfolio-h1'>CREAMOS EXPERIENCIAS</h1>
                        <p className='portfolio-text'>Activaciones de Marca, Lanzamientos, Perifoneo, Sampling, PhotoBooth, VideoBooth, Audio y Sonido, Cobertura, Pantallas, Eventos.</p>
                    </div>
                </div>

                <div className='griditems'>
                    <div class="grid-item3">
                    </div>
                    <div className='colum-div-3'>
                        <h1 className='portfolio-h1'>SOMOS CREATIVOS</h1>
                        <p className='portfolio-text'>Estrategias, Branding, Social Media, Trademarketing, Diseño Editorial, Diseño Digital,  Diseño Industrial, Diseño Publicitario. </p>
                    </div>
                </div>


            </section>
            <div className='carousel'>
                <TwoRowCarousel className='complete-carousel' />
            </div>
        </body>
    );
}

export default Portafolio;