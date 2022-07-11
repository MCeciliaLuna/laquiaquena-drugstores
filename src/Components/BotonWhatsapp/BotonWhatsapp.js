import React from 'react';
import './BotonWhatsapp.css';
import imgwhatsapp from '../assets/images/whatsapp-png.png'

const BotonWhatsapp = () => {
  return (
    <a target="new" href="https://www.whatsapp.com/?lang=es">
      <img src={imgwhatsapp} className="btn-flotante" alt="" />
    </a>
  );
};

export default BotonWhatsapp;