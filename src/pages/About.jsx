import "../styles/aboutstyles.css";
import wpaper from "../img/wllpaper.jpg";
import cliente1 from '../img/others-img/CLIENTE1.png';
import cliente2 from '../img/others-img/CLIENTE2.png';
import cliente3 from '../img/others-img/CLIENTE3.png';
import cliente4 from '../img/others-img/CLIENTE4.png';
import cliente5 from '../img/others-img/CLIENTE5.png';
import cliente6 from '../img/others-img/CLIENTE6.png';
import cliente7 from '../img/others-img/CLIENTE7.png';
import cliente8 from '../img/others-img/CLIENTE8.png';
import cliente9 from '../img/others-img/CLIENTE9.png';
import cliente10 from '../img/others-img/CLIENTE10.png';
import cliente11 from '../img/others-img/CLIENTE11.png';
import cliente12 from '../img/others-img/CLIENTE12.png';
import icon1 from '../img/others-img/icono-1.png';
import icon2 from '../img/others-img/icono-2.png';
import icon3 from '../img/others-img/icono-3.png';
import icon4 from '../img/others-img/icono-4.png';
import icon5 from '../img/others-img/icono-5.png';
import icon6 from '../img/others-img/icono-6.png';
import { motion } from 'framer-motion';

function About() {

    return (
        <body>
            <section class="aboutgrid-container"
            >
                <div class="aboutgrid-item1">
                    <div className="gridtitle">
                        <motion.h1 initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ x: window.innerWidth }}
                            transition={{ ease: "easeOut", duration: 0.4 }}>NUESTROS</motion.h1>
                        <motion.h1 className="secondtitlegrid" initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ x: window.innerWidth }}
                            transition={{ ease: "easeOut", duration: 0.4 }}>SOCIOS</motion.h1>
                    </div>
                    <motion.div className="aboutgrid-1" initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ x: window.innerWidth }}
                        transition={{ ease: "easeOut", duration: 0.4 }}>
                        <div className="grid-item1-item"><img src={cliente1} alt="cliente1" /></div>
                        <div className="grid-item1-item"><img src={cliente2} alt="cliente2" /></div>
                        <div className="grid-item1-item"><img src={cliente3} alt="cliente3" /></div>
                        <div className="grid-item1-item"><img src={cliente4} alt="cliente4" /></div>
                        <div className="grid-item1-item"><img src={cliente5} alt="cliente5" /></div>
                        <div className="grid-item1-item"><img src={cliente6} alt="cliente6" /></div>
                        <div className="grid-item1-item"><img src={cliente7} alt="cliente7" /></div>
                        <div className="grid-item1-item"><img src={cliente8} alt="cliente8" /></div>
                        <div className="grid-item1-item"><img src={cliente9} alt="cliente9" /></div>
                        <div className="grid-item1-item"><img src={cliente10} alt="cliente10" /></div>
                        <div className="grid-item1-item"><img src={cliente11} alt="cliente11" /></div>
                        <div className="grid-item1-item"><img src={cliente12} alt="cliente12" /></div>
                    </motion.div>
                </div>
                <div class="aboutgrid-item2">
                    <motion.h1 className="h1-item2" initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ x: window.innerWidth }}
                        transition={{ ease: "easeOut", duration: 0.4 }}>EL SALVADOR</motion.h1>
                    <motion.p className="p-item2" initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ x: window.innerWidth }}
                        transition={{ ease: "easeOut", duration: 0.4 }}>22 AÑOS</motion.p>
                    <motion.h1 className="h1-item2" initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ x: window.innerWidth }}
                        transition={{ ease: "easeOut", duration: 0.4 }}>GUATEMALA</motion.h1>
                    <motion.p className="p-item2" initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ x: window.innerWidth }}
                        transition={{ ease: "easeOut", duration: 0.4 }}>16 AÑOS</motion.p>
                    <motion.h1 className="h1-item2" initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ x: window.innerWidth }}
                        transition={{ ease: "easeOut", duration: 0.4 }}>COBERTURA</motion.h1>
                    <motion.p className="p-item2" initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ x: window.innerWidth }}
                        transition={{ ease: "easeOut", duration: 0.4 }}>HND NI CR PAN</motion.p>
                    <motion.div className="aboutgrid-2" initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ x: window.innerWidth }}
                        transition={{ ease: "easeOut", duration: 0.4 }}>
                        <div className="grid-item2-item"><img src={icon1} alt="icon1" /><p>Medio Ambiente</p></div>
                        <div className="grid-item2-item"><img src={icon2} alt="icon2" /><p>Responsabilidad Social Empresarial</p></div>
                        <div className="grid-item2-item"><img src={icon3} alt="icon3" /><p>Seguridad Industrial</p></div>
                        <div className="grid-item2-item"><img src={icon4} alt="icon4" /><p>info@asesores.com.sv</p></div>
                        <div className="grid-item2-item"><img src={icon5} alt="icon5" /><p>(+503) 2121-0000</p></div>
                        <div className="grid-item2-item"><img src={icon6} alt="icon6" /><p>Calle Gerardo Barrios #1506 San Salvador, El Salvador.</p></div>
                    </motion.div>
                </div>
            </section>
        </body >
    );
}

export default About;