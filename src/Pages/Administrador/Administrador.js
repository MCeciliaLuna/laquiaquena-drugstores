import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import "./Administrador.css";

const Administrador = () => {
  if (
    !localStorage.getItem("role") ||
    !localStorage.getItem("access-token")
  ) {
    alert("No tenés autorización para ingresar a esta página");
    window.location.href = "/";
  }

  const alertPedidos = () => { alert(
    "🚨🚨🚨 Recordá chequear el envío de 𝗖𝗢𝗠𝗣𝗥𝗢𝗕𝗔𝗡𝗧𝗘𝗦 𝗗𝗘 𝗣𝗔𝗚𝗢 por 𝘸𝘩𝘢𝘵𝘴𝘢𝘱𝘱 📲 y el 𝗥𝗘𝗖𝗜𝗕𝗜𝗠𝗜𝗘𝗡𝗧𝗢 𝗗𝗘 𝗧𝗥𝗔𝗡𝗦𝗙𝗘𝗥𝗘𝗡𝗖𝗜𝗔𝗦 en tu 𝘤𝘶𝘦𝘯𝘵𝘢 𝘣𝘢𝘯𝘤𝘢𝘳𝘪𝘢 💳 de los 𝙥𝙚𝙙𝙞𝙙𝙤𝙨 que figuran 𝗣𝗔𝗚𝗔𝗗𝗢𝗦✅ 🚨🚨🚨"
  )}
  
  return (
    <>
      <Navbar />
      <div className=" page-administrador d-flex flex-column justify-content-center align-items-center">
          <h2 className="buttons-movile btn mb-4 p-5 text-light" onClick={alertPedidos} data-bs-toggle="modal" data-bs-target="#exampleModal">PEDIDOS ✅</h2>
        <Link to="/administrador/productos">
          <h2 className="buttons-movile btn mb-4 p-5 text-light">
            PRODUCTOS 🌿
          </h2>
        </Link>
      </div>

      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content bg-modal-pedidos">
      <div class="modal-header">
        <h1 class="modal-title fs-3 text-light" id="exampleModalLabel">Selecciona tu Drugstore</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body d-flex flex-column">
      <a href="/administrador/drugstore1">
          <h2 className="btn text-light fs-3">
            DRUGSTORE 1 🌿
          </h2>
        </a>
        <a href="/administrador/drugstore2">
          <h2 className="btn text-light fs-3">
            DRUGSTORE 2 🌿
          </h2>
        </a>
        <a href="/administrador/drugstore3">
          <h2 className="btn text-light fs-3">
            DRUGSTORE 3 🌿
          </h2>
        </a>
      </div>
    </div>
  </div>
</div>
    </>
  );
};

export default Administrador;
