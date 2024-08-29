import React, { useEffect } from 'react'
import MenuTable from './MenuTable'
import { useDispatch, useSelector } from 'react-redux'
import { getFoodByRestaurant } from '../../component/State/Food/Actions'

const Menu = () => {
  const restaurant = useSelector(state => state.restaurant.restaurant)
  const dispatch = useDispatch()
  const jwt = localStorage.getItem("jwt")
  useEffect(() => {
    dispatch(getFoodByRestaurant({ restaurantId: restaurant.id, jwt: jwt }))
  }, [restaurant])
  const menu = useSelector(state => state.food.foods)


  return (
    <div className='px-2'>
      <MenuTable menu={menu} />
    </div>
  )
}

export default Menu