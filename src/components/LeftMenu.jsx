import { Link } from "react-router-dom";

const LeftMenu = ({ menuOpen, setMenuOpen, handleNavigation, user }) => {
    return (
        <>
        <div className="menu-icon" id="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
        </div>
        <div className="left-menu">
            <ul className={`nav-links ${menuOpen ? 'open' : ''}`} id="lista">
                <li className="links">
                    <Link to={{
                        pathname: "/",
                        hash: "#products"
                    }}>
                        <h3>Productos</h3>
                    </Link>
                </li>
                <li className="links">
                    <Link to='/newIn'>
                        <h3>Nuevo ingreso</h3>
                    </Link>
                </li>
                <li className="links"><h3>Mas vendidos</h3></li>
                {menuOpen && (
                    <li onClick={() => handleNavigation()}>
                    <h3>{user.isRegistered? `${user.username}` : "Acceder"}</h3>
                    </li>
                )}
            </ul>
        </div>
        </>
    );
}

export default LeftMenu;