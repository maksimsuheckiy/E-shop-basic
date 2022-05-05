import {types} from "./index";

const initialState = {
    name: '',
    price: '',
    picture: '',
    code: '',
    color: '',
    isFavorite: null,
    inCart: null
}

const activeProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_PRODUCT:
            return action.payload
        default:
            return state
    }
}

export default activeProductReducer