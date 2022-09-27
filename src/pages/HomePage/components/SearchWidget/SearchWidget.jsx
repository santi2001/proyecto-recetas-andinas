import React from 'react'
import { InputAdornment, TextField } from '@material-ui/core'
import { Search as SearchIcon } from '@material-ui/icons'

import useStyles from './SearchWidget.style'

const SearchWidget = () => {
  const classes = useStyles()

  return (
    <div className={classes.searchContainer}>
      <TextField
        variant='outlined'
        color='secondary'
        size='small'
        fullWidth
        className={classes.searchField}
        placeholder='Buscador'
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <SearchIcon />
            </InputAdornment>
          )
        }}
      />
    </div>
  )
}

export default SearchWidget
