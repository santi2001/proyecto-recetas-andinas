import React from 'react'
import { makeStyles, Switch, withStyles } from '@material-ui/core'

export const StyledSwitch = withStyles((theme) => ({
  root: {
    width: 48,
    height: 24,
    padding: 0,
    margin: theme.spacing(1)
  },
  switchBase: {
    padding: 3,
    '&$checked': {
      transform: 'translateX(24px)',
      color: theme.palette.primary.main,
      '& + $track': {
        backgroundColor: theme.palette.primary.main,
        opacity: 1,
        border: 'none'
      }
    },
    '&$focusVisible $thumb': {
      color: '#52d869',
      border: '6px solid #fff'
    }
  },
  thumb: {
    width: 18,
    height: 18,
    color: theme.palette.primary.contrastText,
    borderRadius: 11
  },
  track: {
    borderRadius: 18,
    backgroundColor: '#79797A',
    opacity: 1
  },
  checked: {},
  focusVisible: {}
}))(({ classes, ...props }) => (
  <Switch
    focusVisibleClassName={classes.focusVisible}
    disableRipple
    classes={{
      root: classes.root,
      switchBase: classes.switchBase,
      thumb: classes.thumb,
      track: classes.track,
      checked: classes.checked
    }}
    {...props}
  />
))
const useStyles = makeStyles((theme) => ({
  recipeContainer: {
    padding: theme.spacing(4),
    width: '100%'
  },
  recipeTitle: {
    fontWeight: 600
  },
  recipeTable: {
    width: '100%',
    '& thead': {
      borderBottom: '1px solid #B1C4D1'
    },

    '& th ': {
      '& label': {
        fontFamily: theme.typography.fontFamily,
        fontSize: '.75rem',
        fontWeight: 600
      },
      padding: theme.spacing(2, 1),
      borderBottom: '1px solid #B1C4D1',
      textAlign: 'left',
      color: '#79797A'
    },
    '& td': {
      padding: theme.spacing(),
      borderBottom: '1px solid #EBF0F3'
    }
  },
  recipeName: {
    fontSize: '.875rem'
  }
}))

export default useStyles
