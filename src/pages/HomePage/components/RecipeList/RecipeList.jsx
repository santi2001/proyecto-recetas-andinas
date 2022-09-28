import React, { useContext, useEffect } from 'react'
import { Typography } from '@material-ui/core'
import { RecipentsContext } from 'context'
import { StyledSwitch } from 'shared'

import { ScoreStar } from '../ScoreStar'

import { useStyles } from './RecipeList.style'

const RecipeList = () => {
  const classes = useStyles()
  const {
    viewRecipents,
    updateRecipent,
    setViewRecipents,
    recipents,
    searchParams,
    loadRecipents
  } = useContext(RecipentsContext)

  useEffect(() => {
    setViewRecipents(loadRecipents(searchParams))
  }, [recipents, searchParams])

  const handleBeforeCookChange = (recipent) => (e) => {
    const recipentSelected = {
      ...recipent,
      beforeCook: e.target.checked
    }

    updateRecipent(recipentSelected)
  }

  return (
    <>
      {viewRecipents.map((el, index) => (
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
    </>
  )
}

export default RecipeList
