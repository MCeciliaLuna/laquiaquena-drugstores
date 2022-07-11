import React from 'react';
import './LinksRedes.css'

const LinksRedes = () => {
  return (
    <div>
      <h3 className="pt-3">La Quiaqueña Drugstores</h3>
      <ul class="list-group list-group-flush pb-5">
      <a target="new" href="https://www.whatsapp.com/?lang=es" className="fs-5 d-flex align-items-center justify-content-center list-group-item py-3"><ion-icon name="logo-whatsapp"></ion-icon>Whatsapp</a>
  <a target="new" href="https://www.facebook.com/" className="fs-5 d-flex align-items-center justify-content-center list-group-item py-3"><ion-icon name="logo-facebook"></ion-icon> Facebook</a>
  <a target="new" href="https://www.instagram.com/" className="fs-5 d-flex align-items-center justify-content-center border-bottom list-group-item py-3"><ion-icon name="logo-instagram"></ion-icon> Instagram</a>
</ul>
    </div>
  );
};

export default LinksRedes;