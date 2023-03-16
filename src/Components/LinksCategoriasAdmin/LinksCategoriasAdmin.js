import {useEffect} from 'react';
import './LinksCategoriasAdmin.css'

const LinksCategoriasAdmin = ({ setSelectedCategory }) => {

  useEffect(() => {
    setSelectedCategory('Todos');
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center mt-4 py-4 flex-wrap links-admin-categoria">
    <a href="#" className="text-light my-0 mx-2 link-admin-categoria" onClick={() => setSelectedCategory('Todos')}>Todos los productos</a>
    <a href="#" className="text-light my-0 mx-2 link-admin-categoria" id="primer-enlace" value="Prueba" onClick={() => setSelectedCategory('prueba')} >Prueba</a>
    <a href="#" className="text-light my-0 mx-2 link-admin-categoria" value="Cápsulas" onClick={() => setSelectedCategory('Cápsulas')}>Cápsulas</a>
    <a href="#" className="text-light my-0 mx-2 link-admin-categoria" value="En sobre" onClick={() => setSelectedCategory('En sobre')}>En sobre</a>
      </div>
  );
};

export default LinksCategoriasAdmin;