import React, { useState, useEffect } from 'react';
import { Box, Button, Divider, Grid, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { getCartByUserId } from '../State/Cart/Actions';
import { createOrder, payOrder } from '../State/Order/Actions';
import { useNavigate } from 'react-router-dom';

const CheckOut = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const restaurantId = useSelector(state => state.restaurant.restaurant.id);
  const user = useSelector((state) => state.auth.user);
  const url = useSelector(state => state.order.payment?.url)
  const navigate = useNavigate();
  const [shippingAddress, setShippingAddress] = useState('');
  const jwt = localStorage.getItem("jwt");

  useEffect(() => {
    dispatch(getCartByUserId(jwt));
  }, []);

  const handleSubmit = () => {
    const data = {
      restaurantId: restaurantId,
      shipAddress: {
        streetAddress: user.address.streetAddress,
        city: user.address.city,
        stateProvince: user.address.stateProvince,
        postalCode: user.address.postalCode,
        country: user.address.country,
      },
    };

    dispatch(createOrder({ requestOrder: data, jwt }))
      .then((createOrderResponse) => {
        // First dispatch is complete, now dispatch the second action
        return dispatch(payOrder({ jwt }));
      })
      .then((payOrderResponse) => {
        // Second dispatch is complete, now assign the URL
        if (url) {
          window.location.assign(url);
        }
      })
      .catch((error) => {
        console.error("Error during order/payment process:", error);
      });
  };


  const getTotalPrice = () => {
    return cartItems.reduce((acc, item) => acc + item.quantity * item.foodDTO.price, 0).toFixed(2);
  };

  const getTotalQuantity = () => {
    return cartItems.reduce((acc, item) => acc + item.quantity, 0);
  };



  return (
    <div className="checkout-container">
      <Grid container spacing={3}>
        {/* Header */}
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>Checkout</Typography>
        </Grid>

        {/* Customer Info */}
        <Grid item xs={12}>
          <Paper elevation={3} style={{ padding: '20px' }}>
            <Typography variant="h5">Customer Details</Typography>
            <Grid container spacing={2} style={{ marginTop: '5px' }}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Name"
                  fullWidth
                  value={user?.fullName || ''}
                  InputProps={{ readOnly: true }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Email"
                  fullWidth
                  value={user?.email || ''}
                  InputProps={{ readOnly: true }}
                />
              </Grid>
              {/* <Grid item xs={12} sm={4}>
                <TextField
                  label="Phone"
                  fullWidth
                  value={user?.phone || ''}
                  InputProps={{ readOnly: true }}
                />
              </Grid> */}
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={3} style={{ padding: '20px' }}>
            <Typography variant="h5">Address</Typography>
            <Grid container spacing={2} style={{ marginTop: '5px' }}>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Street Address"
                  fullWidth
                  value={user.addresses[0].streetAddress || ''}
                  onChange={(e) => setShippingAddress({ ...shippingAddress, streetAddress: e.target.value })}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="State/Province"
                  fullWidth
                  value={user.addresses[0].stateProvince || ''}
                  onChange={(e) => setShippingAddress({ ...shippingAddress, stateProvince: e.target.value })}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="City"
                  fullWidth
                  value={user.addresses[0].city || ''}
                  onChange={(e) => setShippingAddress({ ...shippingAddress, city: e.target.value })}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Country"
                  fullWidth
                  value={user.addresses[0].country || ''}
                  onChange={(e) => setShippingAddress({ ...shippingAddress, country: e.target.value })}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Postal Code"
                  fullWidth
                  value={user.addresses[0].postalCode || ''}
                  onChange={(e) => setShippingAddress({ ...shippingAddress, postalCode: e.target.value })}
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Order Items */}
        <Grid item xs={12}>
          <Paper elevation={3} style={{ padding: '20px' }}>
            <Typography variant="h5">Order Items</Typography>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Image</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Quantity</TableCell>
                    <TableCell>Price</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cartItems.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <img src={item.foodDTO.images[0]} alt={item.foodDTO.name} width={50} />
                      </TableCell>
                      <TableCell>{item.foodDTO.name}</TableCell>
                      <TableCell>{item.quantity}</TableCell>
                      <TableCell>${item.foodDTO.price.toFixed(2)}</TableCell>
                    </TableRow>
                  ))}
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell>
                      <Typography variant="h6">Total</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="h6">{getTotalQuantity()}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="h6">${getTotalPrice()}</Typography>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>

        {/* Payment Button */}
        <Grid item xs={12} container justifyContent="center">
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={handleSubmit}
          >
            Proceed to Payment
          </Button>
        </Grid>

      </Grid>
    </div>
  );
};

export default CheckOut;