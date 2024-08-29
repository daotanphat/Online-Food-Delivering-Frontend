import { AddPhotoAlternate, Close } from '@mui/icons-material';
import { Box, Button, Chip, CircularProgress, FormControl, Grid, IconButton, InputLabel, MenuItem, OutlinedInput, Select, TextField } from '@mui/material';
import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import { uploadImageToCloudinary } from '../Utils/UpLoadToCloudinary';
import { useDispatch, useSelector } from 'react-redux';
import { createFood } from '../../component/State/Food/Actions';
import { getFoodCategoryByRestaurantId } from '../../component/State/FoodCategory/Actions';
import { getIngredientItemsByRestaurant } from '../../component/State/IngredientItem/Actions';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const initialValues = {
    name: '',
    description: '',
    price: '',
    category: '',
    restaurantId: '',
    vegetarian: true,
    seasonal: false,
    ingredients: [],
    images: []
}
const CreateMenuForm = () => {
    const [uploadImage, setUploadImage] = useState(false);
    const dispatch = useDispatch();
    const jwt = localStorage.getItem("jwt");
    const restaurantId = useSelector(state => state.restaurant.restaurant.id);
    const restaurant = useSelector(state => state.restaurant.restaurant);
    const formik = useFormik({
        initialValues,
        onSubmit: (values) => {
            values.restaurantId = 2
            console.log(values);
            dispatch(createFood({ requestData: values, jwt: jwt }))
        }
    });
    const handleImageChange = async (event) => {
        const file = event.target.files[0];
        setUploadImage(true)
        const image = await uploadImageToCloudinary(file)
        formik.setFieldValue("images", [...formik.values.images, image])
        setUploadImage(false)
    }
    const handleRemoveImage = (index) => {
        const updatedImage = [...formik.values.images]
        updatedImage.splice(index, 1)
        formik.setFieldValue("images", updatedImage)
    }
    useEffect(() => {
        dispatch(getIngredientItemsByRestaurant({ restaurantId: restaurantId, jwt: jwt }))
    }, [restaurant])
    const ingredients = useSelector(state => state.ingredientItem.ingredientItems)






    return (
        <div className='py-10 px-5 lg:flex items-center justify-center min-h-screen'>
            <div className='lg:max-w-4xl'>
                <h1 className='font-bold text-2xl text-center py-2'>
                    Add New Menu
                </h1>
                <form
                    onSubmit={formik.handleSubmit}
                    className='space-y-4'
                >
                    <Grid container spacing={2}>
                        <Grid className='flex flex-wrap gap-5' item xs={12}>
                            <input
                                accept='image'
                                id='fileInput'
                                style={{ display: 'none' }}
                                onChange={handleImageChange}
                                type='file' />

                            <label
                                className='relative'
                                htmlFor='fileInput'>
                                <span className='w-24 h-24 cursor-pointer flex items-center justify-center border rounded-md border-gray-600'>
                                    <AddPhotoAlternate className='text-white' />
                                    {
                                        uploadImage &&
                                        <div className='absolute left-0 right-0 top-0 bottom-0 w-24 h-24 flex justify-center items-center'>
                                            <CircularProgress />
                                        </div>
                                    }
                                </span>
                            </label>
                            <div className='flex flex-wrap gap-2'>
                                {
                                    formik.values.images.map((image, index) =>
                                        <div className='relative'>
                                            <img
                                                className='w-24 h-24 object-cover'
                                                key={index}
                                                src={image}
                                                alt='' />
                                            <IconButton
                                                size='small'
                                                sx={{
                                                    position: 'absolute',
                                                    top: 0,
                                                    right: 0,
                                                    outline: 'none'
                                                }
                                                }
                                                onClick={() => handleRemoveImage(index)}>
                                                <Close sx={{ fontSize: '1rem' }} />
                                            </IconButton>
                                        </div>)
                                }
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                id='name'
                                name='name'
                                label='Name'
                                variant='outlined'
                                onChange={formik.handleChange}
                                value={formik.values.name}
                            >
                            </TextField>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                id='description'
                                name='description'
                                label='Description'
                                variant='outlined'
                                onChange={formik.handleChange}
                                value={formik.values.description}
                            >
                            </TextField>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <TextField
                                fullWidth
                                id='price'
                                name='price'
                                label='Price'
                                variant='outlined'
                                onChange={formik.handleChange}
                                value={formik.values.price}
                            >
                            </TextField>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    name="category"
                                    value={formik.values.category}
                                    label="Category"
                                    onChange={formik.handleChange}
                                >
                                    {restaurant.categories.map((category) => <MenuItem value={category.id}>{category.name}</MenuItem>)}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-multiple-chip-label">Ingredients</InputLabel>
                                <Select
                                    labelId="demo-multiple-chip-label"
                                    id="demo-multiple-chip"
                                    name="ingredients"
                                    multiple
                                    value={formik.values.ingredients}
                                    onChange={formik.handleChange}
                                    input={<OutlinedInput id="select-multiple-chip" label="Ingredients" />}
                                    renderValue={(selected) => (
                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                            {selected.map((value) => (
                                                <Chip key={value} label={value} />
                                            ))}
                                        </Box>
                                    )}
                                    MenuProps={MenuProps}
                                >
                                    {ingredients.map((ingredient, index) => (
                                        <MenuItem
                                            key={index}
                                            value={ingredient.id}
                                        >
                                            {ingredient.name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Vegetarian</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    name="vegetarian"
                                    value={formik.values.vegetarian}
                                    label="Is Vegetarian"
                                    onChange={formik.handleChange}
                                >
                                    <MenuItem value={true}>Yes</MenuItem>
                                    <MenuItem value={false}>No</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Seasonal</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    name="seasonal"
                                    value={formik.values.seasonal}
                                    label="Is Seasonal"
                                    onChange={formik.handleChange}
                                >
                                    <MenuItem value={true}>Yes</MenuItem>
                                    <MenuItem value={false}>No</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Button
                        variant='contained'
                        color='primary'
                        type='submit'
                    >
                        Create
                    </Button>
                </form>
            </div>

        </div>
    )
}

export default CreateMenuForm