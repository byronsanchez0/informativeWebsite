import { useContext, useState } from "react";
import { useParams } from "react-router-dom"
import MyContext from './ItemContext';
import '../styles/itemdetails.css';
import { motion } from "framer-motion";

const ItemDetails = ({ onClose }) => {

    const { selectedItem } = useContext(MyContext);

    console.log(selectedItem.description)


    function onClose() {

        console.log('no hace click');
    }

    /* const params = useParams();
    const [item, setItem] = useState(null);
    console.log(index);
 */
    return (

        <div className="itemstyle">



            <motion.div className="firstdiv" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ x: window.innerHeight }}
                        transition={{ ease: "easeIn", duration: 1.7 }}>
                <a href="/Portafolio" className="closeitem">
                    x
                </a>
                {selectedItem?.type === 'image' && (
                    <img src={selectedItem.src} alt="imgsrc"
                        width="1080px"
                        height="720px" 
                        className="contentdiv"/>
                )
                }
                {
                    selectedItem?.type === 'video' && (
                        <video src={selectedItem.src} alt="imgsrc"
                            autoPlay
                            controls
                            loop
                            muted
                            width="1080px"
                            height="720px"
                            className="videodiv" />
                    )
                }

                {
                    selectedItem && (
                        <div className="divitem">
                            <h2>{selectedItem ? selectedItem.title : 'no item selected'} </h2>
                            <p>{selectedItem ? selectedItem.description : 'no item selected'} </p>
                        </div>
                    )
                }
            </motion.div>

            {/* <div className="seconddiv">

                </div> */}


        </div>
    );
}

export default ItemDetails;