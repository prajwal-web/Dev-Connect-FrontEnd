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
import { Provider } from 'react-redux';
import store from './redux/store';
import io from 'socket.io-client';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [cookies] = useCookies(['token']);
  const [socket, setSocket] = useState<any>(null);
  const [connected, setConnected] = useState(false);

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

    if (cookies?.token) {
      const newSocket = io('https://dev-connect-service.onrender.com', {
        auth: { token: cookies.token }
      });

      newSocket.on('connect', () => {
        console.log('Connected to WebSocket');
        setConnected(true);
      });

      newSocket.on('connect_error', (err) => {
        console.error('Connection error:', err);
        setConnected(false);
      });

      newSocket.on('disconnect', () => {
        console.log('Disconnected from WebSocket');
        setConnected(false);
      });

      setSocket(newSocket);

      return () => {
        newSocket.close();
      };
    }
  }, [cookies?.token]);

  useEffect(() => {
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
    <Provider store={store}>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        <BrowserRouter>
          <Navbar toggletheme={toggleTheme} isMode={isDarkMode} />
          <AppRouter user={user} socket={socket} connected={connected} />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
