import { Category, Dashboard, Fastfood, Info, Logout, RestaurantMenu, ShoppingBag } from '@mui/icons-material'
import { Divider, Drawer, Menu, useMediaQuery } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logOut } from '../../component/State/Authentication/Action';


const menu = [
    { title: "Dashboard", icon: <Dashboard />, path: "/" },
    { title: "Orders", icon: <ShoppingBag />, path: "/orders" },
    { title: "Menu", icon: <RestaurantMenu />, path: "/menu" },
    { title: "Food Category", icon: <Category />, path: "/category" },
    { title: "Ingredients", icon: <Fastfood />, path: "/ingredients" },
    { title: "Details", icon: <Info />, path: "/details" },
    { title: "Logout", icon: <Logout />, path: "/logout" },
]

const AdminSideBar = ({ handleClose }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isSmallScreen = useMediaQuery("(max-width: 1080px)")

    const handleNavigate = (item) => {
        navigate(`/admin/restaurant${item.path}`);
        if (item.title === 'Logout') {
            navigate('');
            dispatch(logOut())
            handleClose()
        }
    }

    return (
        <div>
            <>
                <Drawer
                    variant={isSmallScreen ? "temporary" : "permanent"}
                    open={true}
                    onClose={handleClose}
                    anchor='left'
                    sx={{ zIndex: 1 }}>
                    <div className='w-[70vw] lg:w-[20vw] h-screen flex flex-col justify-center text-xl space-y-[1.65rem]'>
                        {
                            menu.map((item, index) =>
                                <>
                                    <div onClick={() => handleNavigate(item)} className='px-5 flex item-center gap-5 cursor-pointer'>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </div>
                                    {index !== menu.length - 1 && <Divider />}
                                </>
                            )
                        }
                    </div>
                </Drawer>
            </>
        </div>
    )
}

export default AdminSideBar