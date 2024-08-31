import React, { useEffect, useState } from 'react';
import { Typography, Paper, Grid, Button } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getPaymentInfo } from '../State/Payment/Actions';

const PaymentInfo = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const transactionStatus = useSelector(state => state.payment.payment_info);

    const jwt = localStorage.getItem('jwt');
    const params = new URLSearchParams(location.search);
    const amount = params.get('vnp_Amount');
    const bankCode = params.get('vnp_BankCode');
    const order = params.get('vnp_OrderInfo');
    const responseCode = params.get('vnp_ResponseCode');

    useEffect(() => {
        // Fetch transaction status from backend
        dispatch(getPaymentInfo({ jwt, amount, bankCode, order, responseCode }))
    }, []);

    const handleHome = () => {
        navigate('/');
    };

    return (
        <div className="payment-info-container">
            <Grid container spacing={3} justifyContent="center" style={{ marginTop: '20px' }}>
                <Grid item xs={12} sm={6}>
                    <Paper elevation={3} style={{ padding: '20px' }}>
                        <Typography variant="h4" gutterBottom>Payment Status</Typography>
                        <div>
                            <Typography variant="h6">Status: {transactionStatus?.status}</Typography>
                            <Typography variant="h6">Message: {transactionStatus?.message}</Typography>
                            {/* <Typography variant="body2">Data: {transactionStatus?.data}</Typography> */}
                        </div>
                        <Button variant="contained" color="primary" onClick={handleHome} style={{ marginTop: '20px' }}>
                            Go to Home
                        </Button>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
};

export default PaymentInfo;