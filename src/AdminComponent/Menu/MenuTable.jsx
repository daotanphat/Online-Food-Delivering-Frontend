import { Create, Delete } from '@mui/icons-material';
import { Box, Card, CardActions, CardHeader, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteFood, getFoodByRestaurant } from '../../component/State/Food/Actions';


const MenuTable = ({menu}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const jwt = localStorage.getItem("jwt")
    const handleDelete = (foodId) => {
        dispatch(deleteFood({ foodId: foodId, jwt: jwt }))
    }


    return (
        <Box>
            <Card className='mt-1'>
                <CardHeader
                    action={
                        <IconButton onClick={() => navigate("/admin/restaurant/add-menu")} aria-label='settings'>
                            <Create />
                        </IconButton>
                    }
                    title={"Menu"}
                    sx={{ pt: 2, alignItems: "center" }} />
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">#</TableCell>
                                <TableCell align="left">Image</TableCell>
                                <TableCell align="left">Name</TableCell>
                                <TableCell align="left">Ingredients</TableCell>
                                <TableCell align="left">Price</TableCell>
                                <TableCell align="left">Avaibility</TableCell>
                                <TableCell align="left">Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {menu.map((row, index) => (
                                <TableRow
                                    key={index}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align="left">{index + 1}</TableCell>
                                    <TableCell align="left">
                                        <img src={row.images[0]} style={{ width: '60px', height: 'auto' }} />
                                    </TableCell>
                                    <TableCell align="left">{row.name}</TableCell>
                                    <TableCell align="left">{row.ingredients.map((ingredient) => ingredient.name).join(', ')}</TableCell>
                                    <TableCell align="left">{row.price}</TableCell>
                                    <TableCell align="left">{row.available ? 'Available' : 'Not Available'}</TableCell>
                                    <TableCell align="left">
                                        <IconButton onClick={() => handleDelete(row.id)}>
                                            <Delete />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Card>
        </Box>
    )
}

export default MenuTable