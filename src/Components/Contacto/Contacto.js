import React from 'react';

const Contacto = () => {
  return (
    <div className="d-flex">
      <div className="w-50">
      <iframe title="mapas" src="https://www.google.com/maps/d/embed?mid=1Fh5MQu9cVwJvKqGwBzNVdepmaVPAqGA&ehbc=2E312F" width="500" height="300"></iframe>
    </div>

    <form className="w-50 p-2">
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" />
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  );
};

export default Contacto;