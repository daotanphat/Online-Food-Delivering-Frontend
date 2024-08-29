import { Create, Delete } from '@mui/icons-material';
import { Box, Card, CardHeader, IconButton, Modal, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect } from 'react'
import CreateIngredientCategoryForm from './CreateIngredientCategoryForm';
import { deleteIngredientCategoryById, getIngredientCategoriesByRestaurant } from '../../component/State/IngredientItem/Actions';
import { useDispatch, useSelector } from 'react-redux';

const orders = [1, 1, 1, 1];
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
const IngredientsCategoryTable = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt")
  const restaurant = useSelector(state => state.restaurant.restaurant);

  const handleDelete = (categoryId) => {
    dispatch(deleteIngredientCategoryById({ ingredientCategoryId: categoryId, jwt: jwt }))
  }
  useEffect(() => {
    dispatch(getIngredientCategoriesByRestaurant({ restaurantId: restaurant.id, jwt: jwt }))
  }, [restaurant])
  const categories = useSelector(state => state.ingredientItem.ingredientCategories)

  return (
    <Box>
      <Card className='mt-1'>
        <CardHeader
          action={
            <IconButton onClick={handleOpen} aria-label="settings">
              <Create />
            </IconButton>
          }
          title={"Category"}
          sx={{ pt: 2, alignItems: "center" }} />
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align='left'>ID</TableCell>
                <TableCell align="left">Name</TableCell>
                <TableCell align='left'>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {categories.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {index + 1}
                  </TableCell>
                  <TableCell align="left">{row.name}</TableCell>
                  <TableCell align='left'>
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CreateIngredientCategoryForm />
        </Box>
      </Modal>
    </Box>
  )
}

export default IngredientsCategoryTable