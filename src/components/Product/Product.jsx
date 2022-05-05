import React from 'react';
import PropTypes from 'prop-types'
import './Product.scss'
import { favorite } from "../../utils/index";
import Button from "../Button/Button";

const Product = ({product, picture, name, color, price, handleClick, favoriteProduct, code, btnClasses, btnText, status}) => {
    return (
        <div className='product'>
            <div className='product__header'>
                <p className='product__header-code'>Code: {code}</p>
                <button className='product__header-btn' onClick={() => favoriteProduct(product)}>
                    {product.isFavorite ? favorite('1', 'product__header-favorite') : favorite('0', 'product__header-favorite')}
                </button>
            </div>
            <div className='product__about'>
                <a href="#">
                    <img src={picture} alt={name} className='product__header-img'/>
                </a>
                <p className='product__about-title'>{name} <br/> ({color})</p>
            </div>
            <div className='product__control'>
                <p className='product__control-price'>{price}</p>
                <Button classes={btnClasses}
                        text={btnText}
                        handleClick={() => handleClick(status, product)}/>
            </div>
        </div>
    )
}

export default Product

Product.propTypes = {
    picture: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    color: PropTypes.string,
    price: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
    favoriteProduct: PropTypes.func.isRequired,
    handleClick: PropTypes.func.isRequired
}

Product.defaultProps = {
    color: ''
}