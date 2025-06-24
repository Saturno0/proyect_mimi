import { useState } from "react";
import { useParams } from "react-router-dom";
import data from "../data/products.json";
const products = data.products;
import Navbar from './Navbar';
import Footer from './Footer';
import "./Product.css";

function Product() {
    const { id } = useParams();
    const producto = products.find((producto) => producto.id === parseInt(id));
    const [quantities, setQuantities] = useState({
        Blanco: 0,
        Bordo: 0,
        Negro: 0,
        "Gris Topo": 0
    });

    if (!producto) {
        return <h2>Producto no encontrado</h2>;
    }

    const handleQuantityChange = (color, value) => {
        setQuantities({
            ...quantities,
            [color]: parseInt(value) || 0
        });
    };

    // para mi futuro yo, acordate de utilizar una array
    // para las imagenes, esta tiene que venir de un jason,
    // o la BD

    const totalItems = Object.values(quantities).reduce((a, b) => a + b, 0);
    const totalPrice = totalItems * producto.price;

    return (
        <div>
            <Navbar />
            <div className="product">
                {/* Aca este div de photos1 deberia ser un map (esto para hacer a futuro) */}
                <div className="photos1 show">
                    <img src={producto.image} alt="Vista frontal" />
                    <img src={producto.image} alt="Vista trasera" />
                    <img src={producto.image} alt="Vista detalle 1" />
                    <img src={producto.image} alt="Vista detalle 2" />
                </div>
                <div className="photos2">
                    <img src={producto.image} alt="Vista frontal" />
                </div>

                <div className="product-info">
                    <h1>{producto.name}</h1>
                    <h2>Precio: ${producto.price.toLocaleString()}</h2>
                    
                    <div className="product-details">
                        <p>{producto.description}</p>
                        <p>Tela: Algodón 100% flame</p>
                        <p>Talle: único</p>
                        <p>Medidas: busto 98cm, largo 59cm</p>
                    </div>
                    

                    <table className="color-table">
                        <thead>
                            <tr>
                                <th>COLOR</th>
                                <th>CANTIDAD</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(quantities).map((color) => (
                                <tr key={color}>
                                    <td>{color}</td>
                                    <td>
                                        <input
                                            type="number"
                                            min="0"
                                            value={quantities[color]}
                                            onChange={(e) => handleQuantityChange(color, e.target.value)}
                                        />
                                        <span className="stock-status">Hay existencias</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="cart-summary">
                        <p>Items: {totalItems}</p>
                        <p>Total: ${totalPrice.toLocaleString()}</p>
                        <button className="cart-button">AÑADIR AL CARRITO</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Product;
