import React from "react";
import './Cart.scss'
import '../../App.scss'
import Button from "../../components/Button/Button";
import OrderSummary from "../../components/OrderSummary/OrderSummary";
import Modal from "../../components/Modal/Modal";
import {useDispatch, useSelector} from "react-redux";
import {selectData} from "../../redux/getData/selectors";
import {selectModal} from "../../redux/modalReducer/selectors";
import {selectProduct} from "../../redux/productReducer/selectors";
import {getDataThunk} from "../../redux/getData/actions";
import {useProductHook} from "../../utils/customHooks/useProductHook";
import {useModalHook} from "../../utils/customHooks/useModalHook";
import ProductList from "../../components/ProductsList/ProductList";

const Cart = () => {
    const dispatch = useDispatch();
    const listData = useSelector(selectData)
    const product = useSelector(selectProduct)
    const {modalDeclaration: modal, modalID: status} = useSelector(selectModal)
    const {activeProduct, favoriteProduct} = useProductHook();
    const {closeModal} = useModalHook()

    const deleteFromCart = delProduct => {
        const updatedProducts = listData.map(product => {
            if (product.code === delProduct.code) return {...product, inCart: false}
            return product
        })

        const cartStorage = JSON.parse(localStorage.getItem('cart'));
        const updateCartStorage = cartStorage.filter(product => product.code !== delProduct.code)

        if (cartStorage.length === 1) {
            localStorage.removeItem('cart');
        } else {
            localStorage.setItem('cart', JSON.stringify(updateCartStorage));
        }

        dispatch(getDataThunk(updatedProducts))

        closeModal();
    }

    const products = listData.filter(product => product.inCart)
    if (!products.length) return <section className='cart cart__default-text'>No products selected</section>

    return (
        <>
            <div className='container'>
                <OrderSummary/>
                <section className='cart'>
                    <ProductList list={products}
                                 favoriteProduct={favoriteProduct}
                                 handleClick={activeProduct}
                                 status='delete'
                                 btnClasses='cart__control-delete'
                                 btnText='Delete from cart'/>
                    {status && <Modal
                        actions={{
                            ok: <Button classes='modal__btn modal__btn--confirm' text={modal.confirm}
                                        handleClick={() => deleteFromCart(product)}/>,
                            cancel: <Button classes='modal__btn modal__btn--cancel' text={modal.cancel}
                                            handleClick={() => closeModal()}/>
                        }}/>}
                </section>
            </div>
        </>
    )
}

export default Cart