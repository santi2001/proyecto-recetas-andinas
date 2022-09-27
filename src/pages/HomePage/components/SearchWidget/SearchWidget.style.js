import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  searchContainer: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(3),
    width: '60%'
  },
  searchField: {
    backgroundColor: '#F9F9F9',
    borderRadius: 16,
    height: 48,
    '& fieldset': {
      border: 'none',
      borderRadius: 16,
      height: 48
    },
    '& input': {
      height: 24
    }
  }
}))

export default useStyles
