import './App.css';
import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Drawer, List, ListItem, ListItemText, IconButton, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Main from "./components/main";
import { Link } from "react-router-dom";

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const menuItems = [
    { text: 'About Me', path: '/about-me' },
    { text: 'Projects', path: '/projects' },
    { text: 'Resume', path: '/resume' },
    { text: 'Contact', path: '/contact' }
  ];

  return (
      <div className="demo-big-content">
          <AppBar position="fixed" className='header-color'>
              <Toolbar>
                  <IconButton
                      edge="start"
                      color="inherit"
                      aria-label="menu"
                      onClick={toggleDrawer(true)}
                      sx={{ mr: 2 }}
                  >
                      <MenuIcon />
                  </IconButton>
                  <Typography variant="h6" component={Link} to="/" sx={{ color: 'white', textDecoration: 'none', mr: 2 }}>
                      Csaba79-coder 🏳️‍🌈
                  </Typography>
                  <Box sx={{ flexGrow: 1 }} />
                  <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                      {menuItems.map((item) => (
                          <Button key={item.text} component={Link} to={item.path} sx={{ color: 'white' }}>
                              {item.text}
                          </Button>
                      ))}
                  </Box>
              </Toolbar>
          </AppBar>

          {/* Spacer to push content below AppBar */}
          <Toolbar />

          <Drawer
              anchor="left"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
          >
              <Box
                  sx={{ width: 250 }}
                  role="presentation"
                  onClick={toggleDrawer(false)}
                  onKeyDown={toggleDrawer(false)}
              >
                  <Typography variant="h6" component={Link} to="/" sx={{ p: 2, color: 'grey', textDecoration: 'none', display: 'block' }}>
                      Csaba79-coder 🏳️‍🌈
                  </Typography>
                  <List>
                      {menuItems.map((item) => (
                          <ListItem button key={item.text} component={Link} to={item.path}>
                              <ListItemText primary={item.text} />
                          </ListItem>
                      ))}
                  </List>
              </Box>
          </Drawer>

          <Box component="main">
              <div className="page-content" />
              <Main />
          </Box>
      </div>
  );
}

export default App;
