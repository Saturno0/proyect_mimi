import { Link } from "react-router-dom";

const RightMenu = ({ user, totalItems, handleNavigation }) => {
    return (
        <>
            <div className="right-menu">
                <ul className="nav-links">
                    <li onClick={() => handleNavigation()}>
                        <h3>{user.isRegistered? `${user.username}` : "Acceder"}</h3>
                    </li>
                    <li>
                        <Link to={{
                            pathname: "/cart",
                            hash: "#"
                        }}>
                            <h3>Carrito({totalItems})</h3>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="cart-icon" id="cart-icon">
                <Link to={{
                    pathname: "/cart",
                    hash: "#"
                }}>
                    <h3>Carrito({totalItems})</h3>
                </Link>
            </div>
        </>
    );
}

export default RightMenu;