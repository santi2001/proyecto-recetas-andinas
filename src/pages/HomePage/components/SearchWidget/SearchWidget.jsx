import React, { useContext } from 'react'
import { InputAdornment, MenuItem, Radio, Select, TextField, Typography } from '@material-ui/core'
import {
  KeyboardArrowDown as KeyboardArrowDownIcon,
  Search as SearchIcon
} from '@material-ui/icons'
import { RecipentsContext } from 'context'

import useStyles from './SearchWidget.style'

const SearchWidget = () => {
  const classes = useStyles()
  const { searchParams, setSearchParams } = useContext(RecipentsContext)

  const showValue = (value) => {
    if (value === true) return 'Activos'

    if (value === false) return 'Inactivos'

    return 'Todos'
  }

  const { searchText, beforeCook } = searchParams

  const handleChangeParams = (e) =>
    setSearchParams((state) => ({ ...state, [e.target.name]: e.target.value }))

  return (
    <div className={classes.searchContainer}>
      <div className={classes.mainContainer}>
        <TextField
          variant='outlined'
          color='secondary'
          size='small'
          value={searchText}
          name='searchText'
          onChange={handleChangeParams}
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
        <Select
          fullWidth
          margin='dense'
          name='beforeCook'
          value={beforeCook}
          onChange={handleChangeParams}
          MenuProps={{ classes: { paper: classes.dropdownStyle } }}
          variant='outlined'
          className={classes.select}
          renderValue={(value) => (
            <Typography>
              Cocido antes: <strong>{showValue(value)}</strong>
            </Typography>
          )}
          IconComponent={(props) => <KeyboardArrowDownIcon color='primary' {...props} />}>
          <MenuItem value='All' className={classes.menuItem}>
            <Typography>Todos</Typography>
            <Radio checked={beforeCook === 'All'} className={classes.radio} />
          </MenuItem>
          <MenuItem value={true} className={classes.menuItem}>
            <Typography>Activos</Typography>
            <Radio checked={beforeCook === true} className={classes.radio} />
          </MenuItem>
          <MenuItem value={false} className={classes.menuItem}>
            <Typography>Inactivos</Typography>
            <Radio checked={beforeCook === false} className={classes.radio} />
          </MenuItem>
        </Select>
      </div>
    </div>
  )
}

export default SearchWidget
