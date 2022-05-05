import {modalAction} from "../../redux/modalReducer/actions";
import {useDispatch} from "react-redux";

export const useModalHook = () => {
    const dispatch = useDispatch()

    const closeModal = () => dispatch(modalAction('', ''))

    return {
        closeModal
    }
}