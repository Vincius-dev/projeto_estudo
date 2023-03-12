import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';


import { navbarItems } from './consts/navbarItems';
import { navbarPerfilItems } from './consts/navbarPerfilItems';

import { navbarStyles } from './styles';

const Navbar = () => {    
    return (
        <Drawer
        sx={navbarStyles.drawer}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {navbarItems.map((text, index) => (
            <ListItem key={text.id} disablePadding>
              <ListItemButton>
                <ListItemIcon sx={navbarStyles.icons}>
                  {text.icon}
                </ListItemIcon>
                <ListItemText 
                sx={navbarStyles.text}
                primary={text.label} 
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {navbarPerfilItems.map((text, index) => (
            <ListItem key={text.id} disablePadding>
              <ListItemButton>
                <ListItemIcon sx={navbarStyles.icons}>
                  {text.icon}
                </ListItemIcon>
                <ListItemText
                sx={navbarStyles.text}
                primary={text.label} 
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    )
};

export default Navbar;