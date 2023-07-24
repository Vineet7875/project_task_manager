import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BitcoinIcon from '@mui/icons-material/AttachMoney';
import MicrosoftIcon from '@mui/icons-material/Computer';
import CalendarIcon from '@mui/icons-material/CalendarToday';

const useStyles = makeStyles((theme) => ({
  sidebar: {
    backgroundColor: '#f0f0f0;',
    height: '100vh',
    width: '60px', 
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    alignItems: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1,
    '@media (max-width: 500px)': {
      width: '50px', 
    },
  },
  icon: {
    margin: theme.spacing(2),
  },
}));

const Sidebar = () => {
  const classes = useStyles();

  return (
    <div className={classes.sidebar}>
      <BitcoinIcon className={classes.icon} />
      <MicrosoftIcon className={classes.icon} />
      <CalendarIcon className={classes.icon} />
    </div>
  );
};

export default Sidebar;
