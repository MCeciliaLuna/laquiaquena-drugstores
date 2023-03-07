import React from 'react';
import Carousel from '../../Components/Carousel/Carousel';
import Contacto from '../../Components/Contacto/Contacto';
import LinksRedes from '../../Components/LinksRedes/LinksRedes';
import ProductosDestacados from '../../Components/ProductosDestacados/ProductosDestacados';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer'
import ButtonPedidos from '../../Components/ButtonPedidos/ButtonPedidos';

const Home = () => {
  const localStorageRole = localStorage.getItem("role");
  if (localStorageRole === "ADMIN" || !localStorage.getItem("role") || !localStorage.getItem("access-token")) {
    alert("No tenés autorización para ingresar a esta página");
    window.location.href = "/";
  }
  return (
    <>
    <ButtonPedidos />
      <Navbar />
      <Carousel />
      <LinksRedes />
      <ProductosDestacados />
      <Contacto />
      <Footer />
    </>
  );
};

export default Home;