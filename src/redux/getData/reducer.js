import types from "./types";

const initialState = [];

const getDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_DATA:
            return action.payload
        case types.SET_PRODUCT_CART:
            return state.map(product => {
                return product.code === action.payload.code ? {
                    ...action.payload,
                    inCart: true
                } : product
            })
        case types.SET_PRODUCT_FAVORITE:
            return state.map(product => {
                return product.code === action.payload.code ? {
                    ...action.payload,
                    isFavorite: !action.payload.isFavorite
                } : product
            })
        case types.REMOVE_PRODUCT_CART:
            return state.map(product => {
                return {
                    ...product,
                    inCart: false
                }
            })
        default:
            return state
    }
}

export default getDataReducer