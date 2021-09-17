import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  search: {
    height: '40px',

    '& > div > input': {
      padding: '11px',
    },
  },
}));

const Search = () => {
  const classes = useStyles();

  return (
    <Box display="flex" flex={2}>
      <TextField
        className={classes.search}
        id="outlined-basic"
        variant="outlined"
        placeholder="Search by phone number or external ID"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default Search;
