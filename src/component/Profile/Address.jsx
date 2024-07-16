import React from 'react'
import { useSelector } from 'react-redux'
import AddressCard from '../Cart/AddressCard'

const Address = () => {
    const user = useSelector((state) => state.auth.user)
    console.log("order:", user);
    return (
        <div>
            <h1 className='py-5 text-xl font-semibold text-center'>My Favorites</h1>

            <div className='flex flex-wrap justify-center gap-3'>
                {
                    user.addresses.map((item) => <AddressCard item={item} showButton={true}/>)
                }
            </div>
        </div>


    )
}

export default Address