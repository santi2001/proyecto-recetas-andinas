import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  recipeContainer: {
    padding: theme.spacing(2),
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(4),
      width: '100%'
    }
  },
  recipeTitle: {
    fontWeight: 600
  }
}))

export default useStyles
