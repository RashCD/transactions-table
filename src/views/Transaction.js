import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import CircleIcon from '@material-ui/icons/Lens';
import AppBar from '../components/AppBar';
import Sidebar from '../components/Sidebar';
import { ReactComponent as LogoIcon } from '../assets/logo.svg';

const Transaction = () => {
  const [open, setOpen] = useState(true);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box style={{ display: 'flex' }}>
      {/* App Header */}
      <AppBar position="absolute" color="secondary" open={open}>
        <Toolbar
          style={{
            pr: '24px', // keep right padding when drawer closed
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            style={{ marginRight: '16px' }}
          >
            {open ? <MenuIcon /> : <ChevronRightIcon />}
          </IconButton>
          <LogoIcon />
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            style={{ flexGrow: 1, marginLeft: 10, fontWeight: 'normal' }}
          >
            Xendit
          </Typography>
          <Box color="textGray" fontSize={14} fontWeight={400} pr={3}>
            Docs
          </Box>
          <Box color="textGray" fontSize={14} fontWeight={400} pr={3}>
            API Reference
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="flex-end"
            color="textGray"
            pr={1}
          >
            <Box fontSize={12} fontWeight="500">
              User Name
            </Box>
            <Box fontSize={12} fontWeight="400">
              User Business Name
            </Box>
          </Box>
          <Box color="gray">
            <CircleIcon />
          </Box>
        </Toolbar>
      </AppBar>
      {/* Drawer */}
      <Sidebar open={open} />
      {/* Content */}
      <Box
        component="main"
        style={{
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
        }}
      >
        <Toolbar />
        <Container maxWidth="lg" style={{ marginTop: 20, marginBottom: 4 }}>
          <Grid container spacing={3}>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper
                style={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  height: 240,
                }}
              >
                TEST
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Transaction;
