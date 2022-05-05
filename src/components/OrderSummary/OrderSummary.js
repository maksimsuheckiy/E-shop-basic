import React, {useEffect} from "react";
import './OrderSummary.scss'
import {Formik, Field, Form, ErrorMessage} from "formik";
import orderSummarySchema from './OrderSummarySchema'
import {useDispatch, useSelector} from "react-redux";
import {orderAction} from '../../redux/orderCompleteReducer/actions'
import {selectData} from "../../redux/getData/selectors";
import {removeProductCart} from "../../redux/getData/actions";
import {selectOrder} from "../../redux/orderCompleteReducer/selectors";

const OrderSummary = () => {
    const dispatch = useDispatch();
    const list = useSelector(selectData);
    const {userInfo, purchasedGoods} = useSelector(selectOrder);

    useEffect(() => {
        if (purchasedGoods) {
            const order = purchasedGoods.map(product => product.name);
            const {name, lastName, age, address, phone} = userInfo;

            console.log(`Congratulations, you have purchased the following items: ${order};`)
            console.log(`User info:
                         name - ${name};
                         lastname - ${lastName};
                         age - ${age};
                         address - ${address};
                         phone - ${phone};`)
        }
    }, [userInfo, purchasedGoods])

    return (
        <Formik
            initialValues={{
                name: '',
                lastName: '',
                age: '',
                address: '',
                phone: ''
            }}
            onSubmit={values => {
                dispatch(orderAction(values, list));
                dispatch(removeProductCart(purchasedGoods));
            }}
            validationSchema={orderSummarySchema}>
            {
                ({isSubmitting, errors, touched}) => (
                    <section className='form-container'>
                        <h3 className='form__title'>Order Summary</h3>
                        <Form className='form'>
                            <div className='form__group'>
                                <label htmlFor='name' className='form__field-label'>First name</label>
                                <Field name='name' id='name' type='text' placeholder='First name'
                                       className='form__field'/>
                                {touched.name && errors.name &&
                                <ErrorMessage component='span' name='name' className='form__error-message'/>}
                            </div>
                            <div className='form__group'>
                                <label htmlFor='lastName' className='form__field-label'>Last name</label>
                                <Field name='lastName' id='lastName' type='text' placeholder='Last name'
                                       className='form__field'/>
                                {touched.lastName && errors.lastName &&
                                <ErrorMessage component='span' name='lastName' className='form__error-message'/>}
                            </div>
                            <div className='form__group'>
                                <label htmlFor='age' className='form__field-label'>Age</label>
                                <Field name='age' id='age' type='number' placeholder='Age' className='form__field'/>
                                {touched.age && errors.age &&
                                <ErrorMessage name='age' component='span' className='form__error-message'/>}
                            </div>
                            <div className='form__group'>
                                <label htmlFor='address' className='form__field-label'>Address</label>
                                <Field name='address' id='address' type='text' placeholder='Address'
                                       className='form__field'/>
                                {touched.address && errors.address &&
                                <ErrorMessage component='span' name='address' className='form__error-message'/>}
                            </div>
                            <div className='form__group'>
                                <label htmlFor='phone' className='form__field-label'>Phone number</label>
                                <Field name='phone' id='phone' type='number' placeholder='Phone number'
                                       className='form__field'/>
                                {touched.phone && errors.phone &&
                                <ErrorMessage component='span' name='phone' className='form__error-message'/>}
                            </div>
                            <div className='form__submit-box'>
                                <Field type='submit' value='Complete order' className='form__submit'
                                       onSubmit={() => isSubmitting}/>
                            </div>
                        </Form>
                    </section>
                )
            }
        </Formik>
    )
}

export default OrderSummary