import React from 'react';

const ProductosDestacados = () => {
  return (
    <div>
      <div className="d-flex justify-content-start dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a className="dropdown-item" href="/#">Action</a></li>
    <li><a className="dropdown-item" href="/#">Another action</a></li>
    <li><a className="dropdown-item" href="/#">Something else here</a></li>
  </ul>
</div>

<div className="card-group">
  <div className="card">
    <img src="https://picsum.photos/300?random=2" className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
    </div>
  </div>
  <div className="card">
    <img src="https://picsum.photos/300?random=1" className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    </div>
  </div>
  <div className="card">
    <img src="https://picsum.photos/300?random=3" className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
  </div>
</div>
  <div className="card">
    <img src="https://picsum.photos/300?random=4" className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
    </div>
  </div>
  <div className="card">
    <img src="https://picsum.photos/300?random=5" className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    </div>
  </div>
  <div className="card">
    <img src="https://picsum.photos/300?random=6" className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
    </div>
  </div>
</div>
    </div>
  );
};

export default ProductosDestacados;