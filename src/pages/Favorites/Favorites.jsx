import React from "react";
import './Favorites.scss'
import Modal from "../../components/Modal/Modal";
import Button from "../../components/Button/Button";
import {useSelector} from "react-redux";
import {selectData} from "../../redux/getData/selectors";
import {selectModal} from "../../redux/modalReducer/selectors";
import {selectProduct} from "../../redux/productReducer/selectors";
import {useProductHook} from "../../utils/customHooks/useProductHook";
import {useModalHook} from "../../utils/customHooks/useModalHook";
import ProductList from "../../components/ProductsList/ProductList";

const Favorites = () => {
    const listData = useSelector(selectData)
    const product = useSelector(selectProduct)
    const {modalDeclaration: modal, modalID: status} = useSelector(selectModal)
    const {activeProduct, favoriteProduct, addToCart} = useProductHook();
    const {closeModal} = useModalHook();

    const products = listData.filter(product => product.isFavorite)
    if (!products.length) return <section className='favorite favorite__default-text'>No featured products</section>

    return (
        <section className='favorite'>
            <ProductList list={products}
                         favoriteProduct={favoriteProduct}
                         handleClick={activeProduct}
                         status='add'
                         btnClasses='product__control-add'
                         btnText='Add to cart'/>
            {status && <Modal actions={{
                ok: <Button classes='modal__btn modal__btn--confirm' text={modal.confirm}
                            handleClick={() => addToCart(product)}/>,
                cancel: <Button classes='modal__btn modal__btn--cancel' text={modal.cancel}
                                handleClick={() => closeModal()}/>
            }}/>}
        </section>
    )
}

export default Favorites