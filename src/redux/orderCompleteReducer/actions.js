import {types} from "./index";

export const orderAction = (userInfo, list) => ({
    type: types.SET_ORDER,
    payload: {
        userInfo,
        list
    }
})