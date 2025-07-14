import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Cart from '../components/Cart';
import '../styles/Cart.css';


const CartPage = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.products);
    

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

    return (
        <>
            <Navbar />
            <Cart items={items} total={total} dispatch={dispatch} />
            <Footer />
        </>
    );
};

export default CartPage;
