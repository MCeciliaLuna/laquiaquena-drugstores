import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './Pages/Error/Error';
import Productos from './Pages/Productos/Productos';
import LoginPage from './Pages/LoginPage/LoginPage';
import Home from './Pages/Home/Home';
import UsuarioLogueado from './Pages/UsuarioLogueado/UsuarioLogueado';

function App() {
  return (
      <BrowserRouter>
       <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Error />} />
        <Route path='/productos' element={<Productos />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/usuariologueado' element={<UsuarioLogueado />} />
       </Routes>
      </BrowserRouter>
  );
}

export default App;
