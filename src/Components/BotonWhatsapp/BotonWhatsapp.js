import React from 'react';
import './BotonWhatsapp.css';
import imgwhatsapp from '../assets/images/whatsapp-png.png'

const BotonWhatsapp = () => {
  return (
    <div>
      <a href="https://wa.me/5493816613960" target="new">
      <img src={imgwhatsapp} className="btn-flotante" alt="" />
      </a>
    </div>
  );
};

export default BotonWhatsapp;