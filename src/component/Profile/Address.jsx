import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AddressCard from '../Cart/AddressCard'
import { addFavoriteAddress } from '../State/Authentication/Action'

const Address = () => {
    const user = useSelector((state) => state.auth.user)
    const dispatch = useDispatch();
    const jwt = localStorage.getItem("jwt");
    const [selectedAddress, setSelectedAddress] = useState(user.address);

    const handleSelectAddress = (address) => {
        setSelectedAddress(address);
        dispatch(addFavoriteAddress({ addressId: address.id, jwt: jwt }))
    };

    return (
        <div>
            <h1 className='py-5 text-xl font-semibold text-center'>My Addresses</h1>

            <div className='flex flex-wrap justify-center gap-3'>
                {
                    user.addresses.map((item) =>
                        <AddressCard
                            key={item.id}
                            item={item}
                            showButton={true}
                            handleSelectAddress={handleSelectAddress}
                            selectedAddress={selectedAddress}
                        />
                    )
                }
            </div>
        </div>


    )
}

export default Address