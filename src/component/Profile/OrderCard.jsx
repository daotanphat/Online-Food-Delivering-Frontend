import { Button, Card } from '@mui/material'
import React from 'react'

const OrderCard = () => {
    return (
        <Card className='flex justify-between items-center p-5'>
            <div className='flex items-center space-x-5'>
                <img
                    className='h-16 w-16'
                    src='https://th.bing.com/th/id/OIP._Tuj6ElUF8jhhcSg41_V_QHaE8?rs=1&pid=ImgDetMain'
                    alt=''
                />
                <div>
                    <p>Pizza</p>
                    <p>60$</p>
                </div>
            </div>
            <div>
                <Button disabled className='cursor-not-allowed'>Completed</Button>
            </div>
        </Card>
    )
}

export default OrderCard