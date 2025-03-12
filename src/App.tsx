import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router';
import AppRouter from './router/AppRouter';
import Navbar from './ui/Navbar';
import { useState, useEffect } from 'react';
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
          <Navbar toggletheme={toggleTheme} isMode={isDarkMode} />
          <AppRouter />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
