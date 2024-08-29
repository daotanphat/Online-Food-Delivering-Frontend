import { Divider, FormControl, FormControlLabel, Grid, Radio, RadioGroup, Typography } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DateRangeIcon from '@mui/icons-material/DateRange';
import MenuCard from './MenuCard';
import { useDispatch, useSelector } from 'react-redux';
import { getRestaurantById } from '../State/Restaurant/Actions';
import { useParams } from 'react-router-dom';
import { getFoodCategoryByRestaurantId } from '../State/FoodCategory/Actions';
import { getFoodByRestaurant, getFoodByRestaurantAndFilter } from '../State/Food/Actions';

// const foodTypes = [
//     { id: 1, label: "All", value: "all" },
//     { id: 2, label: "Vegeterian", value: "vegeterian" },
//     { id: 3, label: "Seasonal", value: "seasonal" }
// ]
const RestaurantDetails = () => {
    const restaurant = useSelector((state) => state.restaurant.restaurant);
    const foods = useSelector((state) => state.food.foods);
    const error = useSelector(state => state.food.error)

    const dispatch = useDispatch()
    const jwt = localStorage.getItem("jwt")
    const { id } = useParams()

    const [selectedCategory, setSelectedCategory] = useState("-1")
    const handleFilter = (e) => {
        setSelectedCategory(e.target.value);
    };

    useEffect(() => {
        dispatch(getRestaurantById({ id: id, jwt: jwt }));
    }, [])

    useEffect(() => {
        dispatch(getFoodByRestaurantAndFilter({ restaurantId: id, jwt: jwt, categoryId: selectedCategory }))
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
                        {/* <div>
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
                        <Divider /> */}
                        {restaurant.categories && <div>
                            <Typography variant='h5' sx={{ paddingBottom: "1rem" }}>
                                Food Category
                            </Typography>

                            <FormControl className='py-10 space-y-5' component={"fieldset"}>
                                <RadioGroup
                                    onChange={handleFilter}
                                    name='food_type'
                                    value={selectedCategory}>
                                    <FormControlLabel
                                        value={-1}  // Use -1 or a suitable value to represent "All"
                                        label="All"
                                        control={<Radio />}
                                    />
                                    {restaurant.categories.map(item =>
                                        <FormControlLabel
                                            key={item.id}
                                            value={item.id}
                                            label={item.name}
                                            control={<Radio />}
                                        />)}
                                </RadioGroup>
                            </FormControl>
                        </div>}
                    </div>
                </div>
                <div className='space-y-5 lg:w-[80%] lg:pl-10'>
                    {error ?
                        <div>{error}</div>
                        :
                        foods.map((item) => <MenuCard key={item.id} item={item} />)}
                </div>
            </section>
        </div>
    )
}

export default RestaurantDetails