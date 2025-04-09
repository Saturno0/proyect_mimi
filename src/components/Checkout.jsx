import { useState } from "react";
import Navbar from "./Navbar";
import "./Checkout.css";

function Checkout() {
    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        telefono: "",
        direccion: "",
        ciudad: "",
        codigoPostal: "",
        metodoPago: "tarjeta"
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Here you would integrate with your payment processor
        // and send email confirmation
        try {
            // Process payment
            
            // Send confirmation email
            await sendConfirmationEmail(formData);
            
            // Redirect to success page or show success message
            alert("¡Compra realizada con éxito! Revisa tu email para ver la confirmación.");
        } catch (error) {
            alert("Hubo un error al procesar tu compra. Por favor intenta nuevamente.");
        }
    };

    const sendConfirmationEmail = async (data) => {
        // Implement email sending logic here
        // You could use services like SendGrid, AWS SES, etc.
    };

    return (
        <div>
            <Navbar />
            <div className="checkout-container">
                <h1>Finalizar Compra</h1>
                
                <div className="checkout-content">
                    <div className="checkout-form">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="nombre">Nombre completo</label>
                                <input
                                    type="text"
                                    id="nombre"
                                    name="nombre"
                                    value={formData.nombre}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="telefono">Teléfono</label>
                                <input
                                    type="tel"
                                    id="telefono"
                                    name="telefono"
                                    value={formData.telefono}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="direccion">Dirección de envío</label>
                                <input
                                    type="text"
                                    id="direccion"
                                    name="direccion"
                                    value={formData.direccion}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="ciudad">Ciudad</label>
                                    <input
                                        type="text"
                                        id="ciudad"
                                        name="ciudad"
                                        value={formData.ciudad}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="codigoPostal">Código Postal</label>
                                    <input
                                        type="text"
                                        id="codigoPostal"
                                        name="codigoPostal"
                                        value={formData.codigoPostal}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="metodoPago">Método de pago</label>
                                <select
                                    id="metodoPago"
                                    name="metodoPago"
                                    value={formData.metodoPago}
                                    onChange={handleInputChange}
                                    required
                                >
                                    <option value="tarjeta">Tarjeta de crédito</option>
                                    <option value="transferencia">Transferencia bancaria</option>
                                </select>
                            </div>

                            <button type="submit" className="checkout-button">
                                Confirmar Compra
                            </button>
                        </form>
                    </div>

                    <div className="order-summary">
                        <h2>Resumen del pedido</h2>
                        {/* Here you would map through cart items */}
                        <div className="cart-items">
                            {/* Cart items would be displayed here */}
                        </div>
                        
                        <div className="order-totals">
                            <div className="total-row">
                                <span>Subtotal</span>
                                <span>$6,300</span>
                            </div>
                            <div className="total-row">
                                <span>Envío</span>
                                <span>$500</span>
                            </div>
                            <div className="total-row total">
                                <span>Total</span>
                                <span>$6,800</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Checkout; 