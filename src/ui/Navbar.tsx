/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import BasicModal from './BasicModal';
import { IconButton } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';

export default function Navbar({ toggletheme, isMode }: any) {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  return (
    <Box sx={{ flexGrow: 1, position: 'fixed', width: '100%' }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Blog Post
          </Typography>
          <Button color="inherit" onClick={handleOpenModal}>
            Login
          </Button>
          <IconButton onClick={toggletheme} color="inherit">
            {isMode ? <Brightness7 color="secondary" /> : <Brightness4 />}
          </IconButton>
        </Toolbar>
      </AppBar>
      <BasicModal open={modalOpen} setOpen={setModalOpen} />
    </Box>
  );
}
