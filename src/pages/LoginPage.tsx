import { Box, Typography, TextField, Button, CircularProgress, useTheme } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import { Link, useNavigate } from 'react-router';
import { useState } from 'react';
import { useCookies } from 'react-cookie';

const LoginPage = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(['name']);
  console.log(cookies);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    if (email && password) {
      setLoading(true);
      const response = await fetch('https://dev-connect-service.onrender.com/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      });

      const jsonData = await response.json();
      if (response.ok && jsonData.token) {
        setCookie('name', jsonData.token);
        setError('');
        setEmail('');
        setPassword('');
        navigate('/posts', { state: jsonData.token });
      } else {
        setError(jsonData.message || 'Login failed. Please try again.');
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
        minHeight: '100vh',
        width: '100%',
        margin: 0,
        padding: 0
      }}
    >
      <Box
        sx={{
          width: { xs: '90%', sm: '80%', md: '60%', lg: 800 },
          p: { xs: 2, sm: 4 },
          borderRadius: 2,
          boxShadow:
            theme.palette.mode === 'dark'
              ? '0px 4px 10px rgba(255, 255, 255, 0.1), 0px 2px 5px rgba(255, 255, 255, 0.2)'
              : '0px 4px 10px rgba(0, 0, 0, 0.1), 0px 2px 5px rgba(0, 0, 0, 0.2)',
          textAlign: 'center',
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          gap: { xs: 2, sm: 20 }
        }}
      >
        <Box
          component="img"
          sx={{
            height: { xs: 100, sm: 150, lg: 250 },
            width: { xs: 100, sm: 150, lg: 250 },
            borderRadius: '50%',
            mb: { xs: 3, sm: 0, lg: 8 },
            mt: { sm: 8 },
            mx: 'auto'
          }}
          alt="Login Icon"
          src="https://thumbs.dreamstime.com/z/login-icon-button-vector-illustration-isolated-white-background-126999474.jpg"
        />
        <Box
          display="flex"
          flexDirection="column"
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            mt: { xs: 2, sm: 0 }
          }}
        >
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            User Login
          </Typography>
          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
            variant="standard"
            label="Email ID"
            type="email"
            sx={{
              width: { xs: '80%', sm: 200, lg: 300 },
              borderRadius: '10px',
              mx: 'auto'
            }}
          />
          <TextField
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            margin="normal"
            variant="standard"
            label="Password"
            type="password"
            sx={{
              width: { xs: '80%', sm: 200, lg: 300 },
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
            variant="contained"
            color="success"
            sx={{
              mt: 2,
              py: 1,
              width: { xs: '80%', sm: 200, lg: 300 },
              mx: 'auto'
            }}
            endIcon={loading ? <CircularProgress size={20} color="inherit" /> : <LoginIcon />}
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </Button>

          <Typography variant="body2" sx={{ mt: 2, color: 'gray' }}>
            Don't have an account? <Link to="/register">Sign Up</Link>
          </Typography>
        </Box>
      </Box>
      <div></div>
    </Box>
  );
};

// export default LoginPage;
// import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { useCookies } from 'react-cookie'

// export const useLogin = () => {
//   const navigate = useNavigate()
//   const [cookies, setCookie] = useCookies(['token'])
//   const [loading, setLoading] = useState(false)
//   const [error, setError] = useState<string | null>(null)

//   const handleLogin = async (email: string, password: string) => {
//     setLoading(true)
//     setError(null)

//     try {
//       const response = await fetch('https://dev-connect-service.onrender.com/api/auth/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, password })
//       })

//       const jsonData = await response.json()
//       if (response.ok && jsonData.token) {
//         setCookie('token', jsonData.token)
//         navigate('/posts', { state: jsonData.token })
//       } else {
//         setError(jsonData.message || 'Login failed. Please try again.')
//       }
//     } catch (err) {
//       setError('An unexpected error occurred.')
//     } finally {
//       setLoading(false)
//     }
//   }

//   return { handleLogin, loading, error }
// }

// import { useState } from 'react'
// import { Box, TextField, Button, Typography, CircularProgress } from '@mui/material'
// import LoginIcon from '@mui/icons-material/Login'
// import { Link } from 'react-router-dom'
// import { useLogin } from '../../hooks/useLogin'

// const LoginForm = () => {
//   const { handleLogin, loading, error } = useLogin()
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')

//   const onSubmit = () => {
//     if (email && password) {
//       handleLogin(email, password)
//     }
//   }

//   return (
//     <Box sx={{ textAlign: 'center', maxWidth: 400, mx: 'auto', p: 3 }}>
//       <Typography variant="h5" fontWeight="bold">User Login</Typography>
      
//       <TextField 
//         label="Email" 
//         type="email" 
//         fullWidth 
//         value={email} 
//         onChange={(e) => setEmail(e.target.value)}
//         sx={{ my: 2 }}
//       />

//       <TextField 
//         label="Password" 
//         type="password" 
//         fullWidth 
//         value={password} 
//         onChange={(e) => setPassword(e.target.value)}
//         sx={{ my: 2 }}
//       />

//       {error && <Typography color="error" sx={{ my: 1 }}>{error}</Typography>}

//       <Button 
//         variant="contained" 
//         color="success" 
//         fullWidth 
//         onClick={onSubmit} 
//         disabled={loading}
//         endIcon={loading ? <CircularProgress size={20} color="inherit" /> : <LoginIcon />}
//         sx={{ mt: 2 }}
//       >
//         {loading ? 'Logging in...' : 'Login'}
//       </Button>

//       <Typography sx={{ mt: 2 }}>
//         Don't have an account? <Link to="/register">Sign Up</Link>
//       </Typography>
//     </Box>
//   )
// }

// export default LoginForm

// import { Box } from '@mui/material'
// import LoginForm from '../components/auth/LoginForm'

// const LoginPage = () => {
//   return (
//     <Box 
//       sx={{
//         display: 'flex', 
//         justifyContent: 'center', 
//         alignItems: 'center', 
//         minHeight: '100vh', 
//         bgcolor: '#f5f5f5'
//       }}
//     >
//       <LoginForm />
//     </Box>
//   )
// }

// export default LoginPage
