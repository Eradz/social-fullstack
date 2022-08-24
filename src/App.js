import './App.css';
import { Hero } from './components/hero.js/Hero';
import { Nav } from './components/nav/Nav';
import { Product } from './components/products/Product';
import Category from './components/category/Category';


function App() {
 
  return (
    <>
   <Nav/>
   <Hero/>
   <Category/>
   <Product/>
    </>
  );
}

export default App;
