import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Content from '../components/Content';

const Transaction = () => {
  const [open, setOpen] = useState(true);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box style={{ display: 'flex' }}>
      {/* App Header */}
      <Header open={open} toggleDrawer={toggleDrawer} />
      {/* Sidebar Drawer */}
      <Sidebar open={open} />
      {/* Content */}
      <Content />
    </Box>
  );
};

export default Transaction;
