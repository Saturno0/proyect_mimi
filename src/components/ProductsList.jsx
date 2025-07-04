import { products } from "../data/products.json";
import "./ProductsList.css";
import { Link } from "react-router-dom";

const ProductList = () => {
  const Products = products;

  return (
    <div className="product-list">
      {Products.map((product) => (
        <Link key={product.id} to={`../product/${product.id}`} className="card">
          
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>${product.price}</p>
          
        </Link>
        
      ))}
    </div>
  );
};

export default ProductList;
