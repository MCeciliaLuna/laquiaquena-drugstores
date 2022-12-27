import React from 'react';
import './Productos.css';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
import CardProductoPublico from '../../Components/CardProductoPublico/CardProductoPublico';
import SelectProductos from '../../Components/SelectProductos/SelectProductos';
import ButtonPedidos from '../../Components/ButtonPedidos/ButtonPedidos';

const Productos = () => {
  localStorage.removeItem('access-token')

  return (
    <div className="mt-4 pt-4">
      <ButtonPedidos />
      <Navbar />
    <SelectProductos />
   <CardProductoPublico />
  <Footer />
  </div>
  );
};

export default Productos;