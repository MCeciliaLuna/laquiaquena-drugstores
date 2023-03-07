import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import UsuariosTable from '../../Components/UsuariosTable/UsuariosTable';
import ButtonAdminVolver from '../../Components/ButtonAdminVolver/ButtonAdminVolver';

const Usuarios = () => {
  const localStorageRole = localStorage.getItem("role");
  if (localStorageRole === "USER" || !localStorage.getItem("role") || !localStorage.getItem("access-token")) {
    alert("No tenés autorización para ingresar a esta página");
    window.location.href = "/";
  }
  // alert('🚨🚨🚨 Usá toda esta información RESPONSABLEMENTE, dado que está para cualquier inconveniente que resulte con los usuarios registrados en la página 🚨🚨🚨')
  
  return (
    <>
    <Navbar />
    <div className="d-flex justify-content-evenly align-items-center">
    <ButtonAdminVolver />
    <h2 className="text-light mb-0 pb-0">Usuarios Registrados</h2>
    </div>
    <UsuariosTable />
</>
  );
};

export default Usuarios;