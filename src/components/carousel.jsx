import React, { useState, useContext } from "react";
import Carousel from "react-multi-carousel";
import '../styles/tworowcarousel.css';
import tarjeta from '../img/carousel/19tarjeta.png';
import constancia from '../img/carousel/23laconstancia.jpeg';
import videotigo from '../img/carousel/17tigovideo.mp4';
import ricolino from '../img/carousel/6ricolino.jpg';
import img2 from '../img/carousel/2boda.jpg';
import img4 from '../img/carousel/4agendabimbo.jpg';
import img5 from '../img/carousel/5banquete.jpg';
import img7 from '../img/carousel/7desk.jpg';
import img9 from '../img/carousel/9planning.jpg';
import img10 from '../img/carousel/10cubo.png';
import img11 from '../img/carousel/11radicaltoast.jpg';
import img12 from '../img/carousel/12mcdonald.jpg';
import img13 from '../img/carousel/13bimbo2.png';
import img14 from '../img/carousel/14cubo2.png';
import img15 from '../img/carousel/15happynewyear.jpg';
import img16 from '../img/carousel/16open.jpg';
import img17 from '../img/carousel/18sabana.png';
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
      { id: 1, title: "Papeleria Corporativa", description: "Diseño y producción de papelería corporativa. Que tu marca impacte con detalles en barniz registrado.", type: 'image', src: tarjeta },
      { id: 2, title: "REEL EVENTO TIGOOOL", description: "Video resumen de evento Tigoool.", type: 'video', src: videotigo },
      { id: 3, title: "Evento x", description: "se hizo evento x", type: 'image', src: img2 },
      { id: 4, title: "Evento Ricolino", description: "Evento Ricolino ", type: 'image', src: ricolino },
      { id: 5, title: "Evento x", description: "Se hizo evento x", type: 'image', src: img2 },
      { id: 6, title: "Agenda Corporativa, Bimbo El Salvador", description: "Diseño y producción de agendas corporativas personalizadas para planeación comercial.", type: 'image', src: img4 },
      { id: 7, title: "Evento x", description: "Se hizo Evento x", type: 'image', src: img5 },
      { id: 8, title: "Trabajo profesional", description: "Realizamos un trabajo integral", type: 'image', src: img7 },
      { id: 9, title: "Trabajo en equipo", description: "Planeacion con el mejor equipo", type: 'image', src: img9 },
      { id: 10, title: "Kit Promocional, Cubo Pago.", description: "Se hizo Evento x", type: 'image', src: img10 },
      { id: 11, title: "Rótulo con luz troquelado.", description: "Diseño y producción de kit promocional para comercios afiliados al nuevo sistema de pago Cubo.", type: 'image', src: img11 },
      { id: 12, title: "Evento x", description: "Producción de rótulo en acrílico con detalles de luces para papas McDonalds.", type: 'image', src: img12 },
      { id: 13, title: "Evento x", description: "Se hizo Evento x", type: 'image', src: img13 },
      { id: 14, title: "Evento x", description: "Se hizo Evento x", type: 'image', src: img14 },
      { id: 16, title: "Evento de Año Nuevo, Teleperformance.", description: "Diseño y montaje de evento para fiesta corporativa, Teleperformance El Salvador.", type: 'image', src: img15 },

    ]
  );

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
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