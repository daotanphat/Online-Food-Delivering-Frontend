import { Card, Chip, IconButton } from '@mui/material'
import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const RestauantCard = () => {
    return (
        <Card className='w-[18rem]'>
            <div className={`${true ? 'cursor-pointer' : 'cursor-not-allowed'} relative`}>
                <img className='w-full h-[10rem] rounded-t-md object-cover'
                    src='https://media.istockphoto.com/id/1079901206/vi/anh/k%E1%BA%BFt-xu%E1%BA%A5t-3d-n%E1%BB%99i-th%E1%BA%A5t-nh%C3%A0-h%C3%A0ng-sang-tr%E1%BB%8Dng.jpg?s=1024x1024&w=is&k=20&c=kDf6_rg8yVxMbcB9EXiL1ZFt-nXV4IVsL8pRD_vCRSA='
                    alt='' />
                <Chip
                    size='small'
                    className='absolute top-2 left-2'
                    color={true ? 'success' : 'error'}
                    label={true ? 'Open' : 'Closed'} />
            </div>
            <div className='p-4 textPart lg:flex w-full justify-between'>
                <div className='space-y-1'>
                    <p className='font-semibold text-lg'>Vietnam fast food</p>
                    <p className='text-gray-500 text-sm'>Description about restaurant</p>
                </div>
                <div>
                    <IconButton>
                        {true ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                    </IconButton>
                </div>

            </div>
        </Card>
    )
}

export default RestauantCard