import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  addButton: {
    position: 'fixed',
    right: theme.spacing(4),
    bottom: theme.spacing(3),
    backgroundColor: theme.palette.info.main,
    color: theme.palette.info.contrastText,
    '&:hover': {
      backgroundColor: theme.palette.info.main
    }
  }
}))
