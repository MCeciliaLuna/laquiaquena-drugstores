import React from 'react';
import ButtonAdminVolver from '../../Components/ButtonAdminVolver/ButtonAdminVolver';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
import FormPedido from '../../Components/FormPedido/FormPedido';
import './MiPedido.css'
import BotonWhatsapp from '../../Components/BotonWhatsapp/BotonWhatsapp';

const MiPedido = () => {
  if (!localStorage.getItem("pedido")) {
    alert("𝗡𝗢 seleccionaste 𝗻𝗶𝗻𝗴𝘂́𝗻 𝗽𝗿𝗼𝗱𝘂𝗰𝘁𝗼 todavía! 🤨");
    window.location.href = "/productos";
  }
  return (
    <>
    <Navbar />
    <BotonWhatsapp />
    <div className="d-flex justify-content-evenly align-items-center">
    <ButtonAdminVolver />
    <h1 className="mb-0 text-light">Mi Pedido</h1>
    </div>
      <FormPedido />
      <Footer />
    </>
  );
};

export default MiPedido;