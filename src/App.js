import logo from './logo.svg';
import './styles/App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import NavigationComponent from './components/navigationComponent';
import insta from './img/instalogo.png';
import { MyProvider } from './components/ItemContext';


function App() {
  return (
    <body className="App">
      <div className="bckgrnd-style">
        <header className="App-header">
          <Navbar />
        </header>
        <MyProvider>
        <NavigationComponent />
        </MyProvider>
        
      </div>
      <Footer />
    </body>

  );
}


export default App;
