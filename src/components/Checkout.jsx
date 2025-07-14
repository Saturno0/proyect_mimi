import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CheckOutForm from "./CheckOutForm";
import { clearCart } from "../hooks/cartSlice";

const Checkout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cartItems = useSelector((state) => state.cart.products);
    const user = useSelector((state) => state.user);
    const shipping = 500;
    const [formData, setFormData] = useState({
        nombre: '',
        email: user.email,
        telefono: "",
        direccion: "",
        ciudad: "",
        codigoPostal: "",
        metodoPago: "tarjeta"
    });


    const groupedItems = cartItems.reduce((acc, item) => {
        const key = `${item.id}-${item.name}-${item.color}`;
        if (!acc[key]) {
            acc[key] = { ...item, quantity: 1 };
        } else {
            acc[key].quantity += 1;
        }
        return acc;
    }, {});
    

    const items = Object.values(groupedItems);
    const total = items.reduce((sum, item) => (sum + (item.precio_actual || 100) * item.quantity), 0);

    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const finalTotal = total + shipping;

            const orderData = {
                ...formData,
                items: items,
                total: finalTotal
            };

            const response = await fetch('http://localhost:3001/api/send-confirmation', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(orderData)
            });

            const data = await response.json();

            if (data.success) {
                alert("¡Compra realizada con éxito! En breve recibiras un mensaje para realiar el pago.");
                navigate('/');
                dispatch(clearCart(cartItems));
            } else {
                throw new Error(data.message);
            }
        } catch (error) {
            console.error('Error:', error);
            alert("Hubo un error al procesar tu compra. Por favor intenta nuevamente." + error);
        }
    };

    return (
        <div className="checkout-container">
            <h1>Finalizar Compra</h1>
            
            <div className="checkout-content">
                <div className="checkout-form">
                    <CheckOutForm handleSubmit={handleSubmit} formData={formData} handleInputChange={handleInputChange} />
                </div>
                <div className="order-summary">
                        <h2>Resumen del pedido</h2>
                        <div className="cart-items">
                            {items.map((item, index) => (
                                <div key={index} className="cart-item">
                                    <div>
                                        <p>{item.name} - {item.color}</p>
                                        <p>Cantidad: {item.quantity}</p>
                                        <p>Precio por unidad: {item.precio_actual}</p>
                                        <p>Precio subtotal: ${item.precio_actual * item.quantity}</p>
                                    </div>
                                    <img src={item.image} alt="image of the item" />
                                </div>
                            ))}
                        </div>
                        
                        <div className="order-totals">
                            <div className="total-row">
                                <span>Subtotal </span>
                                <span>${total}</span>
                            </div>
                            <div className="total-row">
                                <span>Envío </span>
                                <span>${shipping}</span>
                            </div>
                            <div className="total-row total">
                                <span>Total</span>
                                <span>${total + shipping}</span>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default Checkout;


/*
<div className="order-summary">
                        <h2>Resumen del pedido</h2>
                        <div className="cart-items">
                            {items.map((item, index) => (
                                <div key={index} className="cart-item">
                                    <p>{item.name} - {item.color}</p>
                                    <p>Cantidad: {item.quantity}</p>
                                    <p>Precio por unidad: {item.precio_actual}</p>
                                    <p>Precio subtotal: ${item.precio_actual * precio.quantity}</p>
                                </div>
                            ))}
                        </div>
                        
                        <div className="order-totals">
                            <div className="total-row">
                                <span>Subtotal</span>
                                <span>${total}</span>
                            </div>
                            <div className="total-row">
                                <span>Envío</span>
                                <span>${shipping}</span>
                            </div>
                            <div className="total-row total">
                                <span>Total</span>
                                <span>${total + shipping}</span>
                            </div>
                        </div>
                    </div>
*/