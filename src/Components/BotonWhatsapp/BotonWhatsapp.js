import React from 'react';
import './BotonWhatsapp.css';
import imgwhatsapp from '../assets/images/whatsapp-png.png'

const BotonWhatsapp = () => {
  return (
    <a href="https://wa.me/c/5493812183467" target="new">
      <img src={imgwhatsapp} className="btn-flotante" alt="" />
    </a>
  );
};

export default BotonWhatsapp;