// @ts-nocheck

import { createTheme } from '@material-ui/core/styles';
import { Colors } from './css/colors';

export const theme = createTheme({
  typography: {
    fontFamily: [
      'system-ui',
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI', 
      'Roboto',
      'Ubuntu',
      'Helvetica Neue',
      'sans-serif',
    ],
    h1: {
      fontSize: '2rem'
    }
  },
  palette: {
    primary: {
      main: Colors.primary.main,
      dark: Colors.primary.dark,
      contrastText: Colors.primary.contrastText,
    },
    secondary: {
      main: Colors.secondary.main,
    },
    error: {
      main: Colors.error.main,
    },
    background: {
      default: Colors.background.default,
    },
    text: {
      primary: Colors.text.primary,
    },
    action: {
      disabledBackground: Colors.action.disabledBackground,
      disabled: Colors.action.disabled,
    },
  },
  shadows: [],
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 30,
        textTransform: 'none',
        fontSize: 16,
        height: 40,
        fontWeight: 700,
      },
      textPrimary: {
        paddingLeft: 20,
        paddingRight: 20,
      },
      outlinedPrimary: {
        borderColor: 'rgb(29, 161, 243)',
      },
    },
    MuiFilledInput: {
      underline: {
        '&:after': {
          borderBottomWidth: '2px',
        },
        '&:before': {
          borderColor: '#000',
          borderBottomWidth: '2px',
        },
      },
      input: {
        backgroundColor: 'rgb(245, 248, 250)',
      },
    },
    MuiDialog: {
      paper: {
        borderRadius: 15,
      },
    },
    MuiDialogActions: {
      root: {
        marginBottom: 8,
      },
    },
    MuiDialogTitle: {
      root: {
        borderBottom: '1px solid rgb(204, 214, 221)',
        marginBottom: 10,
        padding: '10px 15px',
        '& h2': {
          display: 'flex',
          alignItems: 'center',
          fontWeight: 800,
        },
        '& button': {
          padding: 8,
          marginRight: 20,
        },
      },
    },
  },
});

export default theme;
