
import Navbar from './component/Navbar';
import Home from './component/Home';
import { Route, Routes } from 'react-router-dom';
import Products from './component/Products';
import Product from './component/Productmain';
import Cart from './component/Cart';
import Contact from './component/Contact';
import Aboutpage from './component/Aboutpage';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/Contact" Component={Contact} />
        <Route exact path="/Aboutpage" Component={Aboutpage} />
        <Route exact path="/Products" Component={Products} />
        <Route exact path="/Cart" Component={Cart} />
        <Route exact path="/Productmain/:id" Component={Product} />
      </Routes>
    </>
  );
}

export default App; 
