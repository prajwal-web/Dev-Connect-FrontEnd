/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, CircularProgress, Typography, Card, CardContent, Tooltip, IconButton, Grid2 } from '@mui/material';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import EditNoteIcon from '@mui/icons-material/EditNote';
import { Link, useNavigate } from 'react-router';

interface ProfilePageProps {
  user?: any;
}

const ProfilePage = ({ user }: ProfilePageProps) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [cookies, setCookie] = useCookies(['token', 'user']);
  const [userData, setUserData] = useState<any>(user || cookies.user);
  const [bio, setBio] = useState(true);

  useEffect(() => {
    if (!cookies.token) {
      setError('Login to access the Profile');
      setLoading(false);
      navigate('/posts');
    } else {
      if (!cookies.user) {
        setError('Failed to fetch user data');
        setLoading(false);
      } else {
        setUserData(cookies.user);
        setLoading(false);
      }
    }
  }, [cookies.token, cookies.user, navigate]);

  const fetchUserData = async () => {
    try {
      const response = await fetch('https://dev-connect-service.onrender.com/api/users/profile', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
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

  const handleUpdateProfile = () => {
    fetchUserData();
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
        boxSizing: 'border-box',
        overflowY: 'auto'
      }}
    >
      <Card
        sx={{
          width: { xs: 300, sm: 700, lg: 800 },
          borderRadius: 3,
          boxShadow: 10,
          overflowY: 'auto',
          padding: 4,
          marginTop: { xs: 10, lg: 4 },
          transition: 'transform 0.2s ease',
          '&:hover': {
            transform: 'scale(1.05)'
          }
        }}
      >
        <CardContent sx={{ position: 'relative' }}>
          <Grid2 container spacing={3} alignItems="center">
            <Grid2 size={{ xs: 12, sm: 4 }} display="flex" justifyContent="center">
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
                src={
                  userData.profilePicture ||
                  'https://plus.unsplash.com/premium_photo-1741413932415-555e5c6a58f0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                }
              />
            </Grid2>

            <Grid2 size={{ xs: 12, sm: 8 }}>
              <Typography variant="h6" color="text.primary" fontWeight="bold" gutterBottom>
                <strong>Name :</strong> {userData.name}
              </Typography>
              <Typography variant="h6" color="text.primary" gutterBottom>
                <strong>email :</strong> {userData.email}
              </Typography>
              <Typography variant="h6" gutterBottom>
                <strong>Skills :</strong> {userData?.skills?.join(', ')}{' '}
              </Typography>
              <Typography
                margin="normal"
                variant="h6"
                sx={{ cursor: 'pointer' }}
                onClick={() => setBio(!bio)}
                gutterBottom
                color="text.primary"
              >
                <strong>Bio :</strong>{' '}
                {bio ? `${userData?.bio.split(/\s+/).slice(0, 10).join(' ') + ' read more'}...` : userData?.bio}
              </Typography>
              <Typography variant="h6" margin="normal" color="text.primary" gutterBottom>
                <strong>Last Updated:</strong> {new Date(userData.updatedAt).toLocaleDateString()}
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
                  <Link to="/updateprofile" onClick={handleUpdateProfile}>
                    <EditNoteIcon color="primary" />
                  </Link>
                </IconButton>
              </Tooltip>
            </Grid2>
          </Grid2>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ProfilePage;
