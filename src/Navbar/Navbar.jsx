import React from 'react';
import { createTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, IconButton, Avatar } from '@material-ui/core';
import { Search as SearchIcon } from '@material-ui/icons';
const useStyles = makeStyles((theme) => ({
  navbar: {
    backgroundColor: 'white',
    paddingLeft: '3rem'
  },
  searchField: {
    display: 'flex',
    alignItems: 'center',
    borderRadius: '4px',
    background: '#f0f0f0',
    padding: '0px 8px',
    marginRight: '12px',

    [theme.breakpoints.down('xs')]: {
      display: 'none'
      // width:'10rem'
    },
  },
  searchIcon: {
    fontSize: '1.2rem',
    color: 'black',
  },
  searchInput: {
    border: 'none',
    outline: 'none',
    background: 'transparent',
    marginLeft: '8px',
    flex: '1',
    color: 'black',
    fontSize: '0.9rem',
  },
  dashboardHeading: {
    [theme.breakpoints.down('sm')]: {
      marginRight: '1rem'
    },

    [theme.breakpoints.down('xs')]: {
      fontSize: '1.3rem',
      marginRight: '1rem'
    },
  },
  username:{
    
    [theme.breakpoints.down('xs')]: {
      display:'none'
    },
  }

}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.navbar} style={{ boxShadow: 'none' }}>
      <Toolbar style={{ justifyContent: 'space-between' }}>
        {/* Left side content */}
        <Typography variant="h5" className={classes.dashboardHeading} style={{ flexGrow: 1, color: 'black', fontWeight: 'bold' }}>
          Dashboard
        </Typography>

        {/* Right side content */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {/* Search field */}
          <div className={classes.searchField}>
            <IconButton color="inherit">
              <SearchIcon className={classes.searchIcon} />
            </IconButton>
            <input
              type="text"
              placeholder="Search"
              className={classes.searchInput}
            />
          </div>

          {/* User image and name */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Avatar src="vineet1.jpeg" alt="User Avatar" style={{ marginRight: '10px' }} />
            <Typography variant="body1" className={classes.username} style={{ color: 'black' }}>Vineet Jadhav</Typography>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

const theme = createTheme();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      {/* Other components and content */}
    </ThemeProvider>
  );
};

export default App;
