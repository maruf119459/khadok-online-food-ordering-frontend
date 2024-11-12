import { Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import React from 'react';
import { useNavigate } from 'react-router-dom';
const initialValues = {
    fullName: "",
    email: "",
    password: "",
    role: ""
}
const RegisterForm = () => {
    const handleSubmit = (values) => {
        console.log("form values ",values);
    }
    const navigate = useNavigate();
    return (
        <div>
            <Typography variant='h5' className='text-center'>
                Register
            </Typography>
            <Formik onSubmit={handleSubmit} initialValues={initialValues}>
                <Form>
                    <Field as={TextField} name="fullName" label="full name" fullWidth variant="outlined" margin="normal" />
                    <Field as={TextField} name="email" label="email" fullWidth variant="outlined" margin="normal" />
                    <Field as={TextField} name="password" label="password" fullWidth variant="outlined" margin="normal" type="password" />
                        <InputLabel id="role-simple-select-label">Role</InputLabel>
                        <Field
                            fullWidth
                            margin="normal"
                            as={Select}
                            labelId="role-simple-select-label"
                            id="demo-simple-select"
                            name="role"
                        >
                            <MenuItem value={"ROLE_CUSTOMER"}>Customer</MenuItem>
                            <MenuItem value={"ROLE_RESTAURANT_OWNER"}>Restaturant Owner</MenuItem>
                        </Field>
                    <Button fullWidth sx={{mt:2}} type='submit' variant='contained'>Register</Button>
                </Form>
            </Formik>
            <Typography variant='body2' align='center' sx={{ mt: 2 }}>
                If have an account already?
                <Button onClick={() => navigate("/account/login")}>
                    login
                </Button>
            </Typography>
        </div>
    );
};

export default RegisterForm;