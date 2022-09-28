import React from 'react'
import { Typography } from '@material-ui/core'

import { RecipentList } from '../RecipeList'
import { SearchWidget } from '../SearchWidget'

import useStyles from './RecipeBoard.style'

const RecipeBoard = () => {
  const classes = useStyles()

  return (
    <div className={classes.recipeContainer}>
      <Typography variant='h2' className={classes.recipeTitle}>
        Recetas de Cocina
      </Typography>

      <SearchWidget />

      <RecipentList />
    </div>
  )
}

export default RecipeBoard
