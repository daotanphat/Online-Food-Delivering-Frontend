import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createIngredientByRestaurant } from '../../component/State/IngredientItem/Actions';

const CreateIngredientForm = () => {
    const dispatch = useDispatch();
    const jwt = localStorage.getItem("jwt");
    const [formData, setFormData] = useState({
        name: "",
        ingredientCategoryId: ""
    })
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            name: formData.name,
            categoryId: formData.ingredientCategoryId
        }
        dispatch(createIngredientByRestaurant({ requestData: data, jwt: jwt }))
    }
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData, [name]: value
        })
    }

    const categories = useSelector(state => state.ingredientItem.ingredientCategories)

    return (
        <div className=''>
            <div className='p-5'>
                <h1 className='text-gray-400 text-center text-xl pb-10'>
                    Create Ingredient
                </h1>
                <form
                    className='space-y-4'
                    onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        id='name'
                        name='name'
                        label='Ingredient Name'
                        variant='outlined'
                        onChange={handleInputChange}
                        value={formData.name}
                    >
                    </TextField>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Ingredient Category</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            name="ingredientCategoryId"
                            value={formData.ingredientCategoryId}
                            label="Ingredient Category"
                            onChange={handleInputChange}
                        >
                            {categories.map(category => <MenuItem value={category.id}>{category.name}</MenuItem>)}
                        </Select>
                    </FormControl>
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

export default CreateIngredientForm