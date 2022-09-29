import React, { useState } from 'react'
import { IconButton, TextField, Typography } from '@material-ui/core'
import {
  Add as AddIcon,
  DeleteOutlineOutlined as DeleteOutlineOutlinedIcon
} from '@material-ui/icons'
import clsx from 'clsx'

import { useStyles } from './MultiField.style'

const MultiField = () => {
  const [fieldList, setFieldList] = useState([{ value: '' }])
  const classes = useStyles()

  const addField = () => {
    const newField = { value: '' }

    setFieldList([...fieldList, newField])
  }

  const removeField = (el) => () => {
    const fieldListFilter = fieldList.filter((__, index) => index !== el)

    setFieldList(fieldListFilter)
  }

  // Permite actualizar los campos de textos
  const handleChange = (index) => (e) => {
    const fieldSelected = fieldList[index]

    fieldList[index] = {
      ...fieldSelected,
      [e.target.name]: e.target.value
    }

    setFieldList([...fieldList])
  }

  return (
    <div className={classes.container}>
      {fieldList.map((field, index) => (
        <div key={index} className={classes.fieldContainer}>
          <Typography className={classes.fieldNumber} variant='caption'>
            {index + 1}
          </Typography>
          <TextField
            color='primary'
            variant='outlined'
            fullWidth
            name='value'
            value={field.value}
            onChange={handleChange(index)}
            size='small'
            autoComplete='off'
            className={classes.textField}
            placeholder='Tipo de ingrediente'
          />
          {index + 1 === fieldList.length ? (
            <IconButton
              className={clsx(classes.button, classes.addButton)}
              size='small'
              onClick={addField}>
              <AddIcon />
            </IconButton>
          ) : (
            <IconButton
              color='secondary'
              size='small'
              className={classes.button}
              onClick={removeField(index)}>
              <DeleteOutlineOutlinedIcon />
            </IconButton>
          )}
        </div>
      ))}
    </div>
  )
}

export default MultiField
