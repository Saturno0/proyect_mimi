import { useParams } from "react-router-dom";
import data from "../data/products.json";
const products = data.products;
import Navbar from "./Navbar";
import "./Product.css";

function Product() {
    const { id } = useParams();
    const producto = products.find((producto) => producto.id === parseInt(id));

    if (!producto) {
        return <h2>Producto no encontrado</h2>;
    }

    return (
      <div style={{left: "0px"}}>
        <Navbar/>
        <div className="product">
            <div className="photos">
              <img src={producto.image} alt="Imagen de la remera" />
            </div>
            <div className="prouct-info">
              <h2>{producto.name}</h2>
              <h3>{producto.price}</h3>
            </div>
        </div>
      </div>
    );
}
export default Product;
