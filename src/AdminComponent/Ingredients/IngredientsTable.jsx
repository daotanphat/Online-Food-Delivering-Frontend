import { Create } from '@mui/icons-material';
import { Box, Card, CardHeader, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'


const orders = [1, 1, 1, 1];
const IngredientTable = () => {

  return (
    <Box>
      <Card className='mt-1'>
        <CardHeader
          action={
            <IconButton aria-label="settings">
              <Create />
            </IconButton>
          }
          title={"Ingredients"}
          sx={{ pt: 2, alignItems: "center" }} />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align='left'>ID</TableCell>
                <TableCell align="left">Name</TableCell>
                <TableCell align="left">Category</TableCell>
                <TableCell align="left">Avaibility</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {1}
                  </TableCell>
                  <TableCell align="left">{"name 1"}</TableCell>
                  <TableCell align="left">{"category 1"}</TableCell>
                  <TableCell align="left">{"IN STOCK"}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </Box>
  )
}

export default IngredientTable