import './App.css';
import Home from './components/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Categories from './components/categories/Categories';
import Register from './components/register/Register';
import { Product } from './components/product/Product';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Cart} from './components/cart/Cart';
import { MenC } from './components/categories/Men/MenC';

function App() {

  return (
    <div  className="font-poppins text-blacktext">
    <Router>
      <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route  path='/category' element={<Categories/>} />
      <Route  path='/register' element={<Register/>} />
      <Route  path='/product/:id' element={<Product/>} />
      <Route  path='/cart' element={<Cart/>} />
      <Route  path='/men' element={<MenC/>} />
      </Routes>
    </Router>
    <ToastContainer />
    </div>
  );
}

export default App;
