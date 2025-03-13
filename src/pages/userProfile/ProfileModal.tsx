import React from 'react';
import { Avatar, Box, IconButton, Tooltip } from '@mui/material';
import AnchorTemporaryDrawer from '../../ui/AnchorTemparoryDrawer';
import { useCookies } from 'react-cookie';

const ProfileModal = () => {
  const [cookies] = useCookies(['token']);
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const handleAvatarClick = () => {
    setOpenDrawer(true);
  };

  return (
    <>
      <Box sx={{ flexGrow: 0 }}>
        <Tooltip title={cookies.token ? 'open Profile' : 'Login to open Profile'}>
          <IconButton sx={{ p: 0 }} onClick={handleAvatarClick}>
            <Avatar
              alt="Remy Sharp"
              src="https://www.stagemilk.com/wp-content/uploads/2016/12/Monologues-for-men.png"
            />
          </IconButton>
        </Tooltip>
      </Box>
      {cookies.token && <AnchorTemporaryDrawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />}
    </>
  );
};

export default ProfileModal;
