// import { useState } from 'react';
// import { Box, TextField, Button, Typography, CircularProgress } from '@mui/material';
// import LoginIcon from '@mui/icons-material/Login';
// import { Link } from 'react-router';
// import { useLogin } from './useLogin';

// const LoginForm = () => {
//   const { handleLogin, loading, error } = useLogin();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const onSubmit = () => {
//     if (email && password) {
//       handleLogin(email, password);
//     }
//   };

//   return (
//     <Box sx={{ textAlign: 'center', maxWidth: 400, mx: 'auto', p: 3, marginBottom: '150px' }}>
//       <Typography variant="h5" fontWeight="bold">
//         User Login
//       </Typography>

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

//       {error && (
//         <Typography color="error" sx={{ my: 1 }}>
//           {error}
//         </Typography>
//       )}

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
//   );
// };

// export default LoginForm;
