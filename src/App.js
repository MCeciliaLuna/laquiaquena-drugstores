import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './Pages/Error/Error';
import Productos from './Pages/Productos/Productos';
import LoginPage from './Pages/LoginPage/LoginPage';
import Home from './Pages/Home/Home';
import UsuarioLogueado from './Pages/UsuarioLogueado/UsuarioLogueado';
import LoginInicial from './Pages/LoginInicial/LoginInicial';
import PedidoPage from './Pages/PedidoPage/PedidoPage';

function App() {
  return (
      <BrowserRouter>
       <Routes>
        <Route path='/home' element={<Home />} />
        <Route path="/" element= {<LoginInicial />} />
        <Route path='*' element={<Error />} />
        <Route path='/productos' element={<Productos />} />
        <Route path='/mipedido' element={<PedidoPage/>} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/usuariologueado' element={<UsuarioLogueado />} />
       </Routes>
      </BrowserRouter>
  );
}

export default App;
