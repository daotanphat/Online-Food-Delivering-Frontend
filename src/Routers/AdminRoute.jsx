import React from 'react'
import CreateRestaurantForm from '../AdminComponent/CreateRestaurantForm/CreateRestaurantForm'
import Admin from '../AdminComponent/Admin/Admin'
import { Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'

const AdminRoute = () => {
    const restaurant = useSelector(state => state.restaurant.restaurant);
    return (
        <div>
            <Routes>
                <Route path="/*" element={restaurant.id === null ? <CreateRestaurantForm /> : <Admin />} />
            </Routes>
        </div>
    )
}
export default AdminRoute