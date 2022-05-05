import {types} from "./index";

const initialState = {
    userInfo: {
        name: '',
        lastName: '',
        age: null,
        address: '',
        phone: null
    },
    list: []
}

const orderCompleteReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_ORDER:
            return {
                userInfo: action.payload.userInfo,
                purchasedGoods: action.payload.list.filter(product => product.inCart)
            }
        default:
            return state
    }
}

export default orderCompleteReducer