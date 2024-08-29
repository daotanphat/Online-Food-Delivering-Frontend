import { Info } from '@mui/icons-material'
import { Box, Button, Card, CardHeader, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, IconButton, InputLabel, Menu, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateOrderStatus } from '../../component/State/Order/Actions'
import { getOrderByRestaurant } from '../State/Order/Actions'

const OrderTable = ({ orders, filterValue }) => {
    const dispatch = useDispatch();
    const jwt = localStorage.getItem("jwt")
    const restaurantId = useSelector((state) => state.restaurant.restaurant.id)

    const [anchorEl, setAnchorEl] = useState(null);
    const [currentRow, setCurrentRow] = useState(null);
    const [selectedStatus, setSelectedStatus] = useState('');
    const [open, setOpen] = useState(false);

    const handleStatusChange = (event, row) => {
        const selectedStatus = event.target.value;
        setSelectedStatus(selectedStatus);
        setAnchorEl(null);
        dispatch(updateOrderStatus({ orderId: row.id, status: selectedStatus, jwt: jwt })).then(() => {
            dispatch(getOrderByRestaurant({ restaurantId: restaurantId, status: filterValue, jwt: jwt }))
        })
    };

    const handleOpenModal = (row) => {
        setCurrentRow(row);
        setOpen(true); // Open the modal
    };

    const handleCloseModal = () => {
        setOpen(false); // Close the modal
    };

    return (
        <Box>
            <Card className='mt-1'>
                <CardHeader
                    title={"All Orders"}
                    sx={{ pt: 2, alignItems: "center" }} />
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell align="center">Customer</TableCell>
                                <TableCell align="center">Email</TableCell>
                                <TableCell align="center">Price</TableCell>
                                <TableCell align="center">Create At</TableCell>
                                <TableCell align="center">Status</TableCell>
                                <TableCell align="center">Detail</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {orders.map((row, index) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {index + 1}
                                    </TableCell>
                                    <TableCell align="right">{row.customer.fullName}</TableCell>
                                    <TableCell align="right">{row.customer.email}</TableCell>
                                    <TableCell align="right">{row.totalPrice}</TableCell>
                                    <TableCell align="right">{row.createAt}</TableCell>
                                    <TableCell>
                                        <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                                            <Select
                                                labelId="demo-simple-select-filled-label"
                                                id="demo-simple-select-filled"
                                                value={row.status}
                                                onChange={(event) => handleStatusChange(event, row)}
                                            >
                                                <MenuItem value={"PENDING"}>PENDING</MenuItem>
                                                <MenuItem value={"COMPLETED"}>COMPLETED</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </TableCell>
                                    <TableCell align="right">
                                        <IconButton onClick={() => handleOpenModal(row)}>
                                            <Info />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Card>

            <Dialog open={open} onClose={handleCloseModal} maxWidth="md" fullWidth>
                <DialogTitle>Order Details</DialogTitle>
                <DialogContent>
                    {currentRow && (
                        <>
                            <Typography variant="h6">Order ID: {currentRow.id}</Typography>
                            <Typography variant="h6">Customer: {currentRow.customer.fullName}</Typography>
                            <Typography variant="h6">Email: {currentRow.customer.email}</Typography>
                            <Typography variant="h6">Created At: {currentRow.createAt}</Typography>
                            <Typography variant="h6">Status: {currentRow.status}</Typography>
                            <Typography variant="h6" sx={{ mt: 2 }}>Products:</Typography>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>#</TableCell>
                                        <TableCell>Product Name</TableCell>
                                        <TableCell>Quantity</TableCell>
                                        <TableCell>Price</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {currentRow.items.map((product, index) => (
                                        <TableRow key={index}>
                                            <TableCell>{index + 1}</TableCell>
                                            <TableCell>{product.food.name}</TableCell>
                                            <TableCell>{product.quantity}</TableCell>
                                            <TableCell>{product.food.price}</TableCell>
                                        </TableRow>
                                    ))}
                                    <TableRow>
                                        <TableCell></TableCell>
                                        <TableCell sx={{ fontWeight: 'bold' }}>TOTAL</TableCell>
                                        <TableCell sx={{ fontWeight: 'bold' }}>{currentRow.totalItem}</TableCell>
                                        <TableCell sx={{ fontWeight: 'bold' }}>{currentRow.totalPrice}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                            <Typography variant="h6" sx={{ mt: 2 }}>Address:</Typography>
                            <Typography>Street: {currentRow.deliveryAddress.streetAddress}</Typography>
                            <Typography>State: {currentRow.deliveryAddress.stateProvince}</Typography>
                            <Typography>City: {currentRow.deliveryAddress.city}</Typography>
                            <Typography>Country: {currentRow.deliveryAddress.country}</Typography>
                            <Typography>Postal Code: {currentRow.deliveryAddress.postalCode}</Typography>
                        </>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseModal} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    )
}

export default OrderTable