import React, { useContext, useEffect } from 'react'
import { Typography } from '@material-ui/core'
import { RecipesContext } from 'context'
import { StyledSwitch } from 'shared'

import { ScoreStar } from '../ScoreStar'

import { useStyles } from './RecipeList.style'

const RecipeList = () => {
  const classes = useStyles()
  const { viewRecipes, updateRecipe, setViewRecipes, recipes, searchParams, loadRecipes } =
    useContext(RecipesContext)

  // Mantiene actualizado el listado de recetas con los filtros y/o busqueda aplicados
  useEffect(() => {
    setViewRecipes(loadRecipes(searchParams))
  }, [recipes, searchParams])

  // Maneja la actualizacion del switch 'Cocinado antes'
  const handleBeforeCookChange = (recipe) => (e) => {
    const recipeSelected = {
      ...recipe,
      beforeCook: e.target.checked
    }

    updateRecipe(recipeSelected)
  }

  return (
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
        {viewRecipes.map((el, index) => (
          <tr key={index}>
            <td>
              <Typography className={classes.recipeName}>{el.name}</Typography>
            </td>
            <td>
              <ScoreStar score={el.score} />
            </td>
            <td>
              <StyledSwitch
                checked={el.beforeCook}
                className={classes.switch}
                onChange={handleBeforeCookChange(el)}
                name='beforeCook'
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default RecipeList
