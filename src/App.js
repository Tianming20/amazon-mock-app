import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import LoginSuccess from './pages/LoginSuccess';
import Cart from './pages/Cart'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Selling from './pages/Selling';
import AddProduct from './pages/AddProduct';
import Detail from './pages/Detail';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/sell" element={<Selling />} />
          <Route path="/loginsuccess" element={<LoginSuccess />} />
          <Route path="/checkout" element={<Cart />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
