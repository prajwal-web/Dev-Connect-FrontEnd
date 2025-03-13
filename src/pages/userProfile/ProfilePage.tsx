/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, CircularProgress, Typography, Card, CardContent, Tooltip, IconButton } from '@mui/material';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import EditNoteIcon from '@mui/icons-material/EditNote';
import { useNavigate } from 'react-router';

interface ProfilePageProps {
  user?: any;
}

const ProfilePage = ({ user }: ProfilePageProps) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [cookies, setCookie] = useCookies(['token', 'user']);
  const [userData, setUserData] = useState<any>(user || cookies.user);

  useEffect(() => {
    if (!cookies.token) {
      setError('Login to access the Profile');
      setLoading(true);
      navigate('/posts');
    } else {
      if (!userData) {
        setError('Failed to fetch user data');
        setLoading(false);
      } else {
        setLoading(false);
      }
    }
  }, [cookies.token, userData]);

  useEffect(() => {
    if (!cookies.user && cookies.token) {
      fetchUserData();
    }
  }, [cookies.user, cookies.token]);

  const fetchUserData = async () => {
    try {
      const response = await fetch('https://dev-connect-service.onrender.com/api/users/profile', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${cookies.token}`
        }
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }

      setCookie('user', data, { path: '/' });
      setUserData(data);
    } catch (err) {
      setError('Failed to fetch user data');
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      height="100vh"
      padding={3}
      sx={{
        boxSizing: 'border-box'
      }}
    >
      <Card
        sx={{
          width: { xs: 300, sm: 500, lg: 480 },
          borderRadius: 3,
          boxShadow: 10,
          padding: 4,
          marginTop: { xs: 10, lg: 4 },
          transition: 'transform 0.2s ease',
          '&:hover': {
            transform: 'scale(1.05)'
          }
        }}
      >
        <CardContent sx={{ position: 'relative', textAlign: 'center' }}>
          <Box display="flex" justifyContent="center" mb={3}>
            <Box
              component="img"
              sx={{
                height: 200,
                width: 200,
                borderRadius: '50%',
                objectFit: 'cover',
                boxShadow: 6,
                border: '5px solid white'
              }}
              alt="User Avatar"
              src="https://plus.unsplash.com/premium_photo-1741413932415-555e5c6a58f0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </Box>

          <Typography variant="h4" color="text.primary" fontWeight="bold" gutterBottom>
            {userData.name}
          </Typography>

          <Typography variant="h6" color="text.secondary" gutterBottom>
            {userData.email}
          </Typography>

          <Typography variant="body2" color="text.secondary" gutterBottom>
            <strong>Last Updated:</strong> {new Date(userData.updatedAt).toLocaleDateString()}
          </Typography>

          <Typography variant="body1" color="text.primary" gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis vitae nulla et eius dolor nostrum debitis
            aliquam tempora inventore adipisci.
          </Typography>

          <Tooltip title="Edit Profile">
            <IconButton
              sx={{
                position: 'absolute',
                top: { xs: -20, lg: 5 },
                right: 10,
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 1)'
                },
                boxShadow: 3
              }}
            >
              <EditNoteIcon color="primary" />
            </IconButton>
          </Tooltip>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ProfilePage;
