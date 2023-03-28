import {useEffect, useState} from 'react';
import './UserProductos.css';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
import CardProductoPublico from '../../Components/CardProductoPublico/CardProductoPublico';
import axios from 'axios';
import ButtonPedidos from '../../Components/ButtonPedidos/ButtonPedidos';
import LinksCategoriasAdmin from '../../Components/LinksCategoriasAdmin/LinksCategoriasAdmin';
import ButtonAdminVolver from '../../Components/ButtonAdminVolver/ButtonAdminVolver';
import BotonWhatsapp from '../../Components/BotonWhatsapp/BotonWhatsapp';


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
    <BotonWhatsapp />
    <ButtonPedidos />
      <Navbar />
      <div className="d-flex justify-content-evenly align-items-center">
    <ButtonAdminVolver />
    <h1 className="mb-0 text-light">Productos</h1>
    </div>
      <div className="d-flex justify-content-center mt-3">
    <input className="form-control buscador w-25" type="text" name="buscador" placeholder="¿Qué estás buscando?" value={searchTerm} onChange={handleSearchTermChange} />
    <button className="btn ms-2 text-light"><svg xmlns="http://www.w3.org/2000/svg" width="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg></button>
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