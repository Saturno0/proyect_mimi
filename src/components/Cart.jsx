import EmptyCart from './EmptyCart.jsx';
import CartItems from './CartItems.jsx';
import { useEffect, useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import { clearCart } from '../hooks/cartSlice.js';
import PropTypes from 'prop-types';

const Cart = ({ items, total, dispatch }) => {
    const [user, setUser] = useState([]);
    const navigate = useNavigate();
    
    useEffect(()=> {
        const userData = JSON.parse(localStorage.getItem('user'));
        if (userData) {
            setUser(userData);
        } else {
            setUser({ isRegistered: false });
        }
    }, [])

    const handleNavigate = () => {
        if (!user.isRegistered) {
            navigate('/login');
        } else {
            navigate('/checkout');
        }
    }
    
    return (
        <main className="cart-page container">
            <h1 className="cart-title" style={{textDecoration: "underline"}}>Tu carrito:</h1>

            {items.length === 0 ? (
                <EmptyCart />
            ) : (
                <>
                    <CartItems items={items} total={total} dispatch={dispatch} />

                    <div className="cart-summary" id="cart-summary">
                        <h2>Total: ${total}</h2>
                        <button className="btn-clear" onClick={() => dispatch(clearCart())}>Vaciar carrito</button>
                        <div className="cart-actions">
                        <button className="btn-buy" onClick={() => handleNavigate()}>
                            Comprar 
                        </button>

                        <Link to="/" className="btn-continue">Seguir comprando</Link> 
                    </div>
                    </div>
                </>
            )}
        </main>
    );
};

Cart.propTypes = {
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
  total: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default Cart;