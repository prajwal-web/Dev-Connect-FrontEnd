import { CssBaseline } from '@mui/material';
// import { ThemeProvider } from '@mui/material/styles';
// import { darkTheme } from './theme/AppTheme';
import { BrowserRouter } from 'react-router';
import AppRouter from './router/AppRouter';

function App() {
  return (
    <>
      {/* <ThemeProvider theme={darkTheme}> */}
      <CssBaseline />
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
      {/* </ThemeProvider> */}
    </>
  );
}

export default App;
