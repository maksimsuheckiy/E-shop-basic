import React from "react";
import {useSelector} from "react-redux";
import './Home.scss'
import ProductList from "../../components/ProductsList/ProductList";
import Modal from "../../components/Modal/Modal";
import Button from "../../components/Button/Button";
import {selectData} from "../../redux/getData/selectors";
import {selectModal} from "../../redux/modalReducer/selectors";
import {selectProduct} from "../../redux/productReducer/selectors";
import {useProductHook} from "../../utils/customHooks/useProductHook";
import {useModalHook} from "../../utils/customHooks/useModalHook";

const Home = () => {
    const listData = useSelector(selectData)
    const product = useSelector(selectProduct)
    const {modalDeclaration: modal, modalID: status} = useSelector(selectModal);
    const {activeProduct, favoriteProduct, addToCart} = useProductHook();
    const {closeModal} = useModalHook();

    return (
        <section className='products'>
            <ProductList list={listData}
                         favoriteProduct={favoriteProduct}
                         handleClick={activeProduct}
                         status='add'
                         btnClasses='product__control-add'
                         btnText='Add to cart'/>
            {status && <Modal
                actions={{
                    ok: <Button classes='modal__btn modal__btn--confirm' text={modal.confirm}
                                handleClick={() => addToCart(product)}/>,
                    cancel: <Button classes='modal__btn modal__btn--cancel' text={modal.cancel}
                                    handleClick={() => closeModal()}/>
                }}/>}
        </section>
    )
}

export default Home