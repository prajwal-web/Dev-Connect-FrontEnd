/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router';
import AppRouter from './router/AppRouter';
import Navbar from './ui/Navbar';
import { useState, useEffect } from 'react';
import { darkTheme, lightTheme } from './theme/AppTheme';
import { useCookies } from 'react-cookie';
import securedFetch from './utils/securedfetch';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [cookies] = useCookies(['token']);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
    console.log('Cookies:', cookies);

    if (cookies?.token) {
      securedFetch('https://dev-connect-service.onrender.com/api/users/profile', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${cookies.token}`
        }
      })
        .then(async (response) => {
          if (!response.ok) {
            throw new Error('Failed to fetch profile');
          }
          const data = await response.json();
          console.log('Fetched User Data:', data);
          setUser(data);
        })
        .catch((error) => {
          console.error('Error fetching profile:', error);
        });
    }
  }, [cookies?.token]);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Navbar toggletheme={toggleTheme} isMode={isDarkMode} />
        <AppRouter user={user} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
