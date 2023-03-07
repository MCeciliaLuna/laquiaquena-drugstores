import {useState, useEffect} from 'react';
import axios from 'axios';
import ButtonAgregarProducto from '../../Components/ButtonAgregarProducto/ButtonAgregarProducto';
import CardProductoAdmin from '../../Components/CardProductoAdmin/CardProductoAdmin';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import LinksCategoriasAdmin from '../../Components/LinksCategoriasAdmin/LinksCategoriasAdmin';
import './AdminProductos.css'
import ButtonAdminVolverProductos from '../../Components/ButtonAdminVolverProductos/ButtonAdminVolverProductos';

const AdminProductos = () => {
  const localStorageRole = localStorage.getItem("role");
  if (localStorageRole === "USER" || !localStorage.getItem("role") || !localStorage.getItem("access-token")) {
    alert("No tenés autorización para ingresar a esta página");
    window.location.href = "/";
  }
  
  const [productos, setProductos] = useState([]);
  
  const getProductos = async () => {
    try {
      const info = await axios.get('https://laquiaquenaherboristeriabe.onrender.com/traerproductos');
      setProductos(info.data)
    } catch (error) {
      alert('No pudieron cargarse los productos; intentá nuevamente')
    }
  }
  useEffect(() => {
    getProductos()
  }, [])

  const aux = productos.sort((a,b) =>{
    
    if (a.nombre > b.nombre) {
    return 1;
  }
  if (a.nombre < b.nombre) {
    return -1;
  }
  return 0 })

  const [productosOrdenados, setProductosOrdenados] = useState([])
  useEffect(() => {
    setProductosOrdenados(aux)
  }, [aux])

  return (
    <>
    <Navbar />
    <div className="d-flex justify-content-evenly align-items-center">
    <ButtonAdminVolverProductos />
    <h1 className="text-light mb-0 pb-0">Productos</h1>
    </div>
    <div className="d-flex justify-content-center align-items-center">
     <ButtonAgregarProducto />
     </div>
          <LinksCategoriasAdmin categoria={productosOrdenados}/>
      <div className="d-flex justify-content-center">
        <div className="d-flex flex-wrap align-items-center justify-content-evenly">
        {productosOrdenados.map((producto, index) => (
          <CardProductoAdmin 
          producto={producto} index={index}
          />
        ))}
      </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminProductos;