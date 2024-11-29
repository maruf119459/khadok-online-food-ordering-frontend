import { Button, TextField, Typography } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../State/Authentication/Action';

const initialValues={
    email:"",
    password:""
}
const LoginForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleSubmit=(values)=>{
        console.log(values);
        dispatch(loginUser({userData:values, navigate}))
    }
    return (
        <div>
            <Typography variant='h5' className='text-center'>
                Login
            </Typography>
            <Formik onSubmit={handleSubmit} initialValues={initialValues}>
                <Form>
                    <Field as={TextField} name="email" label="email" fullWidth variant="outlined" margin="normal"/>
                    <Field as={TextField} name="password" label="password" fullWidth variant="outlined" margin="normal" type="password"/>
                    <Button fullWidth type='submit' variant='contained'>Login</Button>
                </Form>
            </Formik>
            <Typography variant='body2' align='center' sx={{mt:2}}>
                Don't have an account
                <Button sx={{color:"#EC7755"}} onClick={()=>navigate("/account/register")}>
                    register
                </Button>
            </Typography>
        </div>
    );
};

export default LoginForm;