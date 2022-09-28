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
      <table className={classes.recipeTable}>
        <thead>
          <tr>
            <th>
              <label>Nombre de la receta</label>
            </th>
            <th>
              <label>Reseñas</label>
            </th>
            <th>
              <label>Cocinado antes</label>
            </th>
          </tr>
        </thead>
        <tbody>
          <RecipentList />
        </tbody>
      </table>
    </div>
  )
}

export default RecipeBoard
