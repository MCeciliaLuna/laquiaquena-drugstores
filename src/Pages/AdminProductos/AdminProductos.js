import {useState, useEffect} from 'react';
import axios from 'axios';
import ButtonAgregarProducto from '../../Components/ButtonAgregarProducto/ButtonAgregarProducto';
import CardProductoAdmin from '../../Components/CardProductoAdmin/CardProductoAdmin';
import Navbar from '../../Components/Navbar/Navbar';
import LinksCategoriasAdmin from '../../Components/LinksCategoriasAdmin/LinksCategoriasAdmin';
import './AdminProductos.css'
import ButtonAdminVolverProductos from '../../Components/ButtonAdminVolverProductos/ButtonAdminVolverProductos';

const AdminProductos = () => {
  const [productos, setProductos] = useState([]);
  const [productosOrdenados, setProductosOrdenados] = useState([])
  const [productosFiltrados, setProductosFiltrados] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');

  
  if (!localStorage.getItem("role") || !localStorage.getItem("access-token")) {
    alert("No tenés autorización para ingresar a esta página");
    window.location.href = "/";
  }

  
  const getProductos = async () => {
    try {
      const info = await axios.get('https://laquiaquenadrugstoresbe.onrender.com/traerproductos');
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
    <Navbar />
    <div className="d-flex justify-content-evenly align-items-center">
    <ButtonAdminVolverProductos />
    <h1 className="text-light mb-0 pb-0">Productos</h1>
    </div>
    <div className="d-flex justify-content-center align-items-center">
     <ButtonAgregarProducto />
     </div>
    <div className="d-flex justify-content-center mt-3">
    <input className="form-control w-25" type="text" name="buscador" placeholder="buscá tu producto" value={searchTerm} onChange={handleSearchTermChange} />
    <button className="btn ms-2 text-light">Buscar</button>
  </div>
          <LinksCategoriasAdmin setSelectedCategory={setSelectedCategory}/>
      <div className="d-flex justify-content-center">
        <div className="d-flex flex-wrap align-items-center justify-content-evenly">
        {productosFiltrados.map((producto, index) => (
          <CardProductoAdmin 
          producto={producto} index={index}
          />
        ))}
      </div>
      </div>
    </>
  );
};

export default AdminProductos;