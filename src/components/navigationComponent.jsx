import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Portafolio from '../pages/Portafolio';
import Contact from '../pages/Contact';
import ItemDetails from '../components/ItemDetails';
import {AnimatePresence} from "framer-motion";

function navigationComponent() {

  /* let component 
  switch (window.location.pathname) {
      case "/":
        component = <Home/>
        break
        case"/About":
        component = <About/>
        break
        case"/Portafolio":
        component = <Portafolio/>
        break
        case"/Contact":
        component = <Contact/>
        break
  } */
  return (

    <Router>
      <AnimatePresence>
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/About" exact Component={About} />
        <Route path="/Portafolio" exact Component={Portafolio} />
        <Route path="/Contact" exact Component={Contact} />
        <Route path="/Portafolio/item/:id" exact Component={ItemDetails}/>
      </Routes>
      </AnimatePresence>
    </Router>
  );
}
export default navigationComponent;