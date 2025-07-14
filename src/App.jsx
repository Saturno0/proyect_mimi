import PrincipalPage from './pages/PrincipalPage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import CheckoutPage from './pages/CheckoutPage';
import NewInPage from './pages/NewInPage';
import ProfilePage from './pages/ProfilePage';
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <Routes>
      <Route path="/" element={<PrincipalPage />} />
      <Route path="/producto/:id" element={<ProductPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/checkout' element={<CheckoutPage />}/>
      <Route path='/newIn' element={<NewInPage />}/>
      <Route path='/profile' element={<ProfilePage />}/>
    </Routes>
  )
}

export default App
