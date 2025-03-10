import { Box, Typography, TextField, Button } from '@mui/material';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { Link } from 'react-router';

const RegisterPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        background: 'linear-gradient(to right,rgb(224, 241, 245), #1e88e5)'
      }}
    >
      <Box
        sx={{
          width: { xs: '90%', sm: '80%', md: '60%', lg: 800 },
          display: 'flex',
          bgcolor: 'white',
          borderRadius: 3,
          boxShadow: 3,
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

          <Button
            fullWidth
            variant="contained"
            endIcon={<HowToRegIcon color="inherit" />}
            sx={{ mt: 2, py: 1, bgcolor: '#1e88e5', width: { sm: 200, lg: 300 } }}
          >
            Register
          </Button>
          <Typography variant="body2" sx={{ mt: 2, color: 'gray' }}>
            Already have an account?{' '}
            <a href="#">
              <Link to="/login">Sign in </Link>
            </a>
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
            p: 3
          }}
        >
          <Typography variant="h5" fontWeight="bold">
            Glad to see You!
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default RegisterPage;
