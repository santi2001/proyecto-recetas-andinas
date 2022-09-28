import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  bodyContainer: {
    [theme.breakpoints.up('lg')]: {
      display: 'flex'
    }
  },
  aside: {
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  asideImg: {
    width: 342,
    height: 944,
    borderRadius: '0px 0px 100px 0px'
  }
}))

export default useStyles
