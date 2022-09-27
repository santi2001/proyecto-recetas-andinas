import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: '#ffffff',
    margin: '0 auto',
    [theme.breakpoints.up('xl')]: {
      maxWidth: 1920
    }
  }
}))

export default useStyles
