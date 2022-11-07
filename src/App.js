import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import LoginSuccess from './pages/LoginSuccess';
import ImageUploader from './pages/ImageUploader';
import Cart from './pages/Cart'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/upload" element={<ImageUploader />} />
          <Route path="/loginsuccess" element={<LoginSuccess />} />
          <Route path="/checkout" element={<Cart />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
