import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material'
import { Button, Card, CardContent, CardHeader, Grid, Icon } from '@mui/material'
import React from 'react'

const RestaurantDetails = () => {
  const handleResturantStatus = () => {

  }
  return (
    <div className='lg:px-20 px-5 pb-10'>
      <div className='py-5  flex justify-center items-center gap-5'>
        <h1 className='text-2xl lg:text-7xl text-center font-bold p-5'>Indian Fast Food</h1>
        <div>
          <Button
            color={true ? "primary" : "error"}
            className='py-[1rem] px-[2rem]'
            onClick={handleResturantStatus}
            size='large'
            variant='contained'>
            {true ? "close" : "open"}
          </Button>
        </div>
      </div>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card>
            <CardHeader title={<span className='text-gray-300'>Restaurant</span>} />
            <CardContent>
              <div className='space-y-4 text-gray-200'>
                <div className='flex'>
                  <p className='w-48'>Owner</p>
                  <p className='text-gray-400'>
                    <span className='pr-5'>-</span>
                    Code with Phat
                  </p>
                </div>
                <div className='flex'>
                  <p className='w-48'>Restaurant Name</p>
                  <p className='text-gray-400'>
                    <span className='pr-5'>-</span>
                    Code with Phat
                  </p>
                </div>
                <div className='flex'>
                  <p className='w-48'>Cuisine Type</p>
                  <p className='text-gray-400'>
                    <span className='pr-5'>-</span>
                    Code with Phat
                  </p>
                </div>
                <div className='flex'>
                  <p className='w-48'>Opening Hours</p>
                  <p className='text-gray-400'>
                    <span className='pr-5'>-</span>
                    Code with Phat
                  </p>
                </div>
                <div className='flex'>
                  <p className='w-48'>Status</p>
                  <p className='text-gray-400'>
                    <span className='pr-5'>-</span>
                    {true ?
                      <span className='px-5 py-2 rounded-full bg-green-400 text-gray-950'>
                        Open
                      </span>
                      :
                      <span className='px-5 py-2 rounded-full bg-red-400 text-gray-950'> :
                        Close
                      </span>}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} lg={5}>
          <Card>
            <CardHeader title={<span className='text-gray-300'>Address</span>} />
            <CardContent>
              <div className='space-y-4 text-gray-200'>
                <div className='flex'>
                  <p className='w-48'>Country</p>
                  <p className='text-gray-400'>
                    <span className='pr-5'>-</span>
                    Vietnam
                  </p>
                </div>
                <div className='flex'>
                  <p className='w-48'>City</p>
                  <p className='text-gray-400'>
                    <span className='pr-5'>-</span>
                    Hanoi
                  </p>
                </div>
                <div className='flex'>
                  <p className='w-48'>Postal Code</p>
                  <p className='text-gray-400'>
                    <span className='pr-5'>-</span>
                    +84
                  </p>
                </div>
                <div className='flex'>
                  <p className='w-48'>Street Address</p>
                  <p className='text-gray-400'>
                    <span className='pr-5'>-</span>
                    Steet 1
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} lg={7}>
          <Card>
            <CardHeader title={<span className='text-gray-300'>Address</span>} />
            <CardContent>
              <div className='space-y-4 text-gray-200'>
                <div className='flex'>
                  <p className='w-48'>Contact</p>
                  <p className='text-gray-400'>
                    <span className='pr-5'>-</span>
                    daotanphat2143@gmail.com
                  </p>
                </div>
                <div className='flex'>
                  <p className='w-48'>City</p>
                  <p className='text-gray-400'>
                    <span className='pr-5'>-</span>
                    +84 335 738 382
                  </p>
                </div>
                <div className='flex'>
                  <p className='w-48'>Social</p>
                  <div className='flex text-gray-400 items-center pb-4 gap-2'>
                    <span className='pr-5'>-</span>
                    <a href='/' >
                      <Instagram sx={{ fontSize: "3rem" }} />
                    </a>
                    <a href='/' >
                      <Twitter sx={{ fontSize: "3rem" }} />
                    </a>
                    <a href='/' >
                      <LinkedIn sx={{ fontSize: "3rem" }} />
                    </a>
                    <a href='/' >
                      <Facebook sx={{ fontSize: "3rem" }} />
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}

export default RestaurantDetails