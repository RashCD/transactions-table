import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import ButtonBase from '@material-ui/core/ButtonBase';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import CircleIcon from '@material-ui/icons/Lens';
import { ReactComponent as LogoIcon } from '../assets/logo.svg';
import AppBar from '../components/AppBar';

const useStyles = makeStyles((theme) => ({
  buttonBase: { padding: 10, borderRadius: 5 },
  title: { flexGrow: 1, marginLeft: 10, fontWeight: 'normal' },
  drawer: { marginRight: '16px' },
  toolbar: { pr: '24px' },
}));

const Header = (props) => {
  const { open, toggleDrawer } = props;

  const classes = useStyles();

  return (
    <AppBar position="absolute" color="secondary" open={open}>
      <Toolbar className={classes.toolbar}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer}
          className={classes.drawer}
        >
          {open ? <MenuIcon /> : <ChevronRightIcon />}
        </IconButton>
        <LogoIcon />
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          className={classes.title}
        >
          Xendit
        </Typography>
        <ButtonBase focusRipple className={classes.buttonBase}>
          <Box color="textGray" fontSize={14} fontWeight={400} pr={3}>
            Docs
          </Box>
        </ButtonBase>
        <ButtonBase focusRipple className={classes.buttonBase}>
          <Box color="textGray" fontSize={14} fontWeight={400} pr={3}>
            API Reference
          </Box>
        </ButtonBase>
        <ButtonBase focusRipple className={classes.buttonBase}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="flex-end"
            color="textGray"
            pr={1}
          >
            <Box fontSize={12} fontWeight="600">
              User Name
            </Box>
            <Box fontSize={12} fontWeight="400">
              User Business Name
            </Box>
          </Box>
          <Box color="gray">
            <CircleIcon />
          </Box>
        </ButtonBase>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
