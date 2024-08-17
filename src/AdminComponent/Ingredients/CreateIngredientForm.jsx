import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useState } from 'react'

const CreateIngredientForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        ingredientCategoryId: ""
    })
    const handleSubmit = () => {
        const data = {
            name: formData.name,
            ingredientCategoryId: {
                id: formData.ingredientCategoryId,
            }
        }
        console.log(data);
    }
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData, [name]: value
        })
    }
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
                        <InputLabel id="demo-simple-select-label">Category</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            name="ingredientCategoryId"
                            value={formData.ingredientCategoryId}
                            label="Ingredient Category"
                            onChange={handleInputChange}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
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