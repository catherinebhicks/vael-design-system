import React from 'react';
import { Box, AppBar, Toolbar, Typography, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faGauge, faFolder, faChartLine, faUsers, faGear, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { ExampleFrame } from './ExampleFrame';

const NAV: { icon: IconDefinition; label: string; active?: boolean }[] = [
  { icon: faGauge, label: 'Dashboard', active: true },
  { icon: faFolder, label: 'Projects' },
  { icon: faChartLine, label: 'Reports' },
  { icon: faUsers, label: 'Team' },
  { icon: faGear, label: 'Settings' },
];

/** Desktop navigation shell — fixed top AppBar + persistent left Drawer. */
export function NavShellExample() {
  return (
    <ExampleFrame padded={false}>
      <Box sx={{ height: 340, display: 'flex', flexDirection: 'column' }}>
        <AppBar position="static" color="default" elevation={0} sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Toolbar variant="dense">
            <IconButton edge="start" size="small" aria-label="Toggle navigation" sx={{ mr: 1 }}>
              <FontAwesomeIcon icon={faBars} style={{ fontSize: 16 }} />
            </IconButton>
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
              Vael
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <IconButton size="small" aria-label="Account">
              <FontAwesomeIcon icon={faCircleUser} style={{ fontSize: 18 }} />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Box sx={{ display: 'flex', flex: 1, minHeight: 0 }}>
          <Box sx={{ width: 200, borderRight: 1, borderColor: 'divider', flexShrink: 0 }}>
            <List dense>
              {NAV.map((item) => (
                <ListItemButton key={item.label} selected={item.active}>
                  <ListItemIcon sx={{ minWidth: 34 }}>
                    <FontAwesomeIcon icon={item.icon} style={{ fontSize: 16 }} />
                  </ListItemIcon>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              ))}
            </List>
          </Box>
          <Box sx={{ flex: 1, p: 3 }}>
            <Typography variant="h6">Dashboard</Typography>
            <Typography variant="body2" color="text.secondary">
              Page content renders here, offset by the drawer width.
            </Typography>
          </Box>
        </Box>
      </Box>
    </ExampleFrame>
  );
}

export default NavShellExample;
