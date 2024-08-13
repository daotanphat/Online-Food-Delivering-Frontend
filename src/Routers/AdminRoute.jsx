import React from 'react'
import CreateRestaurantForm from '../AdminComponent/CreateRestaurantForm/CreateRestaurantForm'
import Admin from '../AdminComponent/Admin/Admin'
import { Route, Routes } from 'react-router-dom'

const AdminRoute = () => {
    return (
        <div>
            <Routes>
                <Route path="/*" element={false ? <CreateRestaurantForm /> : <Admin />} />
            </Routes>
        </div>
    )
}
export default AdminRoute