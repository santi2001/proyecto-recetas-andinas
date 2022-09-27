import React from 'react'
import { Typography } from '@material-ui/core'
import { recipents } from 'utils/data/recipents'

import { ScoreStar } from '../ScoreStar'
import { SearchWidget } from '../SearchWidget'

import useStyles, { StyledSwitch } from './RecipeBoard.style'

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
          {recipents.map((el, index) => (
            <tr key={index}>
              <td>
                <Typography className={classes.recipeName}>{el.name}</Typography>
              </td>
              <td>
                <ScoreStar score={el.score} />
              </td>
              <td>
                <StyledSwitch
                  checked={el.beforeCock}
                  className={classes.switch}
                  // onChange={handleChange}
                  name='beforeCock'
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default RecipeBoard
