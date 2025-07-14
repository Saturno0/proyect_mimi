import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Footer from "../components/Footer";
import products from '../../public/products.json';
import '../styles/Index.css'

function PrincipalPage() {
    const productsData = products.products;
    return (
        <>
            <Navbar/>
            <Main products={productsData} />
            <Footer/>
        </>
    )
}

export default PrincipalPage;