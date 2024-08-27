import React from 'react'
import IngredientsTable from './IngredientsTable'
import IngredientsCategoryTable from './IngredientsCategoryTable'
import { Grid } from '@mui/material'

const Ingredients = ({ restaurant }) => {
  return (
    <div className='px-2'>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={8}>
          <IngredientsTable restaurant={restaurant} />
        </Grid>
        <Grid item xs={12} lg={4}>
          <IngredientsCategoryTable restaurant={restaurant} />
        </Grid>
      </Grid>
    </div>
  )
}

export default Ingredients