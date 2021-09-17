import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Table from './Table';
import FilterOptions from './FilterOptions';
import DateOptions from './DateOptions';
import Search from './Search';
import ExportButton from './ExportButton';

const useStyles = makeStyles((theme) => ({
  boxContainer: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: { marginTop: 20, marginBottom: 4 },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  top: {
    '& > *': {
      marginRight: '10px',
    },
  },
}));

const Content = () => {
  const classes = useStyles();

  return (
    <Box component="main" className={classes.boxContainer}>
      <Toolbar />
      <Container maxWidth="lg" className={classes.container}>
        <Paper className={classes.paper}>
          <Box display="flex" flexDirection="row" p={2} className={classes.top}>
            <FilterOptions />
            <DateOptions />
            <Search />
            <ExportButton />
          </Box>
          <Divider />
          <Box px={2}>
            <Table />
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Content;
