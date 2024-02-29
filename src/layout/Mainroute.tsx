import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Sharedlayout from "../pages/Sharedlayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Pricing from "../pages/Pricing"
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/theme.css";

function Mainroute() {
  return (
    <BrowserRouter>
     <Routes>
        <Route path='/' element={<Sharedlayout />}>
          <Route index element={<Home />} />
          <Route path='About-us' element={<About />} />
          <Route path='Pricing' element={<Pricing />} />
          <Route path='Contact-us' element={<Contact />} />
         
          <Route />
        </Route>
     </Routes>
    </BrowserRouter>
  )
}

export default Mainroute;