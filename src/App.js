import logo from './logo.svg';
import './styles/App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import NavigationComponent from './components/navigationComponent';
import insta from './img/instalogo.png';
import { MyProvider } from './components/ItemContext';
import React, { useState, useEffect } from 'react';


function App() {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <body className="App">
      <header className="App-header">
        <Navbar />
        FALTA APLICAR ANIMACION TRANSICION, RESPONSIVE INICIO 
      </header>
      <div className={`section ${isVisible ? 'visible' : 'hidden'}`}>
        <MyProvider>
          
          <NavigationComponent />
        </MyProvider>
        <Footer />
      </div>
      
    </body>

  );
}


export default App;
