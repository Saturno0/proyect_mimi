
import Home from "./pages/Home";
import Product from "./components/Product.jsx";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Checkout from "./components/Checkout";
import Loggin from "./components/Loggin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/carrito" element={<Checkout />} />
      <Route path="/loggin_register" element={<Loggin />} />
    </Routes>
  );
}

export default App;
