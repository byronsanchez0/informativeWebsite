import React, { useState, useContext } from "react";
import Carousel from "react-multi-carousel";
import '../styles/tworowcarousel.css';
import madera from '../img/imgcarousel/Madera.png';
import constancia from '../img/carousel/23laconstancia.jpeg';
import videotigo from '../img/carousel/17tigovideo.mp4';
import disensaoffset from '../img/imgcarousel/Offset.png';
import plotterBancoAzul from '../img/imgcarousel/Plotter.png';
import metaDay from '../img/imgcarousel/Estructura.png';
import promocionalFanta from '../img/imgcarousel/Promocional.png';
import acrilicoBINAES from '../img/imgcarousel/Acrílico.png';
import digitalcri from '../img/imgcarousel/Digital.png';
import activacionPanda from '../img/imgcarousel/Activacion BTL.png';
import eventoTp from '../img/imgcarousel/Eventos.png';
import termoformadoPilsener from '../img/imgcarousel/Termoformado.png';
import serigraifaLoto from '../img/imgcarousel/Serigrafia.png';
import coprteLaser from '../img/imgcarousel/Corte Laser.png';
import eventoNewYear from '../img/carousel/15happynewyear.jpg';
import impresionUv from '../img/imgcarousel/UV.png';
import img18 from '../img/carousel/19tarjeta.png';
import img19 from '../img/carousel/20helada.jpg';
import img20 from '../img/carousel/21gasofa.jpeg';
import img21 from '../img/carousel/22winwin.jpeg';
import img22 from '../img/carousel/23laconstancia.jpeg';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import MyContext from './ItemContext';
import ItemDetails from "./ItemDetails";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TwoRowCarousel = () => {

  const [showModal, setShowModal] = useState(false);
  const { handleSelectedItem } = useContext(MyContext);

  const [selectedImage, setSelectedImage] = useState(null);

  const [items, setItems] = useState(
    [
      { id: 1, title: "Diseño y producción", description: "Madera: Diseño y producción Spot al estilo Corona Sunsets", type: 'image', src: madera },
      { id: 2, title: "Evento Tigool", description: "Video resumen de evento Tigoool.", type: 'video', src: videotigo },
      { id: 3, title: "Diseño y producción", description: "Diseño y producción para La Constancia.", type: 'image', src:  img22},
      { id: 4, title: "Impresión UV", description: "Rótulos impresos sobre ACM con efecto realzado UV Emboss Clear para generar el sistema de lectoescritura táctil. ", type: 'image', src: impresionUv },
      { id: 5, title: "Meta Day El Salvador ", description: "Estructura: Meta Day El Salvador nos permitió explotar nuestra creatividad y producción colaborando en conjunto con nuestro partner @Meta sobre sus estrategias digitales para el sector universiatrio, pequeña empresa y Ministerio de Economía en El Salvador", type: 'image', src: metaDay },
      { id: 6, title: "Lanzamiento Fanta: promocional", description: "Promocional: ¡Kit Promocional! Bajo lanzamiento Fanta sabor Piña. Nos encantó ser parte de los detalles diseñando, produciendo y empacando todo en un mismo lugar", type: 'image', src: promocionalFanta },
      { id: 7, title: "Acrílico", description: "Diseño y producción de área temática BINAES, Impresión directa sobre acrílico troquelado con luz led.", type: 'image', src: acrilicoBINAES },
      { id: 8, title: "DigitaL: Criket", description: "¡Diseño y producción de pines Cricket!", type: 'image', src: digitalcri },
      { id: 9, title: "Activación BTL", description: "¡Déjate sorprender por tu marca! Activación BTL Panda Express. Nos encanta ser parte de tus estrategias comerciales.", type: 'image', src: activacionPanda },
      { id: 10, title: "Evento Teleperformance", description: "¡Diseño, producción, montaje y experiencias para celebración de comienzo del año 2024 con Teleperformance! Para fiesta de inicio de año llena de emoción y alegría.", type: 'image', src: eventoTp },
      { id: 11, title: "Termoformado: Pilsener", description: "Porta afiches termoformados, con realces en detalles con impresión directa en lámina de estireno.", type: 'image', src: termoformadoPilsener },
      { id: 12, title: "Serigrafía", description: "¡Kits de invitación lanzamiento Loto! Disfrutamos en producir kits #Loto. Nos encanta colaborar en tus estrategias comerciales.", type: 'image', src: serigraifaLoto },
      { id: 13, title: "Corte Láser", description: "S ¡Reconocimiento empresarial! Nos fascina operar en las estrategias de tu marca con un gran impacto.", type: 'image', src: coprteLaser },
      { id: 14, title: "Offset disensa", description: "Producción de impresión offset de vanguardia para ofrecerte abanicos, revistas, folletos, catálogos y más en la calidad más alta.", type: 'image', src: disensaoffset },
      { id: 16, title: "Evento de Año Nuevo, Teleperformance.", description: "Diseño y montaje de evento para fiesta corporativa, Teleperformance El Salvador.", type: 'image', src: eventoNewYear },

    ]
  );

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1300 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 721 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 720, min: 0 },
      items: 1,
    },
  };

  const handleClick = (item) => {
    handleSelectedItem(item);
    setShowModal(!showModal);
    console.log('eto furula');
  }


  const handleCloseModal = () => {
    setShowModal(false);
    console.log('eto NO furula');
  }

  return (




    // *********** CAROUSEL ACAAAAAAAAA *******
    < div >
      <Carousel
        responsive={responsive}
        infinite={true}
        centerMode={true}
      >

        {items.map((item, index) => (
          <div key={index} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 0 }} >

            {item?.type === 'image' && (
              <Link to={'./item/${item.id}'}>
                <div onClick={() => handleClick(item)} className="divtry">
                  <img
                    key={index}
                    src={item.src}
                    alt="img1dolofin"
                    width="600px"
                    height="400px"
                    className="carouselImage"
                  />
                </div>

              </Link>

            )}
            {item?.type === 'video' && (
              <Link to={'./item/${item.id}'}>
                <div onClick={() => handleClick(item)} className="divtry">
                  <video
                    src={item.src}
                    autoPlay
                    loop
                    muted
                    width="600px"
                    height="400px"
                    className="videocarrosel"
                  />
                </div>
              </Link>
            )}

          </div>
        ))}

      </Carousel>

      {showModal && <ItemDetails onClose={showModal} />}


    </div >

  )
};

export default TwoRowCarousel;