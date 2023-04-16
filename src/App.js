
import Navbar from './component/Navbar';
import Home from './component/Home';
import { Route, Routes } from 'react-router-dom';
import Products from './component/Products';
import Product from './component/Product';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/Products" Component={Products} />
        <Route exact path="/Product/:id" Component={Product} />
      </Routes>
    </>
  );
}

export default App; 
