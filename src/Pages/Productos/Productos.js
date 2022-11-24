import React from 'react';
import './Productos.css';
import Footer from '../../Components/Footer/Footer';
import BotonWhatsapp from '../../Components/BotonWhatsapp/BotonWhatsapp';
import Navbar from '../../Components/Navbar/Navbar';
import CardProductoPublico from '../../Components/CardProductoPublico/CardProductoPublico';
import SelectProductos from '../../Components/SelectProductos/SelectProductos';

const Productos = () => {
  localStorage.removeItem('access-token')

  return (
    <div className="mt-4 pt-4">
    <BotonWhatsapp />
      <Navbar />
    <SelectProductos />
                  <CardProductoPublico />
  {/* </div> */}
  <Footer />
  </div>
  );
};

export default Productos;