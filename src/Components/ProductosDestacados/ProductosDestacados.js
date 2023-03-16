import {useEffect, useState} from 'react';
import './ProductosDestacados.css';
import {Link} from 'react-router-dom';
import axios from 'axios';

const ProductosDestacados = () => {
  const [productos, setProductos] = useState([]);
  const getProductos = async () => {
    try {
      const info = await axios.get("https://laquiaquenadrugstoresbe.onrender.com/traerproductos");
      setProductos(info.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProductos();
  }, []);

  const productosAleatorios = productos.sort(function() { return Math.random() - 0.5 })

  const productosFiltrados = productosAleatorios.filter(producto => productos.length = 5)

  return (
    <div className="productos-destacados">
      <div className="categorias d-flex justify-content-around align-items-center p-4">
      <h2 className="title-productos-destacados fs-1 mb-0">PRODUCTOS DESTACADOS</h2>
</div>

<div className="card-group d-flex justify-content-evenly">
{ 
   productosFiltrados.map(producto => (
  <div className="col-2 card-producto m-3 rounded-3" key={producto._id}>
    <img src={producto.image.secure_url} className="card-img-top" alt={producto.nombre} />
    <div className="card-body">
      <h4 className="card-title title-producto fw-bold d-flex justify-content-center align-items-center">{producto.nombre}</h4>
      <p className="card-text py-2 m-0 ">{producto.categoria}</p>
      <h5 className="card-text">${producto.precio}</h5>
    </div>
  </div>
   ))}
   <div className="pb-1 px-5 d-flex aling-items-center">
<Link to="/productos" className="d-block">
<button className="btn btn-verproductos m-4 p-3"><strong>Ver todos los productos</strong></button>
</Link>
</div>

</div>
    </div>
  );
};

export default ProductosDestacados;