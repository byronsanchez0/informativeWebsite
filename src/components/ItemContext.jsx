 import React, { createContext, useState, useEffect } from "react";


const MyContext = createContext();

export const MyProvider = ({ children }) => {
    const [selectedItem, setSelectedItem] = useState(null);

    const handleSelectedItem = (item) => {
        setSelectedItem(item);
    };
    return(
        <MyContext.Provider value= {{selectedItem, handleSelectedItem}}>
            {children}
        </MyContext.Provider>
    );
};

export default MyContext; 