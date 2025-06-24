import { Link } from "react-router-dom"
import './Footer.css'


const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-section">
                    <h2>Navegación</h2>
                    <ul className="footer-links">
                        <li><Link to="/">Inicio</Link></li>
                        <li><a href="/#productos">Productos</a></li>
                        <li><a href="./pages/newIn.html">Nuevo Ingreso</a></li>
                        <li><a href="#mas-vendidos">Más Vendidos</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h2>Ayuda</h2>
                    <ul className="footer-links">
                        <li><a href="#">Preguntas Frecuentes</a></li>
                        <li><a href="#">Envíos y Devoluciones</a></li>
                        <li><a href="#">Métodos de Pago</a></li>
                        <li><a href="#">Términos y Condiciones</a></li>
                    </ul>
                </div>

                <div className="contact">
                    <h2>Contacto</h2>
                    <div className="contact-info">
                        <p>¿Tienes alguna pregunta? Contáctanos por correo o completa nuestro formulario.</p>
                        <a href="./pages/Formulario.html">Formulario de Contacto</a>
                    </div>

                    <p>Redes sociales:</p>
                    <div className="social-media">
                        <a href="#"><img src="./assets/Icons/instagram-brands-.svg" alt="Instagram" /></a>
                        <a href="#"><img src="./assets/Icons/square-twitter-brands-solid.svg" alt="TikTok" /></a>
                    </div>
                </div>
            </div>

            <div className="copyright">
                <p>&copy; 2023 E-commerce. Todos los derechos reservados.</p>
            </div>
        </footer>
    )
}

export default Footer;