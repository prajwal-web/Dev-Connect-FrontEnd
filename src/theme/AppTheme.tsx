import { createTheme } from '@mui/material/styles';
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#8e2bd9'
    },
    secondary: {
      main: '#77d92b'
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e'
    },
    text: {
      primary: '#fff',
      secondary: '#b0b0b0'
    }
  },
  typography: {
    fontFamily: '"Roboto", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontFamily: 'cursive',
      fontWeight: 700,
      letterSpacing: '-0.5px'
    },
    h2: {
      fontSize: '2rem',
      fontFamily: 'cursive',
      fontWeight: 600
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400
    },
    button: {
      fontSize: '1rem',
      fontWeight: 600
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536
    }
  }
});
const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#8e2bd9'
    },
    secondary: {
      main: '#77d92b'
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff'
    },
    text: {
      primary: '#121212',
      secondary: '#757575'
    }
  },
  typography: {
    fontFamily: '"Roboto", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontFamily: 'cursive',
      fontWeight: 700,
      letterSpacing: '-0.5px'
    },
    h2: {
      fontSize: '2rem',
      fontFamily: 'cursive',
      fontWeight: 600
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400
    },
    button: {
      fontSize: '1rem',
      fontWeight: 600
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536
    }
  }
});

export { darkTheme, lightTheme };
