import './App.css';
import Carousel from './Components/Carousel/Carousel';
import Contacto from './Components/Contacto/Contacto';
import Footer from './Components/Footer/Footer';
import LinksRedes from './Components/LinksRedes/LinksRedes';
import Navbar from './Components/Navbar/Navbar';
import ProductosDestacados from './Components/ProductosDestacados/ProductosDestacados';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <LinksRedes />
      <ProductosDestacados />
      <Contacto />
      <Footer />
    </div>
  );
}

export default App;
