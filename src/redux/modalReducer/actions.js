import {types} from "./index";

export const modalAction = (modalDeclaration, modalID) => ({
    type: types.SET_MODAL,
    payload: {
        modalDeclaration,
        modalID
    }
})