import React, { useState } from 'react'
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import InfoIcon from '@mui/icons-material/Info';
import HomeIcon from '@mui/icons-material/Home';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import CodeIcon from '@mui/icons-material/Code';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import SourceIcon from '@mui/icons-material/Source';
import Link from '@mui/material/Link';
import '..//css/Header.css';
import { Section } from './Section';

const drawerWidth = 240;
const navItems = [
  { item:'Home',icon: <HomeIcon /> },
  { item:'About',icon: <InfoIcon /> },
  { item:'Resume',icon: <LocalLibraryIcon /> },
  { item:'Projects',icon: <SourceIcon /> },
  { item:'Skills',icon: <CodeIcon /> },
  { item:'Contact',icon: <AlternateEmailIcon /> }
];

export const Header = (props) => {

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'justify' }}>
      <Typography variant="h6" sx={{ my: 2, marginLeft: 2 }}>
        JOrellana
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.item} disablePadding>
            <ListItemButton sx={{ textAlign: 'justify' }}>
              {item.icon}
              
              <Link href={`#${item.item}`} underline="none">
                <ListItemText primary={item.item} sx={{ marginLeft: 2 }}/>
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav" sx={{ background: '#17202A '}}>
        <Toolbar className='nav-bar'>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            JOrellana
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block', background: '#1B2631' } }}>
            {navItems.map((item) => (
              
              <Button key={item.item} sx={{ verticalAlign: 'auto', fontSize: 10 }}>
                <div className='item-icon'>{item.icon}</div>
                &nbsp;
                <div className='item-text'>{item.item}</div>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Typography>
          <Section></Section>
        </Typography>
      </Box>
    </Box>
  );
}

Header.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};