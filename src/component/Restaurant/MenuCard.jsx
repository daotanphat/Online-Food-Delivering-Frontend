import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button, Checkbox, FormControlLabel, FormGroup } from '@mui/material';

const ingredients = [
  {
    category: "Nut & Seeds",
    item: ["Cashews"]
  },
  {
    category: "Protein",
    item: [
      "Ground beef",
      "Bacon strips"
    ]
  },
  {
    category: "Bread",
    item: ["Hamburger buns"]
  },

]

const MenuCard = () => {
  const handleCheckboxChange = (value) => {
    console.log(value);
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
                src='https://cdn.pixabay.com/photo/2014/10/19/20/59/hamburger-494706_1280.jpg'
                alt=''
              />
              <div className='space-y-1 lg:space-y-5 lg:max-w-2xl'>
                <p className='font-semibold text-xl'>Burger</p>
                <p>100$</p>
                <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <form>
            <div className='flex gap-5 flex-wrap'>
              {
                ingredients.map((item) =>
                  <div>
                    <p>{item.category}</p>
                    <FormGroup>
                      {item.item.map(item =>
                        <FormControlLabel
                          control={<Checkbox onChange={() => handleCheckboxChange(item)} />}
                          label={item}
                        />)
                      }
                    </FormGroup>
                  </div>)
              }
            </div>
            <div className='pt-5'>
              <Button type='submit' variant='contained' disabled={false}>{true ? "Add to cart" : "Out of stock"}</Button>
            </div>
          </form>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default MenuCard