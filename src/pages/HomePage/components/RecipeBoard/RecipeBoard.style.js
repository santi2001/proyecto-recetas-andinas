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
  },
  recipeTable: {
    width: '100%',
    '& thead': {
      borderBottom: '1px solid #B1C4D1'
    },

    '& th ': {
      '& label': {
        fontFamily: theme.typography.fontFamily,
        fontSize: '.75rem',
        fontWeight: 600
      },
      padding: theme.spacing(2, 1),
      borderBottom: '1px solid #B1C4D1',
      textAlign: 'left',
      color: '#79797A'
    },
    '& td': {
      padding: theme.spacing(),
      borderBottom: '1px solid #EBF0F3'
    }
  }
}))

export default useStyles
