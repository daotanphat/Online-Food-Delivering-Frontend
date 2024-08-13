import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminRoute from './AdminRoute'
import CustomerRouter from './CustomerRouter'

const Router = () => {
    return (
        <Routes>
            <Route path='/admin/restaurant/*' element={<AdminRoute />} />
            <Route path='/*' element={<CustomerRouter />} />
        </Routes>
    )
}

export default Router