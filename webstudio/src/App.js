import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min.js';
import 'jquery/dist/jquery.slim.min.js'
import HomePage from './Pages/HomePage';
import ServicePage from './Pages/ServicePage';
import PortfolioPage from './Pages/PortfolioPage';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import NavbarBootstrap from './components/navbar/NavbarBootstrap';
import FooterBootStrap from './components/navbar/FooterBootStrap';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <NavbarBootstrap></NavbarBootstrap>
          <Routes>
            <Route path='/WbConstructionStudio/' element={<HomePage/>} />
            <Route path='/WbConstructionStudio/service' element={<ServicePage></ServicePage>}></Route>
            <Route path='/WbConstructionStudio/portfolio' element={<PortfolioPage></PortfolioPage>}></Route>
          </Routes>
          <FooterBootStrap></FooterBootStrap>
        </BrowserRouter>
    </div>
  );
}

export default App;
