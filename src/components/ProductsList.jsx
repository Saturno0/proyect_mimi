import { products } from "../data/products.json";
import "./Products.css";

const ProductList = () => {
  

  return (
    <div className="product-list">
      {products.map((product) => (
        <div className="card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
