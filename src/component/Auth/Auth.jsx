import { Box, Modal } from '@mui/material'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { style } from '../Cart/Cart'
import RegisterForm from './RegisterForm'
import LoginForm from './LoginForm'

const Auth = () => {
    const location = useLocation()
    const navigate = useNavigate();
    const hanldeOnclose = () => {
        navigate("/")
    }
    return (
        <>
            <Modal
                open={
                    location.pathname === '/account/register'
                    || location.pathname === '/account/login'
                }
                onclose={hanldeOnclose}
            >
                <Box sx={style}>
                    {location.pathname === '/account/register' ? <RegisterForm /> : <LoginForm />}
                </Box>

            </Modal>
        </>
    )
}

export default Auth