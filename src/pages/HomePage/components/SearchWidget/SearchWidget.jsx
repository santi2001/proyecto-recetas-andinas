import React, { useContext } from 'react'
import { InputAdornment, MenuItem, Radio, Select, TextField, Typography } from '@material-ui/core'
import {
  KeyboardArrowDown as KeyboardArrowDownIcon,
  Search as SearchIcon
} from '@material-ui/icons'
import { RecipesContext } from 'context'

import useStyles from './SearchWidget.style'

const SearchWidget = () => {
  // Para evitar problemas con valores magicos
  const ACTIVE_STATE = true
  const INACTIVE_STATE = false
  const DEFAULT_STATE = 'All'

  const classes = useStyles()

  const { searchParams, setSearchParams } = useContext(RecipesContext)
  const { searchText, beforeCook } = searchParams

  const showValue = (value) => {
    if (value === DEFAULT_STATE) return 'Todos'

    if (value === ACTIVE_STATE) return 'Activos'

    if (value === INACTIVE_STATE) return 'Inactivos'
  }

  // Actualiza los parametros de busqueda o filtros
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
          <MenuItem value={DEFAULT_STATE} className={classes.menuItem}>
            <Typography>Todos</Typography>
            <Radio checked={beforeCook === DEFAULT_STATE} className={classes.radio} />
          </MenuItem>
          <MenuItem value={ACTIVE_STATE} className={classes.menuItem}>
            <Typography>Activos</Typography>
            <Radio checked={beforeCook === ACTIVE_STATE} className={classes.radio} />
          </MenuItem>
          <MenuItem value={INACTIVE_STATE} className={classes.menuItem}>
            <Typography>Inactivos</Typography>
            <Radio checked={beforeCook === INACTIVE_STATE} className={classes.radio} />
          </MenuItem>
        </Select>
      </div>
    </div>
  )
}

export default SearchWidget
