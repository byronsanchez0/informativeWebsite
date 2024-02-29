import logo from './logo.svg';
import './styles/App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import NavigationComponent from './components/navigationComponent';
import insta from './img/instalogo.png';


function App() {
  return (
    <body className="App">
      <div className="bckgrnd-style">
        <header className="App-header">
          <Navbar />
        </header>
        <NavigationComponent />
      </div>
      <Footer />
    </body>

  );
}


export default App;
