import './App.css';
import Footer  from './components/footer/Footer';
import Home from './components/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Categories from './components/categories/Categories';
import Register from './components/register/Register';
import { Product } from './components/product/Product';
import { Nav } from './components/nav/Nav';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Cart} from './components/cart/Cart';

function App() {

  return (
    <div  className="font-poppins">
      <Nav/>
    <Router>
      <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route  path='/category' element={<Categories/>} />
      <Route  path='/register' element={<Register/>} />
      <Route  path='/product/:id' element={<Product/>} />
      <Route  path='/cart' element={<Cart/>} />
      </Routes>
    </Router>
    <Footer/>
    <ToastContainer />
    </div>
  );
}

export default App;
