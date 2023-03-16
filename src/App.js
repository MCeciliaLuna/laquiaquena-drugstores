import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './Pages/Error/Error';
import Login from './Pages/Login/Login';
import MiPedido from './Pages/MiPedido/MiPedido';
import UserProductos from './Pages/UserProductos/UserProductos';
import Home from './Pages/Home/Home';
import AdminDrugstore1 from './Pages/AdminDrugstore1/AdminDrugstore1';
import AdminDrugstore2 from './Pages/AdminDrugstore2/AdminDrugstore2';
import AdminDrugstore3 from './Pages/AdminDrugstore3/AdminDrugstore3';
import AdminProductos from './Pages/AdminProductos/AdminProductos'
import Administrador from './Pages/Administrador/Administrador';

function App() {
  const [pedido, setPedido] = useState([])
  return (
      <BrowserRouter>
       <Routes>

       <Route path="/" element={<Home />} />
        <Route path="/productos" element={<UserProductos setPedido={setPedido} pedido={pedido} />} />
        <Route path="/mipedido" element={<MiPedido setPedido={setPedido} pedido={pedido} />} />
 
       <Route path="/login" element={<Login />} />
       
        <Route path="/administrador" element={<Administrador />} />
         <Route path="/administrador/drugstore1" element={<AdminDrugstore1 />} />
         <Route path="/administrador/drugstore2" element={<AdminDrugstore2 />} />
         <Route path="/administrador/drugstore3" element={<AdminDrugstore3 />} />
         <Route path="/administrador/productos" element={<AdminProductos />} />

        <Route path='*' element={<Error />} />
       </Routes>
      </BrowserRouter>
  );
}

export default App;
