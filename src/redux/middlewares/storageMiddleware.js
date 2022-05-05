import {types as dataType} from "../getData";
import {types as orderType} from "../orderCompleteReducer";

const storageMiddleware = (state) => next => action => {
    const {type, payload} = action;
    const products = state.getState().data;

    if (type === orderType.SET_ORDER) {
        localStorage.removeItem('cart');
    }

    if (type === dataType.SET_PRODUCT_CART) {
        if (localStorage.getItem('cart')) {
            let cartProducts = [];

            if (products.find(product => product.code === payload.code)) {
                cartProducts = products.map(product =>
                    product.code === payload.code ? {...product, inCart: true} : product
                )
            }

            const productsInCart = cartProducts.filter(product => product.inCart)
            localStorage.setItem('cart', JSON.stringify(productsInCart));
        } else {
            localStorage.setItem('cart', JSON.stringify([payload]));
        }
    }

    if (type === dataType.SET_PRODUCT_FAVORITE) {
        if (localStorage.getItem('favorites')) {
            let favoriteProducts = [];

            if (products.find(product => product.code === payload.code)) {
                favoriteProducts = products.map(product =>
                    product.code === payload.code ? {...product, isFavorite: !product.isFavorite} : product
                )
            }

            const favoriteProduct = favoriteProducts.filter(product => product.isFavorite ? product.code : '')

            if (favoriteProduct.length === 0) {
                localStorage.removeItem('favorites');
            } else {
                localStorage.setItem('favorites', JSON.stringify(favoriteProduct))
            }
        } else {
            localStorage.setItem('favorites', JSON.stringify([payload]));
        }
    }

    return next(action);
}

export default storageMiddleware