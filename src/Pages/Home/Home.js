import React from 'react';
import Carousel from '../../Components/Carousel/Carousel';
import LinksRedes from '../../Components/LinksRedes/LinksRedes';
import ProductosDestacados from '../../Components/ProductosDestacados/ProductosDestacados';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer'
import ButtonPedidos from '../../Components/ButtonPedidos/ButtonPedidos';

const Home = () => {

  return (
    <>
    <ButtonPedidos />
      <Navbar />
      <Carousel />
      <LinksRedes />
      <ProductosDestacados />
      <Footer />
    </>
  );
};

export default Home;