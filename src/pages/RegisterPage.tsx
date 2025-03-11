import { Box, Typography, TextField, Button, CircularProgress, useTheme } from '@mui/material';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { Link, useNavigate } from 'react-router';
import { useState } from 'react';

const RegisterPage = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    if (userName && email && password) {
      setLoading(true);

      const response = await fetch('https://dev-connect-service.onrender.com/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: userName,
          email: email,
          password: password
        })
      });

      const jsonData = await response.json();
      if (response.ok && jsonData.token) {
        navigate('/', { state: jsonData.token });
        setError('');
        setUserName('');
        setEmail('');
        setPassword('');
      } else {
        setError(jsonData.message || 'Registration failed. Please try again.');
      }
      setLoading(false);
    } else {
      setError('All fields are required.');
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh'
      }}
    >
      <Box
        sx={{
          width: { xs: '90%', sm: '80%', md: '60%', lg: 800 },
          display: 'flex',
          borderRadius: 3,
          boxShadow:
            theme.palette.mode === 'dark'
              ? '0px 4px 10px rgba(255, 255, 255, 0.1), 0px 2px 5px rgba(255, 255, 255, 0.2)'
              : '0px 4px 10px rgba(0, 0, 0, 0.1), 0px 2px 5px rgba(0, 0, 0, 0.2)',
          overflow: 'hidden'
        }}
      >
        <Box
          sx={{
            flex: 1,
            p: 4,
            textAlign: 'center'
          }}
        >
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Hello, friend!
          </Typography>
          <TextField
            onChange={(e) => setUserName(e.target.value)}
            fullWidth
            margin="normal"
            variant="standard"
            label="Name"
            sx={{
              width: { xs: 150, sm: 200, lg: 300 },
              borderRadius: '10px',
              mx: 'auto'
            }}
          />
          <TextField
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            margin="normal"
            variant="standard"
            label="E-mail"
            type="email"
            sx={{
              width: { xs: 150, sm: 200, lg: 300 },
              borderRadius: '10px',
              mx: 'auto'
            }}
          />
          <TextField
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            margin="normal"
            variant="standard"
            label="Password"
            type="password"
            sx={{
              width: { xs: 150, sm: 200, lg: 300 },
              borderRadius: '10px',
              mx: 'auto'
            }}
          />

          {error && (
            <Typography variant="body2" sx={{ mt: 2, color: 'red' }}>
              {error}
            </Typography>
          )}

          <Button
            onClick={handleSubmit}
            fullWidth
            variant="contained"
            endIcon={loading ? <CircularProgress size={20} color="inherit" /> : <HowToRegIcon color="inherit" />}
            sx={{ mt: 2, py: 1, bgcolor: '#1e88e5', width: { sm: 200, lg: 300 } }}
            disabled={loading}
          >
            {loading ? 'Registering...' : 'Register'}
          </Button>

          <Typography variant="body2" sx={{ mt: 2, color: 'gray' }}>
            Already have an account? <Link to="/login">Sign in</Link>
          </Typography>
        </Box>
        <Box
          sx={{
            flex: 1,
            bgcolor: '#1e88e5',
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            p: 3,
            className: 'fadeInUp'
          }}
        >
          <Typography fontWeight="bold" textAlign="center" sx={{ fontSize: { xs: '18px', sm: '28px', lg: '35px ' } }}>
            Welcome to the Community!
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default RegisterPage;
