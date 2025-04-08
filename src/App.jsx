
import Home from "./pages/Home";
import Product from "./components/Product.jsx";
import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<Product/>} />
    </Routes>
  );
}

export default App;
