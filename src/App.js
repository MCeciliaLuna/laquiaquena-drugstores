import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import BotonWhatsapp from './Components/BotonWhatsapp/BotonWhatsapp';
import Footer from './Components/Footer/Footer';
import Error from './Pages/Error/Error';
import Productos from './Pages/Productos/Productos';
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import UsuarioLogueado from './Pages/UsuarioLogueado/UsuarioLogueado';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <BotonWhatsapp />
      <Navbar />
       <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Error />} />
        <Route path='/productos' element={<Productos />} />
        <Route path='/login' element={<Login />} />
        <Route path='/usuariologueado' element={<UsuarioLogueado />} />
       </Routes>
       <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
