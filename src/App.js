import './App.css';
import Footer  from './components/footer/Footer';
import Home from './components/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Categories from './components/categories/Categories';
import Register from './components/register/Register';
function App() {

  return (
    <>
    <Router>
      <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route exact path='/category' element={<Categories/>} />
      <Route exact path='/register' element={<Register/>} />
      </Routes>
    </Router>
    <Footer/>
    </>
  );
}

export default App;
