import { Create, Delete } from '@mui/icons-material';
import { Box, Card, CardActions, CardHeader, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';


const orders = [1, 1, 1, 1];
const MenuTable = () => {
    const navigate = useNavigate();

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
                                <TableCell align="left">Image</TableCell>
                                <TableCell align="left">Title</TableCell>
                                <TableCell align="left">Ingredients</TableCell>
                                <TableCell align="left">Price</TableCell>
                                <TableCell align="left">Avaibility</TableCell>
                                <TableCell align="left">Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {orders.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align="left">{"image"}</TableCell>
                                    <TableCell align="left">{10}</TableCell>
                                    <TableCell align="left">{"food 1"}</TableCell>
                                    <TableCell align="left">{"ingredients"}</TableCell>
                                    <TableCell align="left">{"ingredients"}</TableCell>
                                    <TableCell align="left">
                                        <IconButton>
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