import React from 'react'
import { Navbar } from '../component/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from '../component/Home/Home'
import Profile from '../component/Profile/Profile'
import RestaurantDetails from '../component/Restaurant/RestaurantDetails'
import Cart from '../component/Cart/Cart'
import Auth from '../component/Auth/Auth'
import CheckOut from '../component/Checkout/CheckOut'
import PaymentInfo from '../component/Payment/PaymentInfo'

const CustomerRouter = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='account/:register' element={<Home />} />
                <Route path='/my-profile/*' element={<Profile />} />
                <Route path='/restaurant/:city/:title/:id' element={<RestaurantDetails />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/checkout' element={<CheckOut />} />
                <Route path='/payment_info' element={<PaymentInfo />} />
            </Routes>
            <Auth />
        </div>
    )
}

export default CustomerRouter