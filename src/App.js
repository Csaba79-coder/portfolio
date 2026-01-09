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
          <AppBar position="static" className='header-color'>
              <Toolbar>
                  <IconButton
                      edge="start"
                      color="inherit"
                      aria-label="menu"
                      onClick={toggleDrawer(true)}
                      sx={{ mr: 2, display: { sm: 'none' } }}
                  >
                      <MenuIcon />
                  </IconButton>
                  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                      <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Csaba79-coder</Link>
                  </Typography>
                  <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                      {menuItems.map((item) => (
                          <Button key={item.text} component={Link} to={item.path} sx={{ color: 'white' }}>
                              {item.text}
                          </Button>
                      ))}
                  </Box>
              </Toolbar>
          </AppBar>

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
                  <Typography variant="h6" sx={{ p: 2, color: 'grey' }}>
                      <Link to="/" style={{ color: 'grey', textDecoration: 'none' }}>Csaba79-coder</Link>
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
