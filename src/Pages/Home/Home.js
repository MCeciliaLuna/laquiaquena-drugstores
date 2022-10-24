import React from 'react';
import Carousel from '../../Components/Carousel/Carousel';
import Contacto from '../../Components/Contacto/Contacto';
import LinksRedes from '../../Components/LinksRedes/LinksRedes';
import ProductosDestacados from '../../Components/ProductosDestacados/ProductosDestacados';
import Navbar from '../../Components/Navbar/Navbar';
import BotonWhatsapp from '../../Components/BotonWhatsapp/BotonWhatsapp';
import Footer from '../../Components/Footer/Footer'

const Home = () => {
  localStorage.removeItem('access-token');
  return (
    <div>
      <BotonWhatsapp />
      <Navbar />
      <Carousel />
      <LinksRedes />
      <ProductosDestacados />
      <Contacto />
      <Footer />
    </div>
  );
};

export default Home;