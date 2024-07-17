import { Box, Modal } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { style } from '../Cart/Cart'
import RegisterForm from './RegisterForm'
import LoginForm from './LoginForm'

const Auth = () => {
    const location = useLocation()
    const navigate = useNavigate();
    const [open, setOpen] = useState(false)
    useEffect(() => {
        if (location.pathname === '/account/register' || location.pathname === '/account/login') {
            setOpen(true);
        } else {
            setOpen(false);
        }
    }, [location.pathname]);
    const hanldeOnclose = () => {
        setOpen(false)
        navigate('/')
    }
    return (
        <>
            <Modal
                open={open}
                onClose={hanldeOnclose}
            >
                <Box sx={style}>
                    {location.pathname === '/account/register' ? <RegisterForm /> : <LoginForm />}
                </Box>

            </Modal>
        </>
    )
}

export default Auth