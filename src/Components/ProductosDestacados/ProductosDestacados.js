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

  const productosFiltrados = productosAleatorios.filter(producto => productos.length = 4)

  return (
    <div className="productos-destacados">
      <div className="categorias d-flex justify-content-around align-items-center p-4">
      <h1 className="text-light mb-0">NUESTROS PRODUCTOS</h1>
</div>

<div className="card-group d-flex justify-content-evenly">
{ 
   productosFiltrados.map(producto => (
  <div className="card-producto bg-light m-1 border rounded-3">
    <img src={producto.image.secure_url} className="card-img-top fs-4 p-1" alt={producto.nombre} />
    <div className="card-body">
      <h3 className="card-title title-producto d-flex justify-content-center align-items-center">{producto.nombre}</h3>
      <h6 className="card-text text-muted"><i>{producto.categoria}</i></h6>
      <p className="card-text fs-4">${producto.precio}</p>
    </div>
  </div>
   ))}

</div>
<a href="/productos" className="d-block">
<button className="btn btn-verproductos m-4 p-3"><strong>VER TODOS LOS PRODUCTOS</strong></button>
</a>
</div>
  );
};

export default ProductosDestacados;