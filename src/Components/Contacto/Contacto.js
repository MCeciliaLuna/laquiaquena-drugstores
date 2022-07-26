import React from 'react';
import './Contacto.css';

const Contacto = () => {
  return (
    <div className="py-4">
          <h2 className="title-contacto text-light pb-3">Contacto</h2>
      <div className="area-contacto d-flex">
      <div className="px-4 col-6 ">
      <iframe title="mapas" src="https://www.google.com/maps/d/embed?mid=1Fh5MQu9cVwJvKqGwBzNVdepmaVPAqGA&ehbc=2E312F" width="500" height="400" className="mx-2 mapa rounded-3"></iframe>
    </div>

<div className="div-email col-6">
    <form className="area-contacto-email">
      <label className="pb-1 text-light fs-4">Nombre/Asunto</label><br />
      <input type="text" className="input-nombre fs-5 p-2 rounded-3 border-0 w-50" /> <br />
      <label className="pb-1 text-light fs-4 pt-2">Email de contacto</label><br />
      <input type="email" className="w-50 fs-5 input-email p-2 rounded-3 border-0" placeholder="nombre@email.com" /> <br />
      <label className="pb-1 text-light fs-4 pt-2">Mensaje</label> <br />
      <textarea name="mensaje" id="mensaje" cols="30" rows="5" class="cuadro-mensaje rounded-3 border-0 p-2 w-75" required></textarea> <br />
      <input type="button" className="btn-enviar-contacto btn w-25 mt-2" value="Enviar" />
    </form>
    </div>
    </div>
    </div>
  );
};

export default Contacto;