import React from 'react';
import './Contacto.css';

const Contacto = () => {
  return (
    <div className="pt-4">
          <h4 className="pb-2">Contacto</h4>
      <div className="area-contacto d-flex justify-content-evenly">
      <div className="mx-2">
      <iframe title="mapas" src="https://www.google.com/maps/d/embed?mid=1Fh5MQu9cVwJvKqGwBzNVdepmaVPAqGA&ehbc=2E312F" width="550" height="350" className="mapa"></iframe>
    </div>

    <form className="area-contacto-email w-50 p-2">
      <label className="pb-1">Nombre</label><br />
      <input type="text" className="input-nombre w-50" /> <br />
      <label className="pb-1">Email de contacto</label><br />
      <input type="email" className="w-50 input-email" /> <br />
      <label className="pb-1">Mensaje</label> <br />
      <textarea name="mensaje" id="mensaje" cols="30" rows="5" class="cuadro-mensaje p-1 w-75" required></textarea> <br />
      <input type="button" className="btn btn-dark w-25" value="Enviar" />
    </form>
    </div>
    </div>
  );
};

export default Contacto;