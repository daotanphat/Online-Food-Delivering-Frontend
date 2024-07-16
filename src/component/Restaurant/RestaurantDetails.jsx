import { Divider, FormControl, FormControlLabel, Grid, Radio, RadioGroup, Typography } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DateRangeIcon from '@mui/icons-material/DateRange';
import MenuCard from './MenuCard';
import { useDispatch, useSelector } from 'react-redux';
import { getRestaurantById } from '../State/Restaurant/Actions';
import { useParams } from 'react-router-dom';
import { getFoodCategoryByRestaurantId } from '../State/FoodCategory/Actions';
import { getFoodByRestaurant } from '../State/Food/Actions';

const foodTypes = [
    { id: 1, label: "All", value: "all" },
    { id: 2, label: "Vegeterian only", value: "vegeterian" },
    { id: 3, label: "Non-vegeterian", value: "non_vegeterian" },
    { id: 4, label: "Seasonal", value: "seasonal" }
]
const RestaurantDetails = () => {
    // const renderCount = useRef(0);
    // renderCount.current += 1;
    // console.log(`RestaurantDetails render count: ${renderCount.current}`);
    const restaurant = useSelector((state) => state.restaurant.restaurant);
    const category = useSelector((state) => state.category.categories);
    const foods = useSelector((state) => state.food.foods);
    const dispatch = useDispatch()
    const jwt = localStorage.getItem("jwt")
    const { id } = useParams()
    const [foodType, setFoodType] = useState("all")
    const [selectedCategory, setSelectedCategory] = useState("")
    const handleFilter = (e) => {
        console.log(e.target.value, e.target.name);
    }

    console.log("category: ", category);
    console.log("restaurant: ", restaurant);

    useEffect(() => {
        dispatch(getRestaurantById({ id: id, jwt: jwt }))
        dispatch(getFoodCategoryByRestaurantId({ restaurantId: id, jwt: jwt }))
    }, [])

    useEffect(() => {
        dispatch(getFoodByRestaurant({ restaurantId: id, jwt }))
    }, [selectedCategory])

    return (
        <div className='px-5 lg:px-20 pb-10'>
            <section>
                <h3 className='text-gray-500 py-2 mt-10'>Home/City/Indian fast food/3</h3>
                <div>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <img className='w-full h-[40vh] object-cover'
                                src={restaurant?.images[0]}
                                alt='' />
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <img className='w-full h-[40vh] object-cover'
                                src={restaurant?.images[1]}
                                alt='' />
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <img className='w-full h-[40vh] object-cover'
                                src={restaurant?.images[2]}
                                alt='' />
                        </Grid>
                    </Grid>
                </div>
                <div className='pt-3 pb-5'>
                    <h1 className='text-4xl font-semibold'>{restaurant?.name}</h1>
                    <p className='text-gray-500 mt-5'>
                        {restaurant?.description}
                    </p>

                    <div className='space-y-3 mt-3'>
                        <p className='text-gray-500 flex items-center gap-3'>
                            <span>
                                <LocationOnIcon /> {restaurant?.address.city}, {restaurant?.address.country}
                            </span>
                        </p>
                        <p className='text-gray-500 flex items-center gap-3'>
                            <span>
                                <DateRangeIcon /> {restaurant?.openingHours} (Today)
                            </span>
                        </p>
                    </div>

                </div>
            </section>
            <Divider />
            <section className='pt-[2rem] flex relative'>
                <div className='space-y-10 lg:w-[20%] filter'>
                    <div className='box space-y-5 lg:sticky top-28'>
                        <div>
                            <Typography variant='h5' sx={{ paddingBottom: "1rem" }}>
                                Food Type
                            </Typography>

                            <FormControl className='py-10 space-y-5' component={"fieldset"}>
                                <RadioGroup onChange={handleFilter} name='food_type' value={foodType}>
                                    {foodTypes.map(f =>
                                        <FormControlLabel
                                            key={f.id}
                                            value={f.value}
                                            label={f.label}
                                            control={<Radio />}
                                        />)}
                                </RadioGroup>
                            </FormControl>
                        </div>
                        <Divider />
                        <div>
                            <Typography variant='h5' sx={{ paddingBottom: "1rem" }}>
                                Food Category
                            </Typography>

                            <FormControl className='py-10 space-y-5' component={"fieldset"}>
                                <RadioGroup
                                    onChange={handleFilter}
                                    name='food_type'
                                    value={selectedCategory}>
                                    {category.map(item =>
                                        <FormControlLabel
                                            key={item.id}
                                            value={item.id}
                                            label={item.name}
                                            control={<Radio />}
                                        />)}
                                </RadioGroup>
                            </FormControl>
                        </div>
                    </div>
                </div>
                <div className='space-y-5 lg:w-[80%] lg:pl-10'>
                    {foods.map((item) => <MenuCard key={item.id} item={item} />)}
                </div>
            </section>
        </div>
    )
}

export default RestaurantDetails