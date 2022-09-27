import React, { useState } from 'react'
import { Drawer, Fab, Tooltip } from '@material-ui/core'
import { Add as AddIcon } from '@material-ui/icons'

import { useStyles } from './RecipeDrawer.style'

const RecipeDrawer = () => {
  const [openRecipeDrawer, setOpenRecipeDrawer] = useState(false)
  const classes = useStyles()

  return (
    <>
      <Tooltip title='Añadir receta' aria-label='Añadir receta' placement='left' arrow>
        <Fab color='info' aria-label='Añadir receta' className={classes.addButton}>
          <AddIcon />
        </Fab>
      </Tooltip>
      <Drawer open={openRecipeDrawer} onClose={() => setOpenRecipeDrawer(false)}></Drawer>
    </>
  )
}

export default RecipeDrawer
