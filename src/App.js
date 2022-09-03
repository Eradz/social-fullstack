import './App.css';
import { Hero } from './components/hero.js/Hero';
import { Nav } from './components/nav/Nav';
import { Product } from './components/products/Product';
import Category from './components/category/Category';
import { Choose } from './components/chooseus/Choose';
import Faq from './components/faq/Faq';


function App() {

  return (
    <div className='bg-bg'>
      <Nav />
      <Hero />
      <Category />
      <Choose />
      <Product/>
      <Faq />
    </div>
  );
}

export default App;
