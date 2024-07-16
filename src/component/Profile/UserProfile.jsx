import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOut } from '../State/Authentication/Action';

const UserProfile = () => {
  const { auth } = useSelector(store => store)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(logOut())
    navigate('/')
  }
  return (
    <div className='min-h-[80vh] flex flex-col justify-center items-center'>
      <div className='flex flex-col items-center justify-center'>
        <AccountCircleIcon sx={{ fontSize: '9rem' }} />
        <h1 className='py-5 text-2xl font-semibold'>{auth.user?.fullName}</h1>
        <p>Email: {auth.user?.email}</p>
        <Button onClick={handleLogout} variant='contained' sx={{ margin: "2rem 0rem" }}>LOGOUT</Button>
      </div>
    </div>
  )
}

export default UserProfile