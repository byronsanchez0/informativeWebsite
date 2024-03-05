import { useContext, useState } from "react";
import { useParams } from "react-router-dom"
import MyContext from './ItemContext';
import '../styles/itemdetails.css';

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



            <div className="firstdiv">
                <a href="/Portafolio" className="closeitem">
                    x
                </a>
                {selectedItem?.type === 'image' && (
                    <img src={selectedItem.src} alt="imgsrc"
                        width="1080px"
                        height="720px" />


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
            </div>

            {/* <div className="seconddiv">

                </div> */}


        </div>
    );
}

export default ItemDetails;