import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import "./Administrador.css";

const Administrador = () => {
  const localStorageRole = localStorage.getItem("role");
  if (
    localStorageRole === "USER" ||
    !localStorage.getItem("role") ||
    !localStorage.getItem("access-token")
  ) {
    alert("No tenés autorización para ingresar a esta página");
    window.location.href = "/";
  }
  return (
    <>
      <Navbar />
      <div className="page-administrador d-flex flex-column justify-content-center align-items-center">
        <Link to="/administrador/pedidos">
          <h2 className="buttons-movile btn mb-4 p-5 text-light">PEDIDOS ✅</h2>
        </Link>
        <Link to="/administrador/productos">
          <h2 className="buttons-movile btn mb-4 p-5 text-light">
            PRODUCTOS 🌿
          </h2>
        </Link>
        <Link to="/administrador/usuarios">
          <h2 className="buttons-movile btn mb-4 p-5 text-light">
            USUARIOS 👥
          </h2>
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default Administrador;
