import { useDispatch } from 'react-redux';
import { addToCart } from '../hooks/cartSlice';
import { useState, useEffect } from 'react';
import ProductColors from './ProductColors';
import ProductInfo from './ProductInfo';
import PropTypes from 'prop-types';


const ProductDetail = ({ product }) => {
    const dispatch = useDispatch();
    const [quantities, setQuantities] = useState({});
    const [price, setPrice] = useState(0);
    console.log(product)
    

    useEffect(() => {
        if (product?.colores && Array.isArray(product.colores)) {
            const initialQuantities = product.colores.reduce((acc, colorObj) => {
                acc[colorObj.nombre] = 0;
                return acc;
            }, {});
            setQuantities(initialQuantities);
        }
    }, [product]);

    const handleQuantityChange = (colorName, value) => {
        setQuantities({
            ...quantities,
            [colorName]: Math.max(0, parseInt(value) || 0)
        });
        console.log(`precio: ${price}`)
    }

    const handleAddToCart = () => {
        Object.entries(quantities).forEach(([colorName, qty]) => {
            for (let i = 0; i < qty; i++) {
                dispatch(addToCart({ name: product.name, id: product.id ,color: colorName, price: product.precio_actual }));
            }
        });

        // Reset después de agregar
        const resetQuantities = product.colores.reduce((acc, colorObj) => {
            acc[colorObj.nombre] = 0;
            return acc;
        }, {});
        setQuantities(resetQuantities);
    };

    const totalQty = Object.values(quantities).reduce((sum, q) => sum + q, 0);

    useEffect(() => {
        if (product?.precio_actual) {
            setPrice(totalQty * product.precio_actual);
        }
    }, [quantities, product?.precio_actual, totalQty]);

    // Mientras se carga el producto o los colores
    if (!product || !product.colores || Object.keys(quantities).length === 0) {
        return <div>Cargando producto...</div>;
    }

    return (
        <div className="product">
            <h1>Producto Destacado</h1>
            <div className="product-details">
                <div className="product-image">
                    <img src={product.image} alt={product.name} />
                </div>
                <div className="product-info">

                    <ProductInfo product={product} />

                    <ProductColors
                        product={product}
                        quantities={quantities}
                        onQuantityChange={handleQuantityChange}
                    />

                    <button
                        onClick={handleAddToCart}
                        disabled={totalQty === 0}
                    >
                        Añadir al carrito ({totalQty})
                    </button>
                    <p>
                        <strong>Total: {price}</strong>
                    </p>
                </div>
            </div>
        </div>
    );
};

ProductDetail.propTypes = {
  product: PropTypes.shape({
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
    }).isRequired
};

export default ProductDetail;
