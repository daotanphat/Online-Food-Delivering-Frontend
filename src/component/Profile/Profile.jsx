import React, { useState } from 'react'
import ProfileNavigation from './ProfileNavigation'
import { Route, Routes } from 'react-router-dom';
import UserProfile from './UserProfile';
import Orders from './Orders';
import Favorites from './Favorites';
import Payment from './Payment';
import Notifications from './Notifications';
import Event from './Event';
import Logout from './Logout';
import Address from './Address';

const Profile = () => {
    const [openSideBar, setOpenSideBar] = useState(false);
    return (
        <div className='lg:flex justify-between'>
            <div className='sticky h-[80vh] lg:w-[20%]'>
                <ProfileNavigation open={openSideBar} />
            </div>
            <div className='lg:w-[80%]'>
                <Routes>
                    <Route path='/' element={<UserProfile />} />
                    <Route path='/orders' element={<Orders />} />
                    <Route path='/address' element={<Address />} />
                    <Route path='/favorites' element={<Favorites />} />
                    <Route path='/payment' element={<Payment />} />
                    <Route path='/notifications' element={<Notifications />} />
                    <Route path='/events' element={<Event />} />
                </Routes>
            </div>
        </div>
    )
}

export default Profile