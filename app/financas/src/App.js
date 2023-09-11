import { Helmet } from 'react-helmet';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import Login from './pages/login';
import Lancamentos from './pages/lancamentos';
import Extrato from './pages/extrato';
import Detalhes from './pages/detalhes';
import Categorias from './pages/categorias';
import QRCode from './pages/qrcode';

function App() {
  return (
    <BrowserRouter>
      <Helmet>
        <script src="js/dashboard.js" type="text/javascript"></script>
      </Helmet>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/lancamentos" element={<Lancamentos />} />
        <Route path="/extrato" element={<Extrato />} />
        <Route path="/detalhes" element={<Detalhes />} />
        <Route path="/categorias" element={<Categorias />} />
        <Route path="/qrcode" element={<QRCode />} />
        <Route path="*" element={<Login />} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;
