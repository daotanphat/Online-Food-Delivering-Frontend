import React, { useEffect, useState } from 'react'
import AdminSideBar from './AdminSideBar'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../Dashboard/Dashboard'
import Order from '../Order/Order'
import Menu from '../Menu/Menu'
import Category from '../FoodCategory/FoodCategory'
import Ingredients from '../Ingredients/Ingredients'
import RestaurantDetails from './RestaurantDetails'
import CreateMenuForm from '../Menu/CreateMenuForm'
import { useDispatch, useSelector } from 'react-redux'
import { getRestaurantByUserId } from '../../component/State/Restaurant/Actions'

const Admin = () => {
  const handleClose = () => {

  }
  const jwt = localStorage.getItem("jwt")
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getRestaurantByUserId(jwt))
  }, [])
  const restaurant = useSelector(state => state.restaurant.restaurant)

  return (
    <div>
      <div className='lg:flex justify-between'>
        <div>
          <AdminSideBar handleClose={handleClose} />
        </div>
        <div className='lg:w-[80%]'>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/orders' element={<Order />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/category' element={<Category />} />
            <Route path='/ingredients' element={<Ingredients />} />
            <Route path='/details' element={<RestaurantDetails />} />
            <Route path='/add-menu' element={<CreateMenuForm />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default Admin