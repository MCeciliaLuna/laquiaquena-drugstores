import React from 'react';
import './LinksRedes.css'

const LinksRedes = () => {
  return (
      <ul class="list-group list-group-flush">
      <a target="new" href="https://www.whatsapp.com/?lang=es" className="link-redes link-whatsapp fs-4 d-flex align-items-center justify-content-center py-3"><ion-icon name="logo-whatsapp"></ion-icon>Whatsapp</a>
  <a target="new" href="https://www.facebook.com/" className="link-redes link-facebook fs-4 d-flex align-items-center justify-content-center py-3"><ion-icon name="logo-facebook"></ion-icon> Facebook</a>
  <a target="new" href="https://www.instagram.com/" className="link-redes link-instagram fs-4 d-flex align-items-center justify-content-center border-bottom py-3"><ion-icon name="logo-instagram"></ion-icon> Instagram</a>
</ul>
  );
};

export default LinksRedes;