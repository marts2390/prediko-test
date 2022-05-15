import { createTheme } from '@mui/material/styles'
import ThemeVariables from './variables'

declare module '@mui/material/styles' {
  interface Palette {
    white: Palette['primary'];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    white?: PaletteOptions['primary'];
  }
}

// Update the Button's color prop options
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    white: true;
  }
}

const { colours, fonts, fontWeights, fontSizes } = ThemeVariables

let theme = createTheme({
  palette: {
    primary: {
      main: colours.primary,
    },
    secondary: {
      main: colours.secondary,
    },
    white: {
      main: colours.white
    }
  },
  typography: {
    fontFamily: fonts.main,
    h4: {
      fontWeight: fontWeights.bold,
      fontSize: fontSizes.lg
    },
    h6: {
      fontWeight: fontWeights.semibold,
      fontSize: fontSizes.md
    },
    body2: {
      fontSize: fontSizes.xxs,
      color: colours.lightFont,
      fontWeight: fontWeights.regular,
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: ThemeVariables.borderRadius.small,
          textTransform: 'none',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.04)',
          padding: '0.75em 1.25em',
        },
        containedSecondary: {
          color: colours.white,
        },
      }
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: ThemeVariables.colours.white
        }
      }
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: fontSizes.xs,
        }
      }
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.04)',
          borderRadius: '18px',
          fontSize: fontSizes.xs,
        },
        outlined: {
          minHeight: 'auto',
          padding: '1em',
        }
      }
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          fontWeight: fontWeights.semibold,

          '& .MuiSvgIcon-root': {
            color: 'black',
          }
        },
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          '& .Mui-focus': {
            display: 'none',
            borderColor: '#8f92a133 !important',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          },
        },
        root: {
          '& fieldset': {
            transition: '0.3s ease',
            border: '2px solid rgba(143, 146, 161, 0.2)',
          },
          '&:hover fieldset': {
            borderColor: '#8f92a133 !important',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          },
          '& .Mui-focused fieldset': {
            borderColor: '#8f92a133 !important',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          },
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.04)',
          borderRadius: '18px',

          '& .MuiOutlinedInput-input': {
            padding: '1em',
            fontSize: fontSizes.xs,

            '&::placeholder': {
              fontWeight: fontSizes.xs,
            },
          },

          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              transition: '0.3s ease',
              border: '2px solid rgba(143, 146, 161, 0.2)',
            },
            '&:hover fieldset': {
              borderColor: '#8f92a133 !important',
              boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#8f92a133 !important',
              boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            },
          },

          '& .MuiFilledInput-input': {
            fontSize: fontSizes.xs,
            fontWeight: fontWeights.medium,
            padding: '1.25em',
            paddingLeft: '0.5em',
            paddingRight: '1.5em',
            background: colours.white,
            borderRadius: '18px',

            '&::placeholder': {
              color: 'black',
              opacity: 1,
              fontWeight: fontWeights.medium
            }
          },

          '& .MuiFilledInput-root': {
            background: colours.white,
            borderRadius: '18px',

            '&:hover': {
              background: colours.white,
            },

            '&::before' : {
              display: 'none',
            },
            '&::after' : {
              display: 'none',
            }
          },

          '& .MuiInputAdornment-root': {
            marginTop: '0 !important',
            paddingLeft: '0.5em',
          },
        }
      }
    }
  }
})

export default theme
