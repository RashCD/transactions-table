import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MaUTable from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import { useTable, useSortBy } from 'react-table';
import makeData from '../utils/makeData';
import Pill from './Pill';

const useStyles = makeStyles((theme) => ({
  icon: { fontSize: 15 },
  cell: { padding: '16px 3px 9px', textTransform: 'uppercase' },
  box: { display: 'flex', flexDirection: 'column' },
  textHeader: { fontSize: 12, fontWeight: '700' },
  textCell: { fontSize: 12, fontWeight: '600' },
  boxContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
}));

const Table = () => {
  const classes = useStyles();

  const columns = React.useMemo(
    () => [
      {
        Header: 'Status',
        accessor: 'status',
        Cell: (props) => <Pill type={props.type} text={props.cell.value} />,
      },
      {
        Header: 'Type',
        accessor: 'type',
      },
      {
        Header: 'Channel',
        accessor: 'bank',
      },
      {
        Header: 'Account',
        accessor: 'account',
      },
      {
        Header: 'Amount',
        accessor: 'amount',
      },
      {
        Header: 'Reference',
        accessor: 'reference',
      },
      {
        Header: 'Date Updated',
        accessor: 'date',
      },
    ],
    []
  );

  const data = React.useMemo(() => makeData(10), []);

  const { getTableProps, headerGroups, rows, prepareRow } = useTable(
    {
      columns,
      data,
    },
    useSortBy
  );

  const statusType = (value) => {
    switch (value) {
      case 'Settled':
      case 'Completed':
      case 'Paid':
      case 'Success':
        return 'success';
      case 'Pending':
        return 'pending';
      case 'Failed':
        return 'fail';
      default:
        return undefined;
    }
  };

  return (
    <MaUTable {...getTableProps()}>
      <TableHead>
        {headerGroups.map((headerGroup) => (
          <TableRow {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <TableCell
                {...column.getHeaderProps(column.getSortByToggleProps())}
                className={classes.cell}
              >
                <Box className={classes.boxContainer}>
                  <Typography variant="body1" className={classes.textHeader}>
                    {column.render('Header')}
                  </Typography>
                  <Box className={classes.box}>
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <>
                          <ArrowDropUpIcon
                            className={classes.icon}
                            style={{ visibility: 'hidden' }}
                          />
                          <ArrowDropDownIcon className={classes.icon} />
                        </>
                      ) : (
                        <>
                          <ArrowDropUpIcon className={classes.icon} />
                          <ArrowDropDownIcon
                            className={classes.icon}
                            style={{ visibility: 'hidden' }}
                          />
                        </>
                      )
                    ) : (
                      <>
                        <ArrowDropUpIcon className={classes.icon} />
                        <ArrowDropDownIcon className={classes.icon} />
                      </>
                    )}
                  </Box>
                </Box>
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableHead>
      <TableBody>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <TableRow {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <TableCell {...cell.getCellProps()}>
                    <Typography variant="body1" className={classes.textCell}>
                      {cell.render('Cell', { type: statusType(cell.value) })}
                    </Typography>
                  </TableCell>
                );
              })}
            </TableRow>
          );
        })}
      </TableBody>
    </MaUTable>
  );
};

export default Table;
