import Footer from "../components/Footer";
import ProductList from "../components/ProductsList";
import Navbar from "../components/Navbar";
import './Home.css';

const Home = () => (
  <div className="home">
    <nav>
      <Navbar />
    </nav>
    <main>
      <ProductList />
    </main>
    <footer>
      <Footer/>
    </footer>
  </div>
);

export default Home;
