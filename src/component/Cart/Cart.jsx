import { Divider, Grid, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import CartItem from './CartItem'
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import { Button, Card } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { getCartByUserId } from '../State/Cart/Actions';
import { createOrder } from '../State/Order/Actions';
import { useNavigate } from 'react-router-dom';
// import * as Yup from "yup";

export const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    outline: "none",
    boxShadow: 24,
    p: 4,
};
// const validationSchema = Yup.object.shape({
//     streetAddress: Yup.string().required("Street address is required"),
//     state: Yup.string().required("State is required"),
//     pincode: Yup.required("Pin code is required"),
//     city: Yup.string().required("City is required")
// })

const Cart = () => {
    const jwt = localStorage.getItem("jwt")
    const user = useSelector((state) => state.auth.user)
    const navigate = useNavigate();
    const initialValues = {
        streetAddress: user?.address?.streetAddress || "",
        state: user?.address?.stateProvince || "",
        pinCode: user?.address?.postalCode || "",
        city: user?.address?.city || ""
    };
    const handleSubmit = (values) => {
        // const data = {
        //     restaurantId: cartItems[0].foodDTO.restaurantId,
        //     shipAddress: {
        //         streetAddress: values.streetAddress,
        //         city: values.city,
        //         stateProvince: values.state,
        //         postalCode: values.pinCode,
        //         country: "vietnam"
        //     }
        // }
        // dispatch(createOrder({ requestOrder: data, jwt }))
        navigate("/checkout");
    };

    const cart = useSelector((state) => state.cart.cart)
    const cartItems = useSelector((state) => state.cart.cartItems)
    const isLoading = useSelector((state) => state.cart.loading)


    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCartByUserId(jwt))
    }, [])
    if (isLoading) {
        return <div>Loading data...</div>;
    }
    if (cart !== null) {
        return (
            <div className='mt-10 mb-10'>
                <main className='lg:flex justify-between'>
                    <section className='lg:w-[30%] space-y-6 lg:min-h-screen pt-10'>
                        {cartItems.map((item) => <CartItem key={item.id} item={item} />)}
                        <Divider />
                        <div className='billeatils px-5 text-sm'>
                            <p className='font-extralight py-5'>Bill Details</p>
                            <div className='space-y-3 pb-3'>
                                <div className='flex justify-between text-gray-400'>
                                    <p>Item Total</p>
                                    <p> {new Intl.NumberFormat().format(cart.totalPrice)} $</p>
                                </div>
                                <div className='flex justify-between text-gray-400'>
                                    <p>Deliver fee</p>
                                    <p>10$</p>
                                </div>
                                <div className='flex justify-between text-gray-400'>
                                    <p>GST and Restaurant Charges</p>
                                    <p>30$</p>
                                </div>
                            </div>
                            <Divider />
                            <div className='pt-3 flex justify-between text-gray-400'>
                                <p>Total pay</p>
                                <p>{new Intl.NumberFormat().format(cart.totalPrice + 10 + 30)}$</p>
                            </div>
                        </div>
                    </section>
                    <Divider orientation='vertical' flexItem />
                    <section className='lg:w-[70%] flex justify-center px-5 pb-10 lg:pb-0'>
                        <div >
                            <h1 className='text-center font-semibold text-2xl py-10'>
                                Delevery Address
                            </h1>
                            <div className='flex gap-5 flex-wrap justify-center'>
                                <Formik
                                    initialValues={initialValues}
                                    onSubmit={handleSubmit}>
                                    <Form>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12}>
                                                <Field
                                                    as={TextField}
                                                    name="streetAddress"
                                                    label="Street Address"
                                                    fullWidth
                                                    variant="outlined"
                                                    InputProps={{ readOnly: true }}
                                                />
                                            </Grid>
                                            <Grid item xs={6}>
                                                <Field
                                                    as={TextField}
                                                    name="state"
                                                    label="State"
                                                    fullWidth
                                                    variant="outlined"
                                                    InputProps={{ readOnly: true }}
                                                />
                                            </Grid>
                                            <Grid item xs={6}>
                                                <Field
                                                    as={TextField}
                                                    name="pinCode"
                                                    label="Pin code"
                                                    fullWidth
                                                    variant="outlined"
                                                    InputProps={{ readOnly: true }}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Field
                                                    as={TextField}
                                                    name="city"
                                                    label="City"
                                                    fullWidth
                                                    variant="outlined"
                                                    InputProps={{ readOnly: true }}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Button
                                                    fullWidth
                                                    variant='contained'
                                                    type='submit'
                                                    color='primary'
                                                    size='small'
                                                >
                                                    Check Out
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </Form>
                                </Formik>
                            </div>
                        </div>

                    </section>
                </main>
            </div>
        )
    }

}

export default Cart