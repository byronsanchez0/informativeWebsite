import { useState } from "react";
import { useParams } from "react-router-dom"

const ItemDetails = () => {

    const {index} = useParams();
    const [item, setItem] = useState(null);
    console.log(index);
    
    return(
        <div>
            <img src={index.src} alt="item-img" />
            <h2>Item Details: {index.title}</h2>
            <p>Item Descriptiom: {index.description}</p>

        </div>
    );
}

export default ItemDetails;