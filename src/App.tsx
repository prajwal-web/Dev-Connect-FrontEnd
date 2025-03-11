import { CssBaseline, IconButton } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router';
import AppRouter from './router/AppRouter';
import { useState, useEffect } from 'react';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { darkTheme, lightTheme } from './theme/AppTheme';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  return (
    <>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        <BrowserRouter>
          <IconButton sx={{ position: 'fixed', top: 20, right: 20 }} onClick={toggleTheme} color="inherit">
            {isDarkMode ? <Brightness7 color="secondary" /> : <Brightness4 />}
          </IconButton>
          <AppRouter />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
