import {createStore, applyMiddleware, combineReducers} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from 'redux-thunk'
import getDataReducer from "./getData";
import activeModalReducer from "./modalReducer";
import activeProductReducer from "./productReducer";
import orderCompleteReducer from "./orderCompleteReducer";
import storageMiddleware from "./middlewares/storageMiddleware";

const store = createStore(
    combineReducers({
        data: getDataReducer,
        modal: activeModalReducer,
        product: activeProductReducer,
        order: orderCompleteReducer
    }),
    composeWithDevTools(applyMiddleware(thunk, storageMiddleware))
)

export default store