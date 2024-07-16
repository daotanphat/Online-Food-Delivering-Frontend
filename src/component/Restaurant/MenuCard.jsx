import React, { useEffect, useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button, Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import { categorizeIngredients } from "../Utils/CategorizeIngredients"
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../State/Cart/Actions';

const MenuCard = React.memo(({ item }) => {
  const [selectedIngredients, setSelectedIngredients] = useState([])
  const dispatch = useDispatch()
  const jwt = localStorage.getItem("jwt")

  const handleCheckboxChange = (itemName) => {
    if (selectedIngredients.includes(itemName)) {
      setSelectedIngredients(selectedIngredients.filter((item) => item !== itemName))
    } else {
      setSelectedIngredients([...selectedIngredients, itemName])
    }
    console.log(selectedIngredients);
  }

  const handleAddItemToCart = (e) => {
    e.preventDefault()
    const requestData = {
        foodId: item.id,
        quantity: 1,
        ingredients: selectedIngredients
    }
    dispatch(addItemToCart({ requestCartItem: requestData, jwt }))
    console.log("checkbox: ", requestData);
  }

  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <div className='lg:flex items-center justify-between'>
            <div className='lg:flex items-center lg:gap-5'>
              <img
                className='w-[7rem] h-[7rem] object-cover'
                src={item.images[0]}
                alt=''
              />
              <div className='space-y-1 lg:space-y-5 lg:max-w-2xl'>
                <p className='font-semibold text-xl'>{item.name}</p>
                <p>{item.price}</p>
                <p className='text-gray-400'>{item.description}</p>
              </div>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <form onSubmit={handleAddItemToCart}>
            {item.ingredients &&
              <div className='flex gap-5 flex-wrap'>
                {
                  Object.keys(categorizeIngredients(item.ingredients)).map((categoryName, index) =>
                    <div key={index}>
                      <p>{categoryName}</p>
                      <FormGroup>
                        {categorizeIngredients(item.ingredients)[categoryName].map((item, idx) =>
                          <FormControlLabel
                            key={idx}
                            control={<Checkbox
                              onChange={() => handleCheckboxChange(item.name)}
                            />}
                            label={item.name}
                          />)
                        }
                      </FormGroup>
                    </div>)
                }
              </div>
            }
            <div className='pt-5'>
              <Button
                type='submit'
                variant='contained'
                disabled={false}>
                {true ? "Add to cart" : "Out of stock"}
              </Button>
            </div>
          </form>
        </AccordionDetails>
      </Accordion>
    </div>
  )
})

export default MenuCard
