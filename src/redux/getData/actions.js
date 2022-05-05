import {types} from "./index";
import {checkDataStorage} from '../../utils/index'

export const getDataAction = data => ({
    type: types.GET_DATA,
    payload: data
})

export const setProductCart = productCart => ({
    type: types.SET_PRODUCT_CART,
    payload: productCart
})

export const setProductFavorite = productFavorite => ({
    type: types.SET_PRODUCT_FAVORITE,
    payload: productFavorite
})

export const removeProductCart = purchasedGoods => ({
    type: types.REMOVE_PRODUCT_CART,
    payload: purchasedGoods
})

const fetchData = () => {
    return fetch('products.json')
        .then(res => res.json())
}

export const getDataThunk = () => dispatch => {
    fetchData()
        .then(data => {
            const dataProducts = data.map(product => ({...product, isFavorite: false, inCart: false}));
            const updatedData = checkDataStorage(dataProducts)
            dispatch(getDataAction(updatedData))
        })
};