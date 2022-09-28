import { createMuiTheme } from '@material-ui/core'
import { fade } from '@material-ui/core/styles/colorManipulator'

const defaultTheme = createMuiTheme()

export const theme = createMuiTheme({
  useNextVariants: true,
  typography: {
    useNextVariants: true,
    fontFamily: '"Poppins", sans-serif',
    h1: {
      fontSize: '4rem'
    },
    h2: {
      fontSize: '2rem'
    },
    h3: {
      fontSize: '1.5rem'
    },
    h4: {
      fontSize: '1.3rem'
    },
    h5: {
      fontSize: '1.25rem'
    },
    h6: {
      fontSize: '1rem'
    }
  },
  palette: {
    background: {
      default: '#f0f0f0'
    },
    primary: {
      light: fade('#0C969D', 0.7),
      main: '#0C969D',
      contrastText: '#ffffff'
    },
    secondary: {
      light: fade('#F7941D', 0.7),
      main: '#F7941D',
      contrastText: '#000'
    },
    success: {
      light: fade('#8DC63F', 0.7),
      main: '#8DC63F',
      contrastText: '#fff'
    }
  },
  overrides: {
    MuiPaper: {
      rounded: {
        borderRadius: 0
      }
    },
    MuiButton: {
      root: {
        borderRadius: 0,
        textTransform: 'none'
      },

      label: {
        fontWeight: 400
      }
    },
    MuiInputBase: {
      root: {
        '& fieldset': {
          borderRadius: 4
        }
      }
    },
    MuiFormControl: {
      root: {
        padding: 0
      }
    },
    MuiFilledInput: {
      root: {
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        marginBottom: defaultTheme.spacing(),
        backgroundColor: '#f0f0f0'
      },
      input: {
        padding: defaultTheme.spacing(2)
      },
      inputMarginDense: {
        paddingTop: defaultTheme.spacing(2),
        paddingBottom: defaultTheme.spacing(2)
      },
      underline: {
        '&:after': {
          borderBottom: 'none'
        },
        '&:before': {
          borderBottom: 'none'
        },
        '&:hover:before': {
          borderBottom: 'none'
        }
      }
    },
    MuiInput: {
      underline: {
        '&:before': {
          // underline color when textfield is inactive
          borderBottom: '1px solid #5c35e0'
        },
        '&:hover:not($disabled):before': {
          // underline color when hovered
          borderBottom: '1px solid #0600ad'
        }
      }
    }
  }
})

export default theme
