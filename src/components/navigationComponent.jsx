import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Portafolio from '../pages/Portafolio';
import Contact from '../pages/Contact';
import ItemDetails from '../components/ItemDetails';

function navigationComponent() {
  return (

    <Router>
      
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/About" exact Component={About} />
        <Route path="/Portafolio" exact Component={Portafolio} />
        <Route path="/Contact" exact Component={Contact} />
        <Route path="/Portafolio/item/:id" exact Component={ItemDetails}/>
      </Routes>

    </Router>
  );
}
export default navigationComponent;