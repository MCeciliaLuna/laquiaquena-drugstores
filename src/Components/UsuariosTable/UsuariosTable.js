import { useState, useEffect } from 'react';
import axios from 'axios';
import './UsuariosTable.css'

const UsuariosTable = () => {
  const eliminarUsuario = async (_id, nombre) => {
    if (window.confirm(`📣 ¿Estás segur@ que querés 𝗘𝗟𝗜𝗠𝗜𝗡𝗔𝗥 a ${nombre}? 😮`)) {
      await axios.delete(
        `https://laquiaquenaherboristeriabe.onrender.com/eliminarusuario/${_id}`
      );
      alert('Usuari@ 𝗘𝗟𝗜𝗠𝗜𝗡𝗔𝗗@ 𝗘𝗫𝗜𝗧𝗢𝗦𝗔𝗠𝗘𝗡𝗧𝗘 ✅😉')
      window.location.reload();
    }
  };

  const [usuarios, setUsuarios] = useState([]);
  const traerUsuarios = async () => {
    try {
      const info = await axios.get("https://laquiaquenaherboristeriabe.onrender.com/traerusuarios");
      setUsuarios((info.data))
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
   traerUsuarios()
  }, []);

  const usuariosFiltrados = usuarios.filter((usuario) => usuario.role === "USER");
  const aux = usuariosFiltrados.sort((a, b) => {
    if (a.apellido > b.apellido) {
      return 1;
    }
    if (a.apellido < b.apellido) {
      return -1;
    }
    return 0;
  });

  const [usuariosOrganizados, setUsuariosOrganizados] = useState([]);
  useEffect(() => {
    setUsuariosOrganizados(aux);
  }, [aux]);
  
  return (
    <div className="col d-flex flex-wrap justify-content-around">
      {usuariosOrganizados.map((usuario) => (
      <div className="card col-3 text-center mx-1 mb-3 card-usuarios">
  <div className="card-body">
    <h4 className="card-title title-pedido">{usuario.apellido} {usuario.nombre}</h4>
    <h6 className="mb-2 text-muted">{usuario.email}</h6> <hr />
    <p className="card-link m-0 p-0">📍 {usuario.direccion}</p> <br />
    <a href={`https://api.whatsapp.com/send?phone=${usuario.telefono}`} target="new" className="card-link m-0 p-0">
    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-whatsapp whatsapp-pedido p-0 m-0" viewBox="0 0 16 16">
  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
</svg>
    </a>
  </div>
  <div className="d-flex align-items-center justify-content-around">
  <button
                    type="button"
                    className="btn boton-logueado-eliminar text-light mx-0 mb-3"
                    onClick={(_id, nombre) => eliminarUsuario(usuario._id, usuario.nombre)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
</svg>
                  </button>
</div>
</div>
))}
</div>
  );
};

export default UsuariosTable;