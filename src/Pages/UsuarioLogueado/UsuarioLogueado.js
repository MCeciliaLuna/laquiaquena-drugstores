import "./UsuarioLogueado.css";
import axios from "axios";
import { useState, useEffect } from "react";
import CardProductoVenta from "../../Components/CardProductoVenta/CardProductoVenta";
import ButtonSalirSesion from "../../Components/ButtonSalirSesion/ButtonSalirSesion";
import ButtonAgregarProducto from "../../Components/ButtonAgregarProducto/ButtonAgregarProducto";
import SelectCategorias from "../../Components/SelectCategorias/SelectCategorias";

const UsuarioLogueado = () => {
  const token = localStorage.getItem("access-token");
  if (!token) {
    window.location.href = "/";
  }

  const [productos, setProductos] = useState([]);
  const getProductos = async () => {
    try {
      const info = await axios.get(
        "https://laquiaquenadrugstoresbe.onrender.com/traerproductos"
      );
      setProductos(info.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProductos();
  }, []);

  return (
    <div className="page-usuariologueado pt-5">
      <div className="w-100">
        <h2 className="title-logueado text-center pt-3 d-block text-light">
          ¡Bienvenidos/as!
        </h2>
        <ButtonSalirSesion />
      </div>
      <ButtonAgregarProducto />
      <SelectCategorias />
      <div className="d-flex">
        <div className="div-productos-page">
          <CardProductoVenta productos={productos} />
        </div>
      </div>
    </div>
  );
};

export default UsuarioLogueado;
