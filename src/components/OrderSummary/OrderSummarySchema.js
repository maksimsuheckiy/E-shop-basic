import * as yup from 'yup';

const orderSummarySchema = yup.object().shape({
    name: yup.string()
        .min(4, 'less then 4 symbols')
        .required('this field is required'),
    lastName: yup.string()
        .min(5, 'less then 5 symbols')
        .required('this field is required'),
    age: yup.number()
        .lessThan(100, 'Are you sure this is your age?')
        .positive('Not born yet?')
        .required('this field is required'),
    address: yup.string()
        .min(8, 'less then 8 symbols')
        .required('this field is required'),
    phone: yup.number()
        .min(10, 'less then 10 symbols')
        .required('this field is required')
})

export default orderSummarySchema