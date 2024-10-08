import { Button, TextField } from '@mui/material';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createIngredientCategoryByRestaurant } from '../../component/State/IngredientItem/Actions';

const CreateIngredientCategoryForm = () => {
    const dispatch = useDispatch();
    const jwt = localStorage.getItem("jwt");
    const [formData, setFormData] = useState({
        name: ""
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createIngredientCategoryByRestaurant({ requestData: formData, jwt: jwt }))
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
                    Create Ingredient Category
                </h1>
                <form
                    className='space-y-4'
                    onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        id='name'
                        name='name'
                        label='Category Name'
                        variant='outlined'
                        onChange={handleInputChange}
                        value={formData.name}
                    >
                    </TextField>
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

export default CreateIngredientCategoryForm