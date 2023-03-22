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
  const [searchTerm, setSearchTerm] = useState('');
  
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
    let productosFiltrados = productosOrdenados;
    
    if(selectedCategory !== 'Todos'){
      productosFiltrados = productosFiltrados.filter(producto => producto.categoria === selectedCategory);
    }
    
    if (searchTerm.trim() !== '') {
      productosFiltrados = productosOrdenados.filter(producto => producto.nombre.toLowerCase().includes(searchTerm.toLowerCase()));
    }
    
    setProductosFiltrados(productosFiltrados);
  }, [productosOrdenados, selectedCategory, searchTerm])

  const handleSearchTermChange = event => {
    setSearchTerm(event.target.value);
  };
  
  return (
    <>
    <ButtonPedidos />
      <Navbar />
      <div className="d-flex justify-content-center mt-3">
    <input className="form-control w-25" type="text" name="buscador" placeholder="buscá tu producto" value={searchTerm} onChange={handleSearchTermChange} />
    <button className="btn ms-2 text-light">Buscar</button>
  </div>
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
  </>
  );
};

export default Productos;