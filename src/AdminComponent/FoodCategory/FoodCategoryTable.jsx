import { Create, Delete, Update } from '@mui/icons-material';
import { Box, Button, Card, CardHeader, IconButton, Modal, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CreateFoodCategoryForm from './CreateFoodCategoryForm';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFoodCategoryById, getFoodCategoryByRestaurantId } from '../../component/State/FoodCategory/Actions';
import UpdateFoodCategoryForm from './UpdateFoodCategoryForm';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const FoodCategoryTable = () => {
    const [open, setOpen] = React.useState(false);
    const [openUpdate, setOpenUpdate] = React.useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const dispatch = useDispatch()
    const jwt = localStorage.getItem("jwt")
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleOpenUpdate = (category) => {
        setSelectedCategory(category);
        setOpenUpdate(true);
    }
    const handleCloseUpdate = () => setOpenUpdate(false);
    const handleDelete = (categoryId) => {
        dispatch(deleteFoodCategoryById({ foodCategoryId: categoryId, jwt: jwt }))
    }
    const restaurantId = useSelector(state => state.restaurant.restaurant.id)
    useEffect(() => {
        dispatch(getFoodCategoryByRestaurantId({ restaurantId, jwt }))
    }, [])
    const category = useSelector(state => state.category.categories)

    return (
        <Box>
            <Card className='mt-1'>
                <CardHeader
                    action={
                        <IconButton
                            onClick={handleOpen}
                            aria-label="settings">
                            <Create />
                        </IconButton>
                    }
                    title={"Food Categories"}
                    sx={{ pt: 2, alignItems: "center" }} />
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align='left'>ID</TableCell>
                                <TableCell align="left">Name</TableCell>
                                <TableCell align="left">Description</TableCell>
                                <TableCell align="left">Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {category.map((row, index) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {index + 1}
                                    </TableCell>
                                    <TableCell align="left">{row.name}</TableCell>
                                    <TableCell align="left">{row.description}</TableCell>
                                    <TableCell align="left">
                                        <Box display="flex">
                                            <IconButton onClick={() => handleDelete(row.id)}>
                                                <Delete />
                                            </IconButton>
                                            <IconButton onClick={() => handleOpenUpdate(row)}>
                                                <Update />
                                            </IconButton>
                                        </Box>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Card>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <CreateFoodCategoryForm />
                </Box>
            </Modal>
            <Modal
                open={openUpdate}
                onClose={handleCloseUpdate}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {selectedCategory && <UpdateFoodCategoryForm category={selectedCategory} />}
                </Box>
            </Modal>
        </Box>
    )
}

export default FoodCategoryTable