import React, { useEffect } from 'react'
import OrderCard from './OrderCard'
import { useDispatch, useSelector } from 'react-redux'
import { getOrderByUser } from '../State/Order/Actions'

const Orders = () => {
  const jwt = localStorage.getItem("jwt")
  const dispatch = useDispatch()
  const order = useSelector((state) => state.order.order)
  const isLoading = useSelector((state) => state.order.loading)
  console.log("order", order);

  useEffect(() => {
    dispatch(getOrderByUser(jwt))
  }, [])

  if (isLoading) {
    return <div>Loading data...</div>;
  }
  if (order !== null) {
    return (
      <div className='flex items-center flex-col'>
        <h1 className='text-xl text-center py-7 font-semibold'>My Orders</h1>
        <div className='space-y-5 w-full lg:w-1/2'>
          {
            order.map((item) => <OrderCard item={item} />)
          }
        </div>
      </div>
    )
  }
}

export default Orders