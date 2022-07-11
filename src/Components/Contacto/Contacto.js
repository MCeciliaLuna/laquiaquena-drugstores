import React from 'react';
import './Contacto.css';

const Contacto = () => {
  return (
    <div className="bg-danger py-4">
          <h4 className="text-light pb-3">Contacto</h4>
      <div className="area-contacto d-flex">
      <div className="px-4 col-6">
      <iframe title="mapas" src="https://www.google.com/maps/d/embed?mid=1Fh5MQu9cVwJvKqGwBzNVdepmaVPAqGA&ehbc=2E312F" width="500" height="350" className="mx-2 mapa"></iframe>
    </div>

<div className="div-email col-6">
    <form className="area-contacto-email">
      <label className="pb-1 text-light fs-5">Nombre</label><br />
      <input type="text" className="input-nombre w-50" /> <br />
      <label className="pb-1 text-light fs-5">Email de contacto</label><br />
      <input type="email" className="w-50 input-email" /> <br />
      <label className="pb-1 text-light fs-5">Mensaje</label> <br />
      <textarea name="mensaje" id="mensaje" cols="30" rows="5" class="cuadro-mensaje p-1 w-75" required></textarea> <br />
      <input type="button" className="btn btn-light w-25 mt-2" value="Enviar" />
    </form>
    </div>
    </div>
    </div>
  );
};

export default Contacto;