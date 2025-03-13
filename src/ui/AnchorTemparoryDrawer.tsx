import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { Link, useNavigate } from 'react-router';
import { useCookies } from 'react-cookie';
import LogoutIcon from '@mui/icons-material/Logout';
import UpdateIcon from '@mui/icons-material/Update';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

interface AnchorTemporaryDrawerProps {
  openDrawer: boolean;
  setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AnchorTemporaryDrawer({ openDrawer, setOpenDrawer }: AnchorTemporaryDrawerProps) {
  const [, , removeCookie] = useCookies(['token']);
  const navigate = useNavigate();

  const toggleDrawer = (open: boolean) => {
    setOpenDrawer(open);
  };
  const list = () => (
    <Box
      sx={{ width: { xs: 200, lg: 250 } }}
      role="presentation"
      onClick={() => toggleDrawer(false)}
      onKeyDown={() => toggleDrawer(false)}
    >
      <List>
        <ListItem key="Profile" disablePadding>
          <ListItemButton component={Link} to="/profile">
            <ListItemIcon>
              <AccountBoxIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>
        <ListItem key="Posts" disablePadding>
          <ListItemButton component={Link} to="/posts">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Posts" />
          </ListItemButton>
        </ListItem>

        {/* {['Update Profile', 'Logout'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))} */}
        <ListItem key="Update Profile" disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <UpdateIcon />
            </ListItemIcon>
            <ListItemText primary="Update Profile" />
          </ListItemButton>
        </ListItem>
        <ListItem key="Logout" disablePadding>
          <ListItemButton
            onClick={() => {
              // setTimeout(() => {
              //   setopen(true);
              // }, 3000);
              removeCookie('token');
              navigate('/posts');
            }}
          >
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>

            <ListItemText primary="Logout" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Drawer anchor="right" open={openDrawer} onClose={() => toggleDrawer(false)}>
      {list()}
    </Drawer>
  );
}
