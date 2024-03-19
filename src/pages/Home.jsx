import "../styles/homestyles.css";
import logovideo from '../img/logoasesores.mp4';
import logotranspar from '../img/Transparencia.mp4';
import { motion } from 'framer-motion';
function Home() {
    return (
        <section class="herohome">
            <div className="blackdiv">
                <div className="blurEffect1">
                    
                </div>
                <video

src={logovideo}
autoPlay
loop
muted
width="600px"
height="800px"
/>
            </div>
            <div className="blackdiv2">
                <motion.div className="divtext" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ x: window.innerHeight }}
                    transition={{ ease: "easeIn", duration: 2.2 }}>
                    <motion.p className='heroText' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ x: window.innerHeight }}
                        transition={{ ease: "easeIn", duration: 2.4 }}>Producimos soluciones y experiencias,
                        generando éxitos en marcas y productos dentro del rubro publicitario. Pensamos  y ejecutamos todo en un sólo lugar.
                        Somos la única agencia con <b className="homeboldtext">#AllinOne</b>, posicionada
                        regionalmente por más de <b className="homeboldtext">22 años </b>
                        colaborando con nuestros socios estratégicos gracias a nuestro equipo creativo y planta de producción.
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
}

export default Home;