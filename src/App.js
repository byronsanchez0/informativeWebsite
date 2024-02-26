import logo from './logo.svg';
//import './App.css';
import Navbar from './components/navbar';
import insta from './img/instalogo.png';
import About from './pages/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Portafolio from './pages/Portafolio';
import Contact from './pages/Contact';

function App() {
  return (
  <body className="App">

  
    <div >
      <header className="App-header">
        <Navbar/>
        <h1>El totem ya ha venido</h1>
        
      </header>
      
    </div>
    <Router>
    <Routes>
      <Route path= "/Home" exact Component={Home}/>
      <Route path= "/About" exact Component={About}/>
      <Route path= "/Portafolio" exact Component={Portafolio}/>
      <Route path= "/Contact" exact Component={Contact}/>
    </Routes>
      
    </Router>
    <section class="hero">
        <h1 className='heroText'>Bienvenido a Grupo Asesores</h1>
        <p className='heroText'>Somos expertos en servicios financieros y asesoramiento.</p>
        {/* <a href="#" class="btn">Contactar</a> */}
    </section>
    <footer>
      <p>&copy; 2024 Grupo Asesores. Todos los derechos reservados.</p>
    </footer>
    </body>
    
  );
}


export default App;
