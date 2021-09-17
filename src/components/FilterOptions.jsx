import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import {
  statusTypeConstant,
  paymentTypeConstant,
  channelTypeConstant,
} from '../utils/constants';

const useStyles = makeStyles((theme) => ({
  button: {
    textTransform: 'none',
    fontSize: '12px',
    fontWeight: '600',
  },
  clearAllButton: {
    textTransform: 'none',
    fontSize: '12px',
    // border: '1px solid #CFCFCF',
    boxSizing: 'border-box',
    borderRadius: '4px',
  },
  applyFilterButton: {
    textTransform: 'none',
    fontSize: '12px',
    boxSizing: 'border-box',
    borderRadius: '4px',
  },
  filterContent: {
    width: '668px',
    padding: '10px',
  },
  sortItem: {
    padding: '10px 10px 0',
    alignItems: 'center',
  },
  sortItemText: {
    fontSize: '12px',
    fontWeight: 'bold',
  },
  formControlLabel: {
    '& > span': {
      fontSize: '12px',
      fontWeight: '400',
    },
  },
}));

const FilterOptions = () => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [checkboxValueList, setCheckboxValueList] = React.useState([]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onClickCheckbox = (event) => {
    if (checkboxValueList.some((val) => val === event.target.value)) {
      return setCheckboxValueList((prev) =>
        prev.filter((val) => val !== event.target.value)
      );
    }
    return setCheckboxValueList((prev) => [...prev, event.target.value]);
  };

  const onClickResetList = () => {
    setCheckboxValueList([]);
  };

  const open = Boolean(anchorEl);

  return (
    <Box display="flex">
      <Button
        variant="outlined"
        color="default"
        endIcon={<ArrowDropDownIcon />}
        className={classes.button}
        onClick={handleClick}
        disableElevation
      >
        Filter ({checkboxValueList.length})
      </Button>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        style={{ top: 8 }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <Box
          className={classes.filterContent}
          display="flex"
          flexDirection="column"
        >
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            pb={1}
          >
            <Button
              variant="outlined"
              color="primary"
              className={classes.clearAllButton}
              disableElevation
              onClick={onClickResetList}
              disabled={!checkboxValueList.length}
            >
              Clear All
            </Button>
            <Button
              variant="contained"
              color="primary"
              disableElevation
              disabled={!checkboxValueList.length}
              className={classes.applyFilterButton}
            >
              Apply filter
            </Button>
          </Box>
          <Divider />
          <Box display="flex" flexDirection="row" flex={1}>
            <Box
              display="flex"
              flexDirection="column"
              flex={1}
              className={classes.sortItem}
            >
              <Typography className={classes.sortItemText}>
                MONEY IN STATUS
              </Typography>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="flex-start"
              >
                {Object.values(statusTypeConstant).map((status, index) => (
                  <FormGroup key={`moneyIn-${index}`}>
                    <FormControlLabel
                      control={<Checkbox color="primary" value={status} />}
                      label={status}
                      className={classes.formControlLabel}
                      onChange={onClickCheckbox}
                      checked={checkboxValueList.some((val) => val === status)}
                    />
                  </FormGroup>
                ))}
              </Box>
            </Box>
            <Divider orientation="vertical" flexItem />
            <Box
              display="flex"
              flexDirection="column"
              flex={1}
              className={classes.sortItem}
            >
              <Typography className={classes.sortItemText}>
                MONEY OUT STATUS
              </Typography>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="flex-start"
              >
                {['out:Completed', 'out:Pending', 'out:Failed'].map(
                  (status, index) => (
                    <FormGroup key={`moneyOut-${index}`}>
                      <FormControlLabel
                        control={<Checkbox color="primary" value={status} />}
                        label={status}
                        className={classes.formControlLabel}
                        onChange={onClickCheckbox}
                        checked={checkboxValueList.some(
                          (val) => val === status
                        )}
                      />
                    </FormGroup>
                  )
                )}
              </Box>
            </Box>
            <Divider orientation="vertical" flexItem />
            <Box
              display="flex"
              flexDirection="column"
              flex={1}
              className={classes.sortItem}
            >
              <Typography className={classes.sortItemText}>TYPE</Typography>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="flex-start"
              >
                {Object.values(paymentTypeConstant).map((status, index) => (
                  <FormGroup key={`type-${index}`}>
                    <FormControlLabel
                      control={<Checkbox color="primary" value={status} />}
                      label={status}
                      className={classes.formControlLabel}
                      onChange={onClickCheckbox}
                      checked={checkboxValueList.some((val) => val === status)}
                    />
                  </FormGroup>
                ))}
              </Box>
            </Box>
            <Divider orientation="vertical" flexItem />
            <Box
              display="flex"
              flexDirection="column"
              flex={1}
              className={classes.sortItem}
            >
              <Typography className={classes.sortItemText}>CHANNEL</Typography>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="flex-start"
              >
                {Object.values(channelTypeConstant).map((status, index) => (
                  <FormGroup key={`channel-${index}`}>
                    <FormControlLabel
                      control={<Checkbox color="primary" value={status} />}
                      label={status}
                      className={classes.formControlLabel}
                      onChange={onClickCheckbox}
                      checked={checkboxValueList.some((val) => val === status)}
                    />
                  </FormGroup>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Popover>
    </Box>
  );
};

export default FilterOptions;
