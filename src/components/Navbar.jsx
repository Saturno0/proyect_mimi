import { useState } from "react";
import "./Navbar.css";

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
      {/* Barra superior */}
      <div className="top-bar">MÍNIMO DE COMPRA DE $70.000 || ${"PRECIOS SIN IVA INCLUIDO"}</div>

      {/* Navbar principal */}
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
          <div id="logo" className="logo">CAMEO</div>

          {/* Menú derecho */}
          <div className="right-menu">
            <ul className="nav-links">
              <li>BUSCAR</li>
              <li>ACCEDER</li>
              <li>CARRITO (0)</li>
            </ul>
          </div>
        </div>

        
      </div>
    </nav>
  );
};

export default Navbar;
