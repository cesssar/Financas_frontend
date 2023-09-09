import { Helmet } from 'react-helmet';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import Login from './pages/login';

function App() {
  return (
    <BrowserRouter>
      <Helmet>
        <script src="js/dashboard.js" type="text/javascript"></script>
      </Helmet>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Login />} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;