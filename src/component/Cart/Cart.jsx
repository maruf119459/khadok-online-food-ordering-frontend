import { Box, Button, Card, Divider, Modal, TextField, Grid } from '@mui/material';
import React, { useState } from 'react';
import CartItem from './CartItem';
import AddressCart from './AddressCart';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from "yup";

const items = [1, 1, 1, 1, 1];

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    outline: 'none',
    boxShadow: 24,
    p: 4
};

const initialValues = {
    streetAddress: "",
    division: "",
    postalcode: "",
    city: ""
};

const validationSchema = Yup.object().shape({
    streetAddress: Yup.string().required("Street address is required"),
    division: Yup.string().required("Division is required"),
    postalcode: Yup.string().required("Postal code is required"),
    city: Yup.string().required("City is required")
});

const Cart = () => {
    const handleSelectAddress = () => { };

    const handleOpenAddressModal = () => {
        setOpen(true);
    };

    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);

    const handleSubmit = (values) => {
        console.log("Form submitted with values:", values);
    };

    return (
        <div>
            <main className='lg:flex justify-between'>
                <section className='lg:w-[30%] space-y-6 lg:min-h-screen pt-10'>
                    {items.map((item, index) => <CartItem key={index} />)}
                    <Divider />
                    <div className='billDetails px-5 text-sm'>
                        <p className='font-extralight py-5'>Bill Details</p>
                        <div className='space-y-3'>
                            <div className='flex justify-between'>
                                <p>Item Total</p>
                                <p>৳ 599</p>
                            </div>
                            <div className='flex justify-between'>
                                <p>Delivery Fee</p>
                                <p>৳ 21</p>
                            </div>
                            <div className='flex justify-between'>
                                <p>Tax</p>
                                <p>৳ 5</p>
                            </div>
                            <Divider />
                        </div>
                        <div className='flex justify-between'>
                            <p>Total Pay</p>
                            <p>৳ 600</p>
                        </div>
                    </div>
                </section>
                <Divider orientation='vertical' flexItem />
                <section className='lg:w-[70%] flex justify-center px-5 pb-10 lg:pb-0'>
                    <div>
                        <h1 className='text-center font-semibold text-2xl py-10'>Choose Delivery Address</h1>
                        <div className='flex gap-5 flex-wrap justify-center'>
                            {[1, 1, 1, 1, 1].map((item, index) => (
                                <AddressCart key={index} handleSelectAddress={handleSelectAddress} item={item} showButton={true} />
                            ))}
                            <Card className="flex gap-5 w-64 p-5">
                                <div className='space-y-3'>
                                    <h1 className='font-semibold text-lg'>Add New Address</h1>
                                    <Button variant='contained' fullWidth onClick={handleOpenAddressModal}>Add</Button>
                                </div>
                            </Card>
                        </div>
                    </div>
                </section>
            </main>
            <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                        {({ handleSubmit }) => (
                            <Form onSubmit={handleSubmit}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <Field
                                            as={TextField}
                                            name="streetAddress"
                                            label="Street Address"
                                            fullWidth
                                            variant="outlined"
                                            sx={{
                                                "& .MuiOutlinedInput-root": {
                                                    "& fieldset": {
                                                        borderColor: "black" // Default border color
                                                    },
                                                    "&:hover fieldset": {
                                                        borderColor: "black" // Hover border color
                                                    },
                                                    "&.Mui-focused fieldset": {
                                                        borderColor: "black" // Focused border color
                                                    }
                                                },
                                                "& .MuiInputBase-input": {
                                                    color: "black" // Text color inside the input
                                                },
                                                "& .MuiInputLabel-root": {
                                                    color: "black" // Label text color
                                                },
                                                "& .MuiFormLabel-root.Mui-focused": {
                                                    color: "black" // Focused label color
                                                }
                                            }}
                                            
                                            error={<ErrorMessage name="streetAddress" />}
                                            helperText={<ErrorMessage name="streetAddress" component="span" className='text-red-500' />}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Field
                                            as={TextField}
                                            name="division"
                                            label="Division"
                                            fullWidth
                                            variant="outlined"
                                            sx={{
                                                "& .MuiOutlinedInput-root": {
                                                    "& fieldset": {
                                                        borderColor: "black" // Default border color
                                                    },
                                                    "&:hover fieldset": {
                                                        borderColor: "black" // Hover border color
                                                    },
                                                    "&.Mui-focused fieldset": {
                                                        borderColor: "black" // Focused border color
                                                    }
                                                },
                                                "& .MuiInputBase-input": {
                                                    color: "black" // Text color inside the input
                                                },
                                                "& .MuiInputLabel-root": {
                                                    color: "black" // Label text color
                                                },
                                                "& .MuiFormLabel-root.Mui-focused": {
                                                    color: "black" // Focused label color
                                                }
                                            }}
                                            
                                            error={<ErrorMessage name="division" />}
                                            helperText={<ErrorMessage name="division" component="span" className='text-red-500' />}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Field
                                            as={TextField}
                                            name="postalcode"
                                            label="Postal Code"
                                            fullWidth
                                            variant="outlined"
                                            sx={{
                                                "& .MuiOutlinedInput-root": {
                                                    "& fieldset": {
                                                        borderColor: "black" // Default border color
                                                    },
                                                    "&:hover fieldset": {
                                                        borderColor: "black" // Hover border color
                                                    },
                                                    "&.Mui-focused fieldset": {
                                                        borderColor: "black" // Focused border color
                                                    }
                                                },
                                                "& .MuiInputBase-input": {
                                                    color: "black" // Text color inside the input
                                                },
                                                "& .MuiInputLabel-root": {
                                                    color: "black" // Label text color
                                                },
                                                "& .MuiFormLabel-root.Mui-focused": {
                                                    color: "black" // Focused label color
                                                }
                                            }}
                                            
                                            error={<ErrorMessage name="postalcode" />}
                                            helperText={<ErrorMessage name="postalcode" component="span" className='text-red-500' />}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Field
                                            as={TextField}
                                            name="city"
                                            label="City"
                                            fullWidth
                                            variant="outlined"
                                            sx={{
                                                "& .MuiOutlinedInput-root": {
                                                    "& fieldset": {
                                                        borderColor: "black" // Default border color
                                                    },
                                                    "&:hover fieldset": {
                                                        borderColor: "black" // Hover border color
                                                    },
                                                    "&.Mui-focused fieldset": {
                                                        borderColor: "black" // Focused border color
                                                    }
                                                },
                                                "& .MuiInputBase-input": {
                                                    color: "black" // Text color inside the input
                                                },
                                                "& .MuiInputLabel-root": {
                                                    color: "black" // Label text color
                                                },
                                                "& .MuiFormLabel-root.Mui-focused": {
                                                    color: "black" // Focused label color
                                                }
                                            }}
                                            
                                            error={<ErrorMessage name="city" />}
                                            helperText={<ErrorMessage name="city" component="span" className='text-red-500' />}
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
