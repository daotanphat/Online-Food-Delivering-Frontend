import { Password } from '@mui/icons-material'
import { Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import { Field, Form, Formik } from 'formik'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { registerUser } from '../State/Authentication/Action'

const initalValues = {
    fullName: "",
    email: "",
    password: "",
    role: ""
}

const RegisterForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleSubmit = (values) => {
        dispatch(registerUser({ userData: values, navigate }))
    }
    return (
        <div>
            <Typography variant='h5' className='text-center'>
                REGISTER
            </Typography>

            <Formik onSubmit={handleSubmit} initialValues={initalValues}>
                <Form>
                    <Field
                        as={TextField}
                        name="fullName"
                        label="Full Name"
                        fullWidth
                        variant="outlined"
                        margin="normal"
                    />
                    <Field
                        as={TextField}
                        name="email"
                        label="Email"
                        fullWidth
                        variant="outlined"
                        margin="normal"
                    />
                    <Field
                        as={TextField}
                        name="password"
                        label="Password"
                        fullWidth
                        variant="outlined"
                        margin="normal"
                        type="password"
                    />
                    <FormControl fullWidth margin="normal">
                        <InputLabel id="role-simple-select-label">Role</InputLabel>
                        <Field
                            as={Select}
                            labelId="role-simple-select-label"
                            id="role-simple-select"
                            // value={role}
                            label="Role"
                            name="role"
                        // onChange={handleChange}
                        >
                            <MenuItem value={"CUSTOMER"}>Customer</MenuItem>
                            <MenuItem value={"RESTAURANT_OWNER"}>Restaurant Owner</MenuItem>
                        </Field>
                    </FormControl>
                    <Button sx={{ mt: 2, padding: "1rem" }} fullWidth type='submit' variant='contained'>Register</Button>
                </Form>
            </Formik>
            <Typography variant='body2' align='center' sx={{ mt: 3 }}>
                If you have an account already?
                <Button onClick={() => navigate("/account/login")}>
                    Login
                </Button>
            </Typography>
        </div >
    )
}

export default RegisterForm