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
import { WomenC } from './components/categories/Women/WomenC';
import { ElectronicsC } from './components/categories/Electronics/ElectronicsC';
import { FurnitureC } from './components/categories/Furniture/FurnitureC';
import { WatchesC } from './components/categories/Watches/WatchesC';

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
      <Route  path='/women' element={<WomenC/>} />
      <Route  path='/electronics' element={<ElectronicsC/>} />
      <Route  path='/Furniture' element={<FurnitureC/>} />
      <Route  path='/watches' element={<WatchesC/>} />
      </Routes>
    </Router>
    <ToastContainer />
    </div>
  );
}

export default App;
