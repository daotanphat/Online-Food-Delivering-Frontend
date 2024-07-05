import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

const EventCard = () => {
    return (
        <div>
            <Card sx={{ width: 345 }}>
                <CardMedia
                    sx={{ height: 345 }}
                    image='https://cdn.pixabay.com/photo/2023/11/01/11/24/path-8357201_1280.jpg'
                >
                    <CardContent>
                        <Typography variant='h5'>
                            Indian fast food
                        </Typography>
                        <Typography variant='body2'>
                            50% off on your first Order
                        </Typography>
                        <div className='py-2 space-y-2'>
                            <p>Mumbai</p>
                            <p className='text-sm text-blue-500'>July 5, 2024, 12:00 AM</p>
                            <p className='text-sm text-red-500'>July 5, 2024, 12:00 AM</p>
                        </div>
                    </CardContent>
                    {false && <CardActions>
                        <IconButton>
                            <DeleteIcon />
                        </IconButton>
                    </CardActions>}
                </CardMedia>
            </Card>
        </div>
    )
}

export default EventCard