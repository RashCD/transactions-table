import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import DoneIcon from '@material-ui/icons/Done';
import HourglassIcon from '@material-ui/icons/HourglassEmptyOutlined';
import ClearIcon from '@material-ui/icons/CloseOutlined';
import UndoIcon from '@material-ui/icons/Undo';

const checkColor = (theme, colorType) => {
  return ({ type }) => {
    if (type === 'success') return theme.palette.success[colorType];
    if (type === 'pending') return theme.palette.warning[colorType];
    if (type === 'fail') return theme.palette.error[colorType];
    return theme.palette.default[colorType];
  };
};

const useStyles = makeStyles((theme) => ({
  button: {
    padding: '5px 10px',
    borderRadius: '20px',
    background: checkColor(theme, 'light'),
  },
  text: {
    textTransform: 'none',
    fontSize: '12px',
    color: checkColor(theme, 'main'),
  },
  icon: {
    color: checkColor(theme, 'main'),
    fontSize: '12px',
  },
}));

const Pill = (props) => {
  const { type, text } = props;

  const classes = useStyles(props);

  if (type === 'success') {
    return (
      <Button
        variant="contained"
        startIcon={<DoneIcon className={classes.icon} />}
        className={classes.button}
        disableElevation
      >
        <Typography variant="body1" className={classes.text}>
          {text}
        </Typography>
      </Button>
    );
  }

  if (type === 'pending') {
    return (
      <Button
        variant="contained"
        startIcon={<HourglassIcon className={classes.icon} />}
        className={classes.button}
        disableElevation
      >
        <Typography variant="body1" className={classes.text}>
          {text}
        </Typography>
      </Button>
    );
  }

  if (type === 'fail') {
    return (
      <Button
        variant="contained"
        startIcon={<ClearIcon className={classes.icon} />}
        className={classes.button}
        disableElevation
      >
        <Typography variant="body1" className={classes.text}>
          {text}
        </Typography>
      </Button>
    );
  }

  return (
    <Button
      variant="contained"
      startIcon={<UndoIcon className={classes.icon} />}
      className={classes.button}
      disableElevation
    >
      <Typography variant="body1" className={classes.text}>
        {text}
      </Typography>
    </Button>
  );
};

export default Pill;
