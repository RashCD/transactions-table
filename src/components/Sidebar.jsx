import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import HomeIcon from '@material-ui/icons/Home';
import ListAltIcon from '@material-ui/icons/ListAlt';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import GroupIcon from '@material-ui/icons/Group';
import SettingsIcon from '@material-ui/icons/Settings';
import Drawer from '../components/Drawer';

const SidebarItem = [
  {
    text: 'Home',
    IconComponent: HomeIcon,
  },
  {
    text: 'Balance',
    IconComponent: ListAltIcon,
  },
  {
    text: 'Cash',
    IconComponent: LocalAtmIcon,
  },
  {
    text: 'Accept Payments',
    IconComponent: ArrowDownwardIcon,
  },
  {
    text: 'Send Payments',
    IconComponent: ArrowUpwardIcon,
  },
  {
    text: 'Callbacks',
    IconComponent: SwapHorizIcon,
  },
  {
    text: 'xenPlatform',
    IconComponent: GroupIcon,
  },
  {
    text: 'Settings',
    IconComponent: SettingsIcon,
  },
];

const useStyles = makeStyles((theme) => ({
  text: { fontSize: 12, fontWeight: 600, lineHeight: '16.34px' },
  icon: { minWidth: 0, marginRight: 15 },
  topGap: { marginTop: 33 },
  leftGap: { paddingLeft: 16 },
  selected: {
    '&.Mui-selected': {
      backgroundColor: '#90abff',
      width: '93%',
      borderTopRightRadius: '5px',
      borderBottomRightRadius: '5px',
    },
  },
}));

const Sidebar = (props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const classes = useStyles();

  const onItemClick = (id) => setSelectedIndex(id);

  return (
    <Drawer variant="permanent" open={props.open}>
      <List component="nav" aria-label="main mailbox folders">
        {SidebarItem.map(({ text, IconComponent }, index) => (
          <ListItem
            key={index}
            button
            className={`${classes.selected} ${
              index === 3 || index === 5 || index === 7
                ? classes.topGap
                : classes.leftGap
            }`}
            selected={selectedIndex === index}
            onClick={() => onItemClick(index)}
          >
            <ListItemIcon className={classes.icon}>
              <IconComponent color="secondary" />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography color="secondary" className={classes.text}>
                  {text}
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
