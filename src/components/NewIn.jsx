import { useEffect, useState } from "react";
import ProductsLister from "./ProductsLister";
import PropTypes from "prop-types";


const NewIn = ({products}) => {
    const [productsFiltered, setProductsFiltered] = useState([]);
    
    useEffect(() => {
        setProductsFiltered(products.filter((product) => product.ingreso === "nuevo"))
    }, [products]);

    return(
        <main style={{ margin: '6rem auto', maxWidth: '1200px', padding: '0 1rem' }}>
            <div className="cards-container">
                <ProductsLister productos={productsFiltered}/>
            </div>
        </main>
    );
}

NewIn.propTypes = {
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

export default NewIn;