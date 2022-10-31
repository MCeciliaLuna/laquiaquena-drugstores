import React from 'react';
import './Productos.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '../../Components/Footer/Footer';
import BotonWhatsapp from '../../Components/BotonWhatsapp/BotonWhatsapp';
import Navbar from '../../Components/Navbar/Navbar';

const Productos = () => {
  localStorage.removeItem('access-token');
  const [productos, setProductos] = useState([]);
  const getProductos = async () => {
    try {
      const info = await axios.get("https://laquiaquenadrugstoresbe.onrender.com/traerproductos");
      setProductos(info.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProductos();
  }, []);


  return (
    <>
    <BotonWhatsapp />
      <Navbar />
    <div className="productos-page d-flex mt-5">

<div className="div-productos-page d-flex flex-wrap justify-content-center mt-5">
{ 
   productos.map(producto => (
  <div className="card-producto d-flex justify-content-center p-0 m-3 col-2 border-0 rounded-3" key={producto._id}>
    <div className="card">
      <img src={producto.image.secure_url} className="card-img-top" alt="..." />
      <div className="card-body p-2">
        <h4 className="card-title m-0 d-flex justify-content-center align-items-center fw-bold">{producto.nombre}</h4>
        <p className="card-text py-2 m-0">{producto.categoria}</p>
        <h5 className="card-text py-2 m-0 fw-bold">${producto.precio}</h5>
        <a href={`https://api.whatsapp.com/send?phone=5493812183467&text=%C2%A1Hola%20*La%20Quiaque%C3%B1a%20Herborister%C3%ADa*%20%F0%9F%91%8B%F0%9F%8C%BF%20!%20Visit%C3%A9%20su%20p%C3%A1gina%20web%20y%20quisiera%20informaci%C3%B3n%20del%20producto%20*${producto.nombre}*.%20Muchas%20gracias!%20%E2%98%BA`} target="new" >
        <button type="button" className="boton-productos-destacados btn text-light" data-bs-toggle="modal" data-bs-target="#exampleModal">Comprar</button></a>
      </div>
    </div>
  </div>
   ))}
  
        </div>
  </div>
  <Footer />
  </>
  );
};

export default Productos;