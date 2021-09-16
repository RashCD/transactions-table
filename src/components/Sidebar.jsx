import React, { useState } from 'react';
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

const Sidebar = (props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onItemClick = (id) => setSelectedIndex(id);

  return (
    <Drawer variant="permanent" open={props.open}>
      <List component="nav" aria-label="main mailbox folders">
        {SidebarItem.map(({ text, IconComponent }, index) => (
          <ListItem
            key={index}
            button
            style={Object.assign(
              index === 3 || index === 5 || index === 7
                ? {
                    marginTop: 33,
                  }
                : {},
              { paddingLeft: 20 }
            )}
            selected={selectedIndex === index}
            onClick={() => onItemClick(index)}
          >
            <ListItemIcon style={{ minWidth: 0, marginRight: 12 }}>
              <IconComponent color="secondary" />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography
                  color="secondary"
                  style={{ fontSize: 12, fontWeight: 600 }}
                >
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
