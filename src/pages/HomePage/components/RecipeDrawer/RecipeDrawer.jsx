import React, { useState } from 'react'
import { Drawer, Fab, IconButton, Tooltip } from '@material-ui/core'
import { Add as AddIcon, Close as CloseIcon } from '@material-ui/icons'
import { RecipeForm } from 'shared'

import { useStyles } from './RecipeDrawer.style'

const RecipeDrawer = () => {
  const [openRecipeDrawer, setOpenRecipeDrawer] = useState(false)
  const classes = useStyles()

  const buttonClose = () => (
    <IconButton size='medium' onClick={() => setOpenRecipeDrawer(false)}>
      <CloseIcon />
    </IconButton>
  )

  return (
    <>
      <Tooltip title='Añadir receta' aria-label='Añadir receta' placement='left' arrow>
        <Fab
          color='primary'
          aria-label='Añadir receta'
          className={classes.addButton}
          onClick={() => setOpenRecipeDrawer(true)}>
          <AddIcon />
        </Fab>
      </Tooltip>
      <Drawer anchor='right' open={openRecipeDrawer} onClose={() => setOpenRecipeDrawer(false)}>
        <div className={classes.drawerContainer}>
          <div className={classes.drawer}>
            <RecipeForm buttonClose={buttonClose} />
          </div>
        </div>
      </Drawer>
    </>
  )
}

export default RecipeDrawer
