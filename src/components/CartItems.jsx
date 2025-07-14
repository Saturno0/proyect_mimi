import PropTypes from "prop-types";
import { removeFromCart } from "../hooks/cartSlice";


const Cartitems = ({ items, dispatch }) => {
    
    return(
        <div className="cart-card-container">
            {items.map((item) => (
                <div
                  className="cart-card"
                  key={`${item.id}-${item.name}-${item.color}`}
                >
                  <div className="card-header">
                    <p className="product-title">{item.name}</p>
                  </div>

                  <div className="card-body">
                    <p><strong>Color:</strong> {item.color}</p>
                    <p><strong>Cantidad:</strong> {item.quantity}</p>
                    <p><strong>Precio unidad:</strong> ${item.precio_actual || 100}</p>
                    <p>
                      <strong>Precio final:</strong> $
                      {(item.precio_actual || 100) * item.quantity}
                    </p>
                  </div>
                  <button
                      className="btn-remove"
                      onClick={() => dispatch(removeFromCart(item))}
                    >
                      Quitar uno
                    </button>
                </div>
            ))}
        </div>
    );
}

Cartitems.propTypes = {
  items: PropTypes.arrayOf(
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
  dispatch: PropTypes.func.isRequired
}

export default Cartitems;