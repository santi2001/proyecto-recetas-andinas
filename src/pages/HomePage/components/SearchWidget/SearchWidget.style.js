import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  searchContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(3),
    width: '100%'
  },
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    [theme.breakpoints.up('lg')]: {
      width: '70%',
      flexDirection: 'row',
      minWidth: 700
    }
  },
  searchField: {
    backgroundColor: '#F9F9F9',
    borderRadius: 16,
    marginRight: theme.spacing(2),
    height: 48,
    '& fieldset': {
      border: 'none',
      borderRadius: 16,
      height: 48
    },
    '& input': {
      height: 24
    }
  },
  select: {
    height: 48,
    width: 216,
    borderRadius: 16,
    backgroundColor: '#EBF0F3',
    '& p': {
      fontSize: '.875rem'
    },
    '& > div': {
      borderRadius: 16,
      paddingTop: 12.5,
      paddingBottom: 12.5
    },
    '& fieldset': {
      border: 'none'
    },
    [theme.breakpoints.down('lg')]: {
      marginTop: theme.spacing(3)
    }
  },
  radio: {
    '& div': {
      color: '#3C6C8D'
    }
  },
  menuItem: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    '& p': {
      fontSize: '.875rem'
    }
  },
  dropdownStyle: {
    boxShadow: '0px 4px 20px rgba(30, 54, 70, 0.5)',
    borderRadius: theme.spacing(2)
  }
}))

export default useStyles
