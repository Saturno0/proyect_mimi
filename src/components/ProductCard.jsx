import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProductCard = ({ productos, id }) => {
    const producto = productos.find((prod) => prod.id === id);
    return (
        <Link to={{
                pathname: `/producto/${producto.id}`,
                hash: "#main"
            }} 
            state={{productos: productos, producto: producto}}
        >
            <div className="card">
                <h2>{producto.name}</h2>
                <img src={producto.image} alt={`imagen de ${producto.name}`} />
                <p>{producto.descripcion}</p>
                <p>Precio: ${producto.precio_actual}</p>
            </div>
        </Link>
    );
};

ProductCard.propTypes = {
  productos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      calificacion: PropTypes.number.isRequired,
      opiniones: PropTypes.number.isRequired,
      stock: PropTypes.bool.isRequired,
      descuento: PropTypes.number.isRequired,
      precio_actual: PropTypes.number.isRequired,
      precio_original: PropTypes.number.isRequired,
      tamaños: PropTypes.arrayOf(PropTypes.string).isRequired,
      especificaciones: PropTypes.shape({
        material: PropTypes.string.isRequired,
        peso: PropTypes.string.isRequired,
        fabricado_en: PropTypes.string.isRequired
      }).isRequired,
      colores: PropTypes.arrayOf(
        PropTypes.shape({
          nombre: PropTypes.string.isRequired,
          cantidad: PropTypes.number.isRequired,
          stock: PropTypes.number.isRequired
        })
      ).isRequired,
      ingreso: PropTypes.string.isRequired
    })
  ).isRequired,
  id: PropTypes.number.isRequired
};


export default ProductCard;