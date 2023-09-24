import { Helmet } from 'react-helmet';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home/home';
import Login from './pages/login';
import Lancamentos from './pages/lancamentos/lancamentos';
import Extrato from './pages/extrato/extrato';
import Detalhes from './pages/lancamentos/detalhes';
import Categorias from './pages/categorias/categorias';
import QRCode from './pages/qrcode';
import Contas from './pages/contas/contas';
import ContaDetalhes from './pages/contas/contadetalhes';
import Cartoes from './pages/cartoes/cartoes';
import CartaoDetalhes from './pages/cartoes/cartaodetalhes';

function App() {
  return (
    <BrowserRouter>
      <Helmet>
        <script src="js/dashboard.js" type="text/javascript"></script>
        <script src="https://fastly.jsdelivr.net/npm/echarts@5.4.3/dist/echarts.min.js"></script>
      </Helmet>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/lancamentos" element={<Lancamentos />} />
        <Route path="/extrato" element={<Extrato />} />
        <Route path="/detalhes" element={<Detalhes />} />
        <Route path="/categorias" element={<Categorias />} />
        <Route path="/qrcode" element={<QRCode />} />
        <Route path="/contas" element={<Contas />} />
        <Route path="/contadetalhes" element={<ContaDetalhes />} />
        <Route path="/cartoes" element={<Cartoes />} />
        <Route path="/cartaodetalhes" element={<CartaoDetalhes />} />
        <Route path="*" element={<Login />} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;
