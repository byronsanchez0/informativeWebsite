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
            <div></div>
            <a href="/Portafolio" className="closeitem">
                x
            </a>
            <div className="firstdiv">
                {selectedItem && (
                    <img src={selectedItem.src} alt="imgsrc" />
                    ||
                    <video src={selectedItem.src}></video>
                )
                }

            </div>

            <div className="seconddiv">
                <h2>Itemaaaaaa: </h2>
                {
                    selectedItem && (
                        <div className="divitem">
                            <p>{selectedItem ? selectedItem.title : 'no item selected'} </p>
                            <p>{selectedItem ? selectedItem.description : 'no item selected'} </p>
                        </div>
                    )
                }
            </div>
            <div >

            </div>
        </div>
    );
}

export default ItemDetails;