import React from "react";
import PropTypes from 'prop-types'
import './Modal.scss'
import {useSelector} from "react-redux";
import {selectModal} from "../../redux/modalReducer/selectors";
import {useModalHook} from "../../utils/customHooks/useModalHook";

const Modal = ({actions: {ok, cancel}}) => {
    const {modalDeclaration: {closeButton, title, desc}} = useSelector(selectModal);
    const {closeModal} = useModalHook();

    return (
        <div className='modal' onClick={e => (e.currentTarget === e.target) && closeModal()}>
            <div className='modal__container'>
                <div className='modal__header'>
                    <span className='modal__header-title'>{title}</span>
                    {closeButton && <span className="modal__header-close" onClick={closeModal}/>}
                </div>
                <div className="modal__content">
                    <p className='modal__content-text'>{desc}</p>
                </div>
                <div className='modal__control'>
                    {ok}
                    {cancel}
                </div>
            </div>
        </div>
    )
}

export default Modal

Modal.propTypes = {
    actions: PropTypes.objectOf(PropTypes.element).isRequired
}

Modal.defaultProps = {
    title: 'Confirm action',
    desc: 'Are you sure you want to perform this action?',
    closeButton: true
}