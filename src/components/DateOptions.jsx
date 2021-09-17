import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  dateContainer: {
    height: '40px',
    '& > div > div': {
      fontSize: '12px',
    },
    '& > div > div > input': {
      padding: '13px',
    },
  },
}));

const DateOptions = () => {
  const classes = useStyles();

  return (
    <Box display="flex" flex={1} className={classes.dateContainer}>
      <TextField
        id="startDate"
        variant="outlined"
        type="date"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <Box
        display="flex"
        flex={0.2}
        justifyContent="center"
        alignItems="center"
        style={{ marginLeft: 3, marginRight: 3 }}
      >
        {' '}
        -{' '}
      </Box>
      <TextField
        id="endDate"
        variant="outlined"
        type="date"
        InputLabelProps={{
          shrink: true,
        }}
      />
    </Box>
  );
};

export default DateOptions;
