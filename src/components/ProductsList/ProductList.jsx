import React from 'react';
import PropTypes, {object} from 'prop-types'
import Product from "../Product/Product";
import './ProductList.scss'

const ProductList = ({list, favoriteProduct, handleClick, btnClasses, btnText, status}) => {
    return list.map(product =>
        <Product key={product.code}
                 code={product.code}
                 name={product.name}
                 price={product.price}
                 picture={product.picture}
                 color={product.color}
                 inCart={product.inCart}
                 isFavorite={product.isFavorite}
                 product={product}
                 favoriteProduct={favoriteProduct}
                 handleClick={handleClick}
                 btnClasses={btnClasses}
                 btnText={btnText}
                 status={status}/>
    )
}

export default ProductList

ProductList.propTypes = {
    list: PropTypes.arrayOf(object).isRequired,
    favoriteProduct: PropTypes.func,
    handleClick: PropTypes.func.isRequired
}