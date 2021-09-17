import React from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import CloudIcon from '@material-ui/icons/Cloud';

const ExportButton = () => {
  return (
    <Box display="flex" flex={1}>
      <Button
        variant="contained"
        color="primary"
        startIcon={<CloudIcon />}
        style={{ textTransform: 'none' }}
      >
        Export
      </Button>
    </Box>
  );
};

export default ExportButton;
