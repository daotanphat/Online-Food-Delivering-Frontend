import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cancelOrder, getOrderByUser } from '../State/Order/Actions'
import { IconButton, Dialog, DialogTitle, DialogContent, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import { Delete, Info } from '@mui/icons-material'

const Orders = () => {
  const jwt = localStorage.getItem("jwt")
  const dispatch = useDispatch()
  const orderData = useSelector((state) => state.order.order)
  const isLoading = useSelector((state) => state.order.loading)
  const [currentPage, setCurrentPage] = useState(1)
  const ordersPerPage = 10
  const [selectedOrder, setSelectedOrder] = useState(null)
  const [openModal, setOpenModal] = useState(false)
  const [orders, setOrders] = useState([]) // Local state for orders

  useEffect(() => {
    if (orderData) {
      setOrders(orderData) // Update local state when order data changes
    }
  }, [orderData])

  useEffect(() => {
    dispatch(getOrderByUser(jwt))
  }, [dispatch, jwt])

  const handleInfoClick = (order) => {
    setSelectedOrder(order)
    setOpenModal(true)
  }

  const handleDeleteOrder = (order) => {
    dispatch(cancelOrder({ orderId: order.id, jwt }))
    setOrders(prevOrders => prevOrders.filter(o => o.id !== order.id)) // Update UI locally
  }

  const handleCloseModal = () => {
    setOpenModal(false)
  }

  const calculateTotalQuantity = (items) => {
    return items.reduce((total, item) => total + item.quantity, 0)
  }

  if (isLoading) {
    return <div>Loading data...</div>
  }

  if (orders.length > 0) {
    const indexOfLastOrder = currentPage * ordersPerPage
    const indexOfFirstOrder = indexOfLastOrder - ordersPerPage
    const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder)
    const totalPages = Math.ceil(orders.length / ordersPerPage)
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return (
      <div className='flex items-center flex-col'>
        <h1 className='text-xl text-center py-7 font-semibold'>My Orders</h1>
        <div className='w-full lg:w-3/4'>
          <table className='min-w-full table-auto'>
            <thead>
              <tr>
                <th className='px-4 py-2'>#</th>
                <th className='px-4 py-2'>Customer</th>
                <th className='px-4 py-2'>Email</th>
                <th className='px-4 py-2'>Quantity</th>
                <th className='px-4 py-2'>Total Price</th>
                <th className='px-4 py-2'>Create Time</th>
                <th className='px-4 py-2'>Status</th>
                <th className='px-4 py-2'>Detail</th>
                <th className='px-4 py-2'>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                currentOrders.map((item, index) => (
                  <tr key={item.id}>
                    <td className='border px-4 py-2'>{indexOfFirstOrder + index + 1}</td>
                    <td className='border px-4 py-2'>{item.customer.fullName}</td>
                    <td className='border px-4 py-2'>{item.customer.email}</td>
                    <td className='border px-4 py-2'>{calculateTotalQuantity(item.items)}</td>
                    <td className='border px-4 py-2'>{item.totalPrice}</td>
                    <td className='border px-4 py-2'>{new Date(item.createAt).toLocaleString()}</td>
                    <td className='border px-4 py-2'>{item.status}</td>
                    <td className='border px-4 py-2'>
                      <IconButton onClick={() => handleInfoClick(item)}>
                        <Info />
                      </IconButton>
                    </td>
                    <td className='border px-4 py-2'>
                      <IconButton onClick={() => handleDeleteOrder(item)}>
                        {item.status === 'COMPLETED' ?
                          ''
                          :
                          <Delete />
                        }
                      </IconButton>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
          <div className='flex justify-center mt-4'>
            <nav>
              <ul className='inline-flex'>
                {
                  [...Array(totalPages).keys()].map(number => (
                    <li key={number + 1} className='mx-1'>
                      <button
                        onClick={() => paginate(number + 1)}
                        className={`px-3 py-1 ${currentPage === number + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                      >
                        {number + 1}
                      </button>
                    </li>
                  ))
                }
              </ul>
            </nav>
          </div>

          {/* Modal for order details */}
          <Dialog open={openModal} onClose={handleCloseModal} maxWidth="md" fullWidth>
            <DialogTitle>Order Details</DialogTitle>
            <DialogContent>
              {selectedOrder && (
                <div>
                  <p><strong>Customer Name:</strong> {selectedOrder.customer.fullName}</p>
                  <p><strong>Email:</strong> {selectedOrder.customer.email}</p>
                  <p><strong>Created At:</strong> {new Date(selectedOrder.createAt).toLocaleString()}</p>
                  <p><strong>Status:</strong> {selectedOrder.status}</p>

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
                      {selectedOrder.items.map((product, index) => (
                        <TableRow key={index}>
                          <TableCell>{index + 1}</TableCell>
                          <TableCell>{product.food.name}</TableCell>
                          <TableCell>{product.quantity}</TableCell>
                          <TableCell>{product.food.price}</TableCell>
                        </TableRow>
                      ))}
                      <TableRow>
                        <TableCell></TableCell>
                        <TableCell><strong>Total</strong></TableCell>
                        <TableCell>{calculateTotalQuantity(selectedOrder.items)}</TableCell>
                        <TableCell><strong>{selectedOrder.totalPrice}</strong></TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </div>
    )
  }

  return <div>No orders found</div>
}

export default Orders