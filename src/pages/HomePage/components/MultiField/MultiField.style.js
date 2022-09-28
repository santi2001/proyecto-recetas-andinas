import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing()
  },
  fieldContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(4)
  },
  fieldNumber: {
    color: '#79797A',
    marginRight: theme.spacing(2)
  },
  textField: {
    fontSize: '.875rem',
    '& fieldset': {
      borderColor: theme.palette.primary.main
    },

    '&::placeholder': {
      fontSize: '.875rem'
    }
  },
  button: {
    marginLeft: theme.spacing(3.5),
    flexShrink: 0
  },
  addButton: {
    color: theme.palette.success.main,
    border: `1px solid ${theme.palette.success.main}`
  }
}))
