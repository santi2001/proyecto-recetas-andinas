import React from 'react'
import { Switch, withStyles } from '@material-ui/core'

// Switch Estilizado
const StyledSwitch = withStyles((theme) => ({
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
        backgroundColor: theme.palette.success.main,
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

export default StyledSwitch
