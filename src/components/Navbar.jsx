import { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  const products = [
    "Camisetas",
    "Pantalones",
    "Vestidos",
    "Abrigos",
    "Accesorios",
  ];

  return (
    <nav className="navbar">

      <div className="nav-container">
        {/* Menú pantalla chica */}
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        <div className="header-inner flex-row container">
          {/* Menú izquierdo */}
          <div className="left-menu">
            <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
              <li className="dropdown"
                  onMouseEnter={() => setProductsOpen(true)}
                  onMouseLeave={() => setProductsOpen(false)}>
                <span>PRODUCTOS ▾</span>
                {productsOpen && (
                  <ul className="dropdown-menu">
                    {products.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                )}
              </li>
              <li>NEW IN</li>
              <li>BESTSELLER</li>
              <li>VER TODO</li>
            </ul>
          </div>

          {/* Logo */}
          <Link to={`/`}><div id="logo" className="logo">CAMEO</div></Link>

          {/* Menú derecho */}

          <div className="menu-icon">
            <Link to={`/carrito`}>CARRITO (0)</Link>
          </div>

          <div className="right-menu">
            <ul className="nav-links">
              <li>BUSCAR</li>
              <li>ACCEDER</li>
              <Link to={`/carrito`}><li>CARRITO (0)</li></Link>
            </ul>
          </div>
        </div>

        
      </div>
    </nav>
  );
};

export default Navbar;
