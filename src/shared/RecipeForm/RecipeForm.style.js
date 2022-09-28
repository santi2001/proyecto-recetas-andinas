import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3)
  },
  headerContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing(3)
  },
  formTitle: {
    fontWeight: 600
  },
  formGroup: {
    marginBottom: 30,
    '& p': {
      fontWeight: 600,
      fontSize: '.875rem'
    }
  },
  textField: {
    margin: theme.spacing(2, 0),
    '& fieldset': {
      borderColor: theme.palette.primary.main
    }
  },
  actionButtonContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end'
  },
  createButton: {
    padding: theme.spacing(1.5, 4),
    borderRadius: theme.spacing(3),
    gap: 8,
    '& span': {
      fontSize: '1rem'
    },
    '&:disabled': {
      backgroundColor: '#B2B2B3',
      color: theme.palette.primary.contrastText
    }
  }
}))

export default useStyles
