import React, { useState } from 'react'
import {
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography
} from '@material-ui/core'
import { MultiField } from 'pages/HomePage/components/MultiField'

import { StyledSwitch } from '../StyledSwitch'

import useStyles from './RecipeForm.style'

const RecipeForm = ({ buttonClose: ButtonClose }) => {
  const classes = useStyles()

  const [value, setValue] = useState('female')

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  return (
    <div className={classes.container}>
      <div className={classes.headerContainer}>
        <Typography variant='h3' className={classes.formTitle}>
          Nueva Receta
        </Typography>
        <ButtonClose />
      </div>
      <form>
        <div className={classes.formGroup}>
          <Typography>Nombre de la receta</Typography>
          <TextField variant='outlined' color='primary' className={classes.textField} fullWidth />
        </div>
        <div className={classes.formGroup}>
          <Typography>Ingredientes</Typography>
          <MultiField />
        </div>
        <div className={classes.formGroup}>
          <Typography>Preparación</Typography>
          <TextField
            multiline
            variant='outlined'
            color='primary'
            fullWidth
            rows={9}
            className={classes.textField}
          />
        </div>
        <div className={classes.formGroup}>
          <Typography>Reseña</Typography>
          <RadioGroup aria-label='gender' name='gender1' value={value} onChange={handleChange} row>
            <FormControlLabel value='1' control={<Radio color='primary' />} label='1' />
            <FormControlLabel value='2' control={<Radio color='primary' />} label='2' />
            <FormControlLabel value='3' control={<Radio color='primary' />} label='3' />
            <FormControlLabel value='4' control={<Radio color='primary' />} label='4' />
          </RadioGroup>
        </div>
        <div className={classes.formGroup}>
          <Typography>Cocinado antes</Typography>
          <StyledSwitch
            // checked={el.beforeCock}
            className={classes.switch}
            // onChange={handleBeforeCookChange(index)}
            name='beforeCock'
          />
        </div>
        <div className={classes.actionButtonContainer}>
          <Button color='primary' variant='contained' className={classes.createButton}>
            Crear
          </Button>
        </div>
      </form>
    </div>
  )
}

export default RecipeForm
