import React from 'react';
import Carousel from '../../Components/Carousel/Carousel';
import Contacto from '../../Components/Contacto/Contacto';
import LinksRedes from '../../Components/LinksRedes/LinksRedes';
import ProductosDestacados from '../../Components/ProductosDestacados/ProductosDestacados';

const Home = () => {
  return (
    <div>
      <Carousel />
      <LinksRedes />
      <ProductosDestacados />
      <Contacto />
    </div>
  );
};

export default Home;