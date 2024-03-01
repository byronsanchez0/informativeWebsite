import React, { useState } from "react";
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


const TwoRowCarousel = () => {

  const [selectedImage, setSelectedImage] = useState(null);

  const items = [
    { type: 'image', src: tarjeta },
    { type: 'video', src: videotigo },
    { type: 'image', src: tarjeta },
    { type: 'image', src: ricolino },
    { type: 'image', src: img2 },
    { type: 'image', src: img4 },
    { type: 'image', src: img5 },
    { type: 'image', src: img7 },
    { type: 'image', src: img9 },
    { type: 'image', src: img10 },
    { type: 'image', src: img11 },
    { type: 'image', src: img12 },
    { type: 'image', src: img13 },
    { type: 'image', src: img14 },
    { type: 'image', src: img15 },

  ]

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      rows: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      rows: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      rows: 2,
    },
  };

  const handleClickImage = (index) => {
    setSelectedImage(items[index]);
    console.log('Clicked', index);
    
  }

  const handleCloseImage = () => {
    setSelectedImage(null);
  }

  return (
    <div>
      <Carousel
        responsive={responsive}
        infinite={true}
        slidesToSlide={3}
      >
        <div className="modal"></div>
        <p>aaaaa</p>
        {/* {items.map((item, index) => (
          <div key={index} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 0 }} >
            {item?.type === 'image' && 
            <img src={item.src} alt="img1dolofin" 
            width="600px" height="400px" 
            onClick={() => handleClickImage(index)} />}
            {item?.type === 'video' && (
              <video src={item.src} autoPlay loop muted width="600px" height="400px" className="videocarrosel" onClick={() => handleClickImage(index)} />
            )}
          </div>
        ))} */}
        {items.map((item, index) => (
          <div key={index} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 0 }}>
            {item?.type === 'image' && (
              <img
                key={index}
                src={item.src}
                alt="img1dolofin"
                width="600px"
                height="400px"
                onClick={() => handleClickImage(index)}
              />
            )}
            {item?.type === 'video' && (
              <video
                src={item.src}
                autoPlay
                loop
                muted
                width="600px"
                height="400px"
                className="videocarrosel"
                onClick={() => handleClickImage(index)}
              />
            )}
          </div>
        ))}
        
      </Carousel>

      {selectedImage && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseImage}>&times;</span>
            {selectedImage.type === 'image' && (
              <img src={selectedImage.src} alt="Selected Image" />
            )}
            {selectedImage.type === 'video' && (
              <video controls width="600px" height="400px">
                <source src={selectedImage.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </div>
      )}
    </div>

  )
};

export default TwoRowCarousel;