import { Avatar, Badge, IconButton } from '@mui/material'
import React, { useEffect } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { pink } from '@mui/material/colors';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./Navbar.css";
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LogoutIcon from '@mui/icons-material/Logout';
import { getUser, logOut } from '../State/Authentication/Action';
import { getCartByUserId } from '../State/Cart/Actions';

export const Navbar = () => {
    const user = useSelector((state) => state.auth.user)
    const cart = useSelector((state) => state.cart.cart)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleAvatarClick = () => {
        if (user.role === "CUSTOMER") {
            navigate("/my-profile")
        } else {
            navigate("/admin/restaurant")
        }
    }

    const handleLogout = () => {
        dispatch(logOut())
        navigate("/")
    }

    return (
        <div className='px-5 sticky top-0 z-50 py-[.8rem] bg-[#e91e63] lg:px-20 flex justify-between'>
            <div className='lg:mr-10 cursor-pointer items-center space-x-4'>
                <li onClick={() => navigate("/")} className='logo font-semibold text-gray-300 text-2xl'>
                    Phat Food
                </li>

            </div>
            <div className='flex items-center space-x-2 lg:space-x-10'>
                <div className=''>
                    <IconButton>
                        <SearchIcon sx={{ fontSize: "1.5rem" }} />
                    </IconButton>
                </div>
                <div>
                    {user ?
                        <Avatar onClick={handleAvatarClick} sx={{ bgcolor: "white", color: pink.A400 }}>{user?.fullName[0].toUpperCase()}</Avatar>
                        : <IconButton onClick={() => navigate("/account/login")}> <PersonIcon /> </IconButton>}
                </div>
                {(
                    (cart !== null) && (
                        (cart?.cartItems.length !== 0) && (
                            <div>
                                <IconButton onClick={() => navigate("/cart")}>
                                    <Badge color="secondary"
                                        badgeContent={cart?.cartItems.length || 0}
                                    >
                                        <ShoppingCartIcon sx={{ fontSize: "1.5rem" }} />
                                    </Badge>
                                </IconButton>
                            </div>
                        )
                    )
                )}

                <div>
                    <IconButton onClick={handleLogout}>
                        {user ? <LogoutIcon sx={{ fontSize: "1.5rem" }} /> : <></>}
                    </IconButton>
                </div>
            </div>
        </div>
    )
}
