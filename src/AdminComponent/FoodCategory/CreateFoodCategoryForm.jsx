import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createFoodCategory } from '../../component/State/FoodCategory/Actions';
import { useNavigate } from 'react-router-dom';

const CreateFoodCategoryForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ categoryName: "", categoryDescription: "" })
    const jwt = localStorage.getItem("jwt")

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            name: formData.categoryName,
            description: formData.categoryDescription
        }
        dispatch(createFoodCategory({ foodCategoryData: data, jwt: jwt }))
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
                    Create Category
                </h1>
                <form
                    className='space-y-4'
                    onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        id='categoryName'
                        name='categoryName'
                        label='Category Name'
                        variant='outlined'
                        onChange={handleInputChange}
                        value={formData.categoryName}
                    >
                    </TextField>
                    <TextField
                        fullWidth
                        id='categoryDescription'
                        name='categoryDescription'
                        label='Description'
                        variant='outlined'
                        multiline
                        rows={4}
                        onChange={handleInputChange}
                        value={formData.categoryDescription}
                    />
                    <Button
                        variant='contained'
                        color='primary'
                        type='submit'
                    >
                        Submit
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default CreateFoodCategoryForm