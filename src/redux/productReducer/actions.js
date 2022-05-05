import {types} from "./index";

export const productAction = product => ({
    type: types.SET_PRODUCT,
    payload: product
})