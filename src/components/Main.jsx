
import ProductsLister from './ProductsLister';
// import Slides from './Slides';
import PropTypes from 'prop-types';
import Slides from './Slice';


const Main = ( {products} ) =>{

    return(
        <main>
            <Slides />
            <section className="products-container" id="productos">
                <h1>Nuestros Productos</h1>
                <div className="cards-container">
                    <ProductsLister productos={products} />
                </div>
            </section>
        </main>
    );
}

Main.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      calificacion: PropTypes.number.isRequired,
      opiniones: PropTypes.number.isRequired,
      stock: PropTypes.bool.isRequired,
      descuento: PropTypes.number.isRequired,
      precio_actual: PropTypes.number.isRequired,
      precio_original: PropTypes.number.isRequired,
      tamaños: PropTypes.arrayOf(PropTypes.string).isRequired,
      especificaciones: PropTypes.shape({
        material: PropTypes.string.isRequired,
        peso: PropTypes.string.isRequired,
        fabricado_en: PropTypes.string.isRequired
      }).isRequired,
      colores: PropTypes.arrayOf(
        PropTypes.shape({
          nombre: PropTypes.string.isRequired,
          cantidad: PropTypes.number.isRequired,
          stock: PropTypes.number.isRequired
        })
      ).isRequired,
      ingreso: PropTypes.string.isRequired
    })
  ).isRequired
};


export default Main;