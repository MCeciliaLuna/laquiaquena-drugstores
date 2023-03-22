import Navbar from "../../Components/Navbar/Navbar";
import CardsAdminPedidos from "../../Components/CardsAdminPedidos/CardsAdminPedidos";
import ButtonAdminVolver from "../../Components/ButtonAdminVolver/ButtonAdminVolver";
import { useState, useEffect } from "react";
import axios from "axios";

const AdminDrugstore3 = () => {
  if (
    !sessionStorage.getItem("role") ||
    !sessionStorage.getItem("access-token")
  ) {
    alert("No tenés autorización para ingresar a esta página");
    window.location.href = "/";
  }

  const [pedidos, setPedidos] = useState([]);
  const traerUsuarios = async () => {
    try {
      const info = await axios.get(
        "https://laquiaquenadrugstoresbe.onrender.com/traerpedidos"
      );
      setPedidos(info.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
  traerUsuarios()
  }, []);

  const pedidosFiltrados = pedidos.filter(drugstore => drugstore.drugstore === 'Belgrano 1991')



  return (
    <>
      <Navbar />
      <div className="d-flex justify-content-evenly align-items-center pedidos-height">
        <ButtonAdminVolver />
        <h1 className="text-light mb-0 pb-0">Pedidos</h1>
      </div>
      <CardsAdminPedidos pedidosFiltrados={pedidosFiltrados} />
    </>
  );
};

export default AdminDrugstore3;