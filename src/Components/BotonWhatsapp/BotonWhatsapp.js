import React from 'react';
import './BotonWhatsapp.css';
import imgwhatsapp from '../assets/images/whatsapp-png.png'

const BotonWhatsapp = () => {
  return (
    <div>
      <img src={imgwhatsapp} className="btn-flotante" alt="" />
    </div>
  );
};

export default BotonWhatsapp;