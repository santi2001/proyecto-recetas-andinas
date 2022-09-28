import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  addButton: {
    position: 'fixed',
    zIndex: 1,
    right: theme.spacing(4),
    bottom: theme.spacing(3)
  },
  drawerContainer: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1
  },
  drawer: {
    width: '100vw',
    paddingBottom: 100,
    flexGrow: 1,
    [theme.breakpoints.up('md')]: {
      width: '33vw'
    },
    [theme.breakpoints.up('xl')]: {
      width: '25vw'
    }
  }
}))
