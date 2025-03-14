import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { IconButton, Tooltip } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import BasicModal from './BasicModal';
import ProfileModal from '../pages/userProfile/ProfileModal';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router';

interface NavbarProps {
  toggletheme: () => void;
  isMode: boolean;
}

export default function Navbar({ toggletheme, isMode }: NavbarProps) {
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(['token', 'userName']);
  const [modalOpen, setModalOpen] = useState(false);
  const [userName, setUserName] = useState<string | null>(cookies.userName || null);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleLogin = (username: string) => {
    setCookie('userName', username, { path: '/' });
    setUserName(username);
    setModalOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 1, position: 'fixed', width: '100%', marginTop: 0, zIndex: 1000 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, cursor: 'pointer' }}
            onClick={() => navigate('/posts')}
          >
            Blog Post
          </Typography>

          {cookies.token && userName ? (
            <Typography color="inherit" sx={{ flexGrow: 1, textAlign: 'right', marginRight: 2 }}>
              Welcome , {userName}
            </Typography>
          ) : (
            <Button color="inherit" onClick={handleOpenModal}>
              Login
            </Button>
          )}
          <Tooltip title={isMode ? 'Enable Light Mode' : 'Enable Dark Mode'}>
            <IconButton onClick={toggletheme} color="inherit">
              {isMode ? <Brightness7 color="secondary" /> : <Brightness4 />}
            </IconButton>
          </Tooltip>
          <ProfileModal />
        </Toolbar>
      </AppBar>
      <BasicModal open={modalOpen} setOpen={setModalOpen} setUserName={handleLogin} />
    </Box>
  );
}
