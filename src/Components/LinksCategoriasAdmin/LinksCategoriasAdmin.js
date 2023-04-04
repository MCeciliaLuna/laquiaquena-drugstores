import { useEffect } from "react";
import "./LinksCategoriasAdmin.css";

const LinksCategoriasAdmin = ({ setSelectedCategory }) => {
  useEffect(() => {
    setSelectedCategory("Todos");
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center mt-4 py-4 flex-wrap links-admin-categoria">
      <a
        href="#"
        className="text-light my-0 mx-2 link-admin-categoria"
        id="primer-enlace"
        value="Almacen"
        onClick={() => setSelectedCategory("Almacén")}
      >
        Almacén
      </a>
      <a
        href="#"
        className="text-light my-0 mx-2 link-admin-categoria"
        value="Artículos de limpieza"
        onClick={() => setSelectedCategory("Artículos de limpieza")}
      >
        Artículos de limpieza
      </a>
      <a
        href="#"
        className="text-light my-0 mx-2 link-admin-categoria"
        value="Bebidas"
        onClick={() => setSelectedCategory("Bebidas")}
      >
        Bebidas
      </a>
      <a
        href="#"
        className="text-light my-0 mx-2 link-admin-categoria"
        value="Higiene personal"
        onClick={() => setSelectedCategory("Higiene personal")}
      >
        Higiene personal
      </a>
      <a
        href="#"
        className="text-light my-0 mx-2 link-admin-categoria"
        value="Repelentes"
        onClick={() => setSelectedCategory("Repelentes")}
      >
        Repelentes
      </a>
      <a
        href="#"
        className="text-light my-0 mx-2 link-admin-categoria"
        value="Otros"
        onClick={() => setSelectedCategory("Otros")}
      >
        Otros
      </a>
      <a
        href="#"
        className="text-light my-0 mx-2 link-admin-categoria"
        value="Hoja de Coca"
        onClick={() => setSelectedCategory("Hoja de Coca")}
      >
        <h3>Hoja de Coca</h3>
      </a>
      <a
        href="#"
        className="text-light my-0 mx-2 link-admin-categoria"
        value="Bico saborizados"
        onClick={() => setSelectedCategory("Bico saborizados")}
      >
        <h3>Bico saborizados</h3>
      </a>
    </div>
  );
};

export default LinksCategoriasAdmin;
