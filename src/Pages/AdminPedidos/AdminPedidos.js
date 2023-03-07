import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import CardsAdminPedidos from "../../Components/CardsAdminPedidos/CardsAdminPedidos";
import ButtonAdminVolver from "../../Components/ButtonAdminVolver/ButtonAdminVolver";
import "./AdminPedidos.css";

const AdminPedidos = () => {
  const localStorageRole = localStorage.getItem("role");
  if (
    localStorageRole === "USER" ||
    !localStorage.getItem("role") ||
    !localStorage.getItem("access-token")
  ) {
    alert("No tenés autorización para ingresar a esta página");
    window.location.href = "/";
  }

  alert(
    "🚨🚨🚨 Recordá chequear el envío de 𝗖𝗢𝗠𝗣𝗥𝗢𝗕𝗔𝗡𝗧𝗘𝗦 𝗗𝗘 𝗣𝗔𝗚𝗢 por 𝘸𝘩𝘢𝘵𝘴𝘢𝘱𝘱 📲 y el 𝗥𝗘𝗖𝗜𝗕𝗜𝗠𝗜𝗘𝗡𝗧𝗢 𝗗𝗘 𝗧𝗥𝗔𝗡𝗦𝗙𝗘𝗥𝗘𝗡𝗖𝗜𝗔𝗦 en tu 𝘤𝘶𝘦𝘯𝘵𝘢 𝘣𝘢𝘯𝘤𝘢𝘳𝘪𝘢 💳 de los 𝙥𝙚𝙙𝙞𝙙𝙤𝙨 que figuran 𝗣𝗔𝗚𝗔𝗗𝗢𝗦✅ 🚨🚨🚨"
  );

  return (
    <>
      <Navbar />
      <div className="d-flex justify-content-evenly align-items-center pedidos-height">
        <ButtonAdminVolver />
        <h1 className="text-light mb-0 pb-0">Pedidos</h1>
      </div>
      <CardsAdminPedidos />
    </>
  );
};

export default AdminPedidos;
