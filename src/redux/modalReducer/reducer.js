import {types} from "./index";

const initialState = {
    modalDeclaration: {
        id: '',
        title: '',
        desc: '',
        closeButton: null,
        confirm: '',
        cancel: ''
    },
    modalID: ''
}

const activeModalReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_MODAL:
            return action.payload
        default:
            return state
    }
}

export default activeModalReducer