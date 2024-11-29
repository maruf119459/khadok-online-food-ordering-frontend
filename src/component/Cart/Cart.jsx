import { Box, Button, Card, Divider, Modal, TextField, Grid } from '@mui/material';
import React, { useState } from 'react';
import CartItem from './CartItem';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { createOrder } from '../State/Order/Action';
import locationImg from '../../assetes/locationImg.png';
import { removeCartItem } from '../State/Cart/Action';

export const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    outline: 'none',
    boxShadow: 24,
    p: 4,
};

const initialValues = {
    streetAddress: '',
    division: '',
    postalcode: '',
    city: '',
};

const validationSchema = Yup.object().shape({
    streetAddress: Yup.string().required('Street address is required'),
    division: Yup.string().required('Division is required'),
    postalcode: Yup.string().required('Postal code is required'),
    city: Yup.string().required('City is required'),
});

const Cart = () => {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const { cart, auth } = useSelector((store) => store);

    const handleOpenAddressModal = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleSubmit = (values) => {
        const jwt = localStorage.getItem('jwt');
        const data = {
            jwt: jwt,
            order: {
                restaurantId: cart.cart?.item[0]?.food?.name.split('-')[1],
                deliveryAddress: {
                    fullName: auth.user?.fullName,
                    streetAddress: values.streetAddress,
                    city: values.city,
                    division: values.division,
                    postalCode: values.postalcode,
                    country: 'Bangladesh',
                },
            },
        };
        dispatch(createOrder(data));
        cart?.cart?.item?.forEach((item) => {
            if (item?.id) {
                dispatch(removeCartItem({ cartItemId: item.id, jwt: auth.jwt || jwt }));
            } else {
                console.error('Invalid cart item:', item);
            }
        });
    };

    const isCartEmpty = cart?.cart?.total === 0;

    return (
        <div>
            <main className="lg:flex justify-between">
                <section className="lg:w-[30%] space-y-6 lg:min-h-screen pt-10">
                    {cart?.cart?.item?.map((item, index) => (
                        <CartItem key={index} item={item} />
                    ))}
                    <Divider />
                    <div className="billDetails px-5 text-sm">
                        <p className="font-extralight py-5">Bill Details</p>
                        <div className="space-y-3">
                            <div className="flex justify-between">
                                <p>Item Total</p>
                                <p>৳ {cart?.cart?.total}</p>
                            </div>
                            <div className="flex justify-between">
                                <p>Delivery Fee</p>
                                <p>৳ {isCartEmpty ? 0 : 21}</p>
                            </div>
                            <div className="flex justify-between">
                                <p>Tax</p>
                                <p>৳ {isCartEmpty ? 0 : 5}</p>
                            </div>
                            <Divider />
                        </div>
                        <div className="flex justify-between">
                            <p>Total Pay</p>
                            <p>৳ {isCartEmpty ? 0 : cart?.cart?.total + 5 + 21}</p>
                        </div>
                    </div>
                </section>
                <Divider orientation="vertical" flexItem />
                <section
                    className={`lg:w-[70%] flex flex-col items-center px-5 pb-10 lg:pb-0 ${
                        isCartEmpty ? 'opacity-50 pointer-events-none' : ''
                    }`}
                >
                    <div>
                        <h1 className="text-center font-semibold text-2xl py-10">
                            Delivery Address
                        </h1>
                        <div className="flex gap-5 flex-wrap justify-center">
                            <Card className="flex justify-center items-center w-64 p-5">
                                <div className="space-y-3">
                                    <h1 className="font-semibold text-lg">Set your Address</h1>
                                    <Button
                                        variant="contained"
                                        fullWidth
                                        onClick={handleOpenAddressModal}
                                    >
                                        Insert Info
                                    </Button>
                                </div>
                            </Card>
                        </div>
                    </div>
                    <div className="mt-8">
                        <img src={locationImg} alt="Location" />
                    </div>
                </section>
            </main>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ errors, touched, handleSubmit }) => (
                            <Form onSubmit={handleSubmit}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <Field
                                            as={TextField}
                                            id="streetAddress"
                                            name="streetAddress"
                                            label="Street Address"
                                            fullWidth
                                            variant="outlined"
                                            error={
                                                touched.streetAddress &&
                                                Boolean(errors.streetAddress)
                                            }
                                            helperText={
                                                touched.streetAddress && errors.streetAddress
                                            }
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Field
                                            as={TextField}
                                            name="division"
                                            label="Division"
                                            id="division"
                                            fullWidth
                                            variant="outlined"
                                            error={touched.division && Boolean(errors.division)}
                                            helperText={touched.division && errors.division}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Field
                                            as={TextField}
                                            name="postalcode"
                                            label="Postal Code"
                                            fullWidth
                                            variant="outlined"
                                            error={touched.postalcode && Boolean(errors.postalcode)}
                                            helperText={touched.postalcode && errors.postalcode}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Field
                                            as={TextField}
                                            name="city"
                                            label="City"
                                            fullWidth
                                            variant="outlined"
                                            error={touched.city && Boolean(errors.city)}
                                            helperText={touched.city && errors.city}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button type="submit" variant="contained" fullWidth>
                                            Submit
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Form>
                        )}
                    </Formik>
                </Box>
            </Modal>
        </div>
    );
};

export default Cart;
