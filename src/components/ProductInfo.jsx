import PropTypes from 'prop-types';

const ProductInfo = ({ product }) => {
    return (
        <>
            <h2>{product.name}</h2>
            <div className="product-rating">
                ⭐⭐⭐⭐☆ ({product.calificacion}) · {product.opiniones} opiniones
            </div>
            <p>{product.description}</p>

            {product.stock ? <p className="stock">En stock</p> : <p className="stock">Sin stock</p>}
            {product.descuento > 0 && (
                <p className="discount">¡{product.descuento}% de descuento por tiempo limitado!</p>
            )}

            <p className="price">
                ${product.precio_actual}{" "}
                {product.precio_actual !== product.precio_original && (
                    <del style={{ color: "#888", fontSize: "1rem" }}>${product.precio_original}</del>
                )}
            </p>

            <label htmlFor="size">Tamaño:</label>
            <select id="size" name="size">
                {product.tamaños.map((t) => (
                    <option key={t}>{t}</option>
                ))}
            </select>

            <ul className="specs">
                <li>Material: {product.especificaciones.material}</li>
                <li>Peso: {product.especificaciones.peso}</li>
                <li>Fabricado en: {product.especificaciones.fabricado_en}</li>
            </ul>
        </>
    )
}

ProductInfo.propTypes = {
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

export default ProductInfo;