import { Divider, FormControl, FormControlLabel, Grid, Radio, RadioGroup, Typography } from '@mui/material'
import React, { useState } from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DateRangeIcon from '@mui/icons-material/DateRange';
import MenuCard from './MenuCard';

const categories = [
    "pizza",
    "biriany",
    "burger",
    "chicken",
    "rice"
]

const foodTypes = [
    { label: "All", value: "all" },
    { label: "Vegeterian only", value: "vegeterian" },
    { label: "Non-vegeterian", value: "non_vegeterian" },
    { label: "Seasonal", value: "seasonal" }
]
const menu = [1, 1, 1, 1, 1, 1]
const RestaurantDetails = () => {
    const [foodType, setFoodType] = useState("all")
    const handleFilter = (e) => {
        console.log(e.target.value, e.target.name);
    }

    return (
        <div className='px-5 lg:px-20 pb-10'>
            <section>
                <h3 className='text-gray-500 py-2 mt-10'>Home/India/Indian fast food/3</h3>
                <div>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <img className='w-full h-[40vh] object-cover'
                                src='https://cdn.pixabay.com/photo/2022/11/14/10/37/chinese-lanterns-7591296_1280.jpg'
                                alt='' />
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <img className='w-full h-[40vh] object-cover'
                                src='https://cdn.pixabay.com/photo/2016/11/18/14/05/brick-wall-1834784_1280.jpg'
                                alt='' />
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <img className='w-full h-[40vh] object-cover'
                                src='https://cdn.pixabay.com/photo/2015/06/30/18/36/st-826688_1280.jpg'
                                alt='' />
                        </Grid>
                    </Grid>
                </div>
                <div className='pt-3 pb-5'>
                    <h1 className='text-4xl font-semibold'>Indian fast food</h1>
                    <p className='text-gray-500 mt-5'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Officia at, fugit nostrum odio veniam necessitatibus aliquid doloremque,
                        asperiores quod et corrupti aperiam architecto!
                        Eaque dolor sapiente impedit odio tempore molestias?
                    </p>

                    <div className='space-y-3 mt-3'>
                        <p className='text-gray-500 flex items-center gap-3'>
                            <span>
                                <LocationOnIcon /> Mumbai, India
                            </span>
                        </p>
                        <p className='text-gray-500 flex items-center gap-3'>
                            <span>
                                <DateRangeIcon /> Mon-Sun: 9:00 AM - 9:00 PM (Today)
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
                                            key={f.value}
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
                                <RadioGroup onChange={handleFilter} name='food_type' value={foodType}>
                                    {categories.map(item =>
                                        <FormControlLabel
                                            key={item}
                                            value={item}
                                            label={item}
                                            control={<Radio />}
                                        />)}
                                </RadioGroup>
                            </FormControl>
                        </div>
                    </div>
                </div>
                <div className='space-y-5 lg:w-[80%] lg:pl-10'>
                    {menu.map(item => <MenuCard />)}
                </div>
            </section>
        </div>
    )
}

export default RestaurantDetails