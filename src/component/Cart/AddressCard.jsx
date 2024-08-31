import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import { Button, Card } from '@mui/material';

const AddressCard = ({ item, showButton, handleSelectAddress, selectedAddress }) => {
  return (
    <div className='m-5 flex w-full p-5 border rounded-md'>
      <div className='flex flex-col items-center gap-3'>
        <HomeIcon />
        {showButton && (
          <input
            type="radio"
            name="favoriteAddress"
            checked={selectedAddress?.id === item.id}
            onChange={() => handleSelectAddress(item)}
          />
        )}
      </div>
      <div className='flex-grow space-y-3 text-gray-500 ml-5'>
        <h1 className='font-semibold text-lg text-white'>Address</h1>
        <p>{item.streetAddress}, {item.stateProvince}, {item.city}, {item.country}</p>
      </div>
    </div>
  );
}

export default AddressCard