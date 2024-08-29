import { Card, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import OrderTable from './OrderTable';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderByRestaurant } from '../State/Order/Actions';

const orderStatus = [
  { label: "All", value: "ALL" },
  { label: "Pending", value: "PENDING" },
  { label: "Completed", value: "COMPLETED" }
]
const Order = () => {
  const [filterValue, setFilterValue] = useState("ALL");
  const dispatch = useDispatch()
  const handleFilter = (event, value) => {
    setFilterValue(value)
  }
  const restaurantId = useSelector((state) => state.restaurant.restaurant.id)
  const jwt = localStorage.getItem("jwt")
  useEffect(() => {
    dispatch(getOrderByRestaurant({ restaurantId: restaurantId, status: filterValue, jwt: jwt }))
  }, [filterValue])
  const orders = useSelector(state => state.orderAdmin.orders)

  return (
    <div className='px-2'>
      <Card className='p-5'>
        <Typography sx={{ paddingBottom: "1rem" }} variant='h5'>
          Order Status
        </Typography>
        <FormControl>
          <RadioGroup
            onChange={handleFilter}
            row
            name='category'
            value={filterValue || "ALL"}>
            {orderStatus.map((item) =>
              <FormControlLabel
                key={item.label}
                value={item.value}
                control={<Radio />}
                label={item.label}
                sx={{ color: "gray" }} />)}
          </RadioGroup>
        </FormControl>
      </Card>
      <OrderTable orders={orders} filterValue={filterValue}></OrderTable>
    </div>
  )
}

export default Order