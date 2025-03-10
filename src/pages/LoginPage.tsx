import { Box, Typography, TextField, Button } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import { Link } from 'react-router';

const LoginPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        background: 'linear-gradient(to right, #1e3c72, rgb(213, 106, 240))',
        width: '100%',
        margin: 0,
        padding: 0
      }}
    >
      <Box
        sx={{
          width: { xs: '90%', sm: '80%', md: '60%', lg: 800 },
          bgcolor: 'white',
          p: { xs: 2, sm: 4 },
          borderRadius: 2,
          boxShadow: 3,
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
          <Button
            variant="contained"
            color="success"
            sx={{
              mt: 2,
              py: 1,
              width: { xs: '80%', sm: 200, lg: 300 },
              mx: 'auto'
            }}
            endIcon={<LoginIcon />}
          >
            Login
          </Button>
          <Typography variant="body2" sx={{ mt: 2, color: 'gray' }}>
            Dont have account?
            <a href="#" style={{ marginLeft: 3 }}>
              <Link to="/">Register Here </Link>
            </a>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;
