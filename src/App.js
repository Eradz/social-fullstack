import './App.css';
import { Login } from './components/loginup/Login';
import { Signup } from './components/Signup';
import { BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
 
  return (
    <>
    <BrowserRouter>
        <div className="App">
            <Routes>
              <Route exact path="/" element={<Login/>}/>
              <Route exact path='/signup' element={<Signup/>}/>
            </Routes>
        </div>
    </BrowserRouter>
    </>
  );
}

export default App;
