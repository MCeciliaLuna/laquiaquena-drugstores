import {useEffect, useState} from 'react';
import './UserProductos.css';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
import CardProductoPublico from '../../Components/CardProductoPublico/CardProductoPublico';
import axios from 'axios';
import ButtonPedidos from '../../Components/ButtonPedidos/ButtonPedidos';
import LinksCategoriasAdmin from '../../Components/LinksCategoriasAdmin/LinksCategoriasAdmin';

const Productos = ({ setPedido, pedido }) => {
  const [productos, setProductos] = useState([]);
  const [productosOrdenados, setProductosOrdenados] = useState([])
  const [productosFiltrados, setProductosFiltrados] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  useEffect(() => {
    const getProductos = async () => {
      try {
        const info = await axios.get("https://laquiaquenadrugstoresbe.onrender.com/traerproductos");
        setProductos((info.data))
        setProductosFiltrados((info.data))
      } catch (error) {
        console.error(error);
      }
    };
    
    getProductos();
  }, []);
  
  const aux = productos.sort((a,b) =>{
    if (a.nombre > b.nombre) {
      return 1;
    }
    if (a.nombre < b.nombre) {
      return -1;
    }
    return 0 })


  useEffect(() => {
    setProductosOrdenados(aux)
  }, [aux])

  useEffect(() => {
    if(selectedCategory !== 'Todos'){
      const productosFiltrados = productosOrdenados.filter(producto => producto.categoria === selectedCategory);
      setProductosFiltrados(productosFiltrados)
    } else {
      setProductosFiltrados(productosOrdenados);
    }
  }, [productosOrdenados, selectedCategory])

  return (
    <>
    <ButtonPedidos />
    <div className="mt-4 pt-4">
      <Navbar />
    <LinksCategoriasAdmin setSelectedCategory={setSelectedCategory} />
    <div className="d-flex justify-content-center">
        <div className="d-flex flex-wrap align-items-center justify-content-evenly">
    {productosFiltrados.map((producto, index) => (
          <CardProductoPublico
          index={index}
          producto={producto}
          setPedido={setPedido}
          pedido={pedido}
          setProductos={setProductos}
          />
        ))}
        </div>
      </div>
  <Footer />
  </div>
  </>
  );
};

export default Productos;