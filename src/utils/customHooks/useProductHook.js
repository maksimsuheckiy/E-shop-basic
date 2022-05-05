import {useDispatch} from "react-redux";
import {setProductCart, setProductFavorite} from "../../redux/getData/actions";
import modalWindowDeclarations from "../../modalWindows";
import {modalAction} from "../../redux/modalReducer/actions";
import {productAction} from "../../redux/productReducer/actions";

export const useProductHook = () => {
    const dispatch = useDispatch()

    const favoriteProduct = productFavorite => {
        dispatch(setProductFavorite(productFavorite))
    }

    const activeProduct = (modalID, product) => {
        const modalDeclaration = modalWindowDeclarations.find(item => item.id === modalID)
        dispatch(modalAction(modalDeclaration, modalID))
        dispatch(productAction(product))
    }

    const addToCart = productCart => {
        dispatch(setProductCart(productCart));
        dispatch(modalAction('', ''));
    }

    return {
        favoriteProduct,
        activeProduct,
        addToCart
    }
}