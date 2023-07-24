
import React from 'react';
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';
import { Grid } from '@material-ui/core';
import Sidebar from '../Navbar/sidebar';
import MainTasksCard from './CardComponents/MainTasksCard';
import Meeting from './CardComponents/Meeting';
import Leave from './CardComponents/Leave';
import Workload from './CardComponents/Workload/Workload';
import ToDoList from './CardComponents/ToDoList';
import NotificationsComponent from './CardComponents/NotificationsComponent';
import data from '../JSONDATA/data.json'; // Import the data from the data.json file

const Wrapper = styled('div')({
    display: 'grid',
    gridGap: '10px',
    padding: '0rem 1rem',
    marginTop: '1.5rem',
    gridTemplateColumns: '1fr 1fr',

    justifyContent: 'space-around',
    '@media (max-width: 1270px)': {
        gridTemplateColumns: '1fr 1fr',
        margin: '2rem 3rem',
        width: '100vw'
    },
    '@media (max-width: 770px)': {
        gridTemplateColumns: '1fr 1fr',
        margin: '2rem 3rem',
        width: '100vw'
    },
    '@media (max-width: 600px)': {
        gridTemplateColumns: '1fr',
        margin: '2rem 3rem',
        width: '100vw',
        gap: '1.5rem'
    },
    '@media (max-width: 500px)': {
        gridTemplateColumns: '1fr',
        margin: '2rem 2.5rem',
        width: '100vw',
        gap: '1.5rem'
    },

    color: '#444',
});

const Box = styled('div')({
    backgroundColor: '#f0f0f0',
    color: '#fff',
    borderRadius: '5px',
});


const theme = createTheme({
    palette: {
        background: {
            paper: 'none',
        },
    },
});

const Cards = () => {
  // Data fetched from data.json
  const {
    meetingsData,
    leaveData,
    toDoListData,
    notificationsData,
  } = data;

  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={2}>
        {/* Sidebar component */}
        <Grid item>
          <Sidebar />
        </Grid>
        {/* Main Task Card */}
        <Grid item xs={12} xl={6} lg={6}>
          <MainTasksCard />*
        </Grid>
        <Wrapper>
          {/* Meeting Card */}
          <Box>
            <Meeting meetingsData={meetingsData} />
          </Box>

          {/* ToDoList Card */}
          <Box style={{ gridRow: 'span 2' }}>
            <ToDoList toDoListData={toDoListData} />
          </Box>

          {/* Leave Card */}
          <Box>
            <Leave leaveData={leaveData} />
          </Box>

          {/* Work Card */}
          <Box>
            <Workload />
          </Box>

          {/* Notification Card */}
          <Box>
            <NotificationsComponent notificationsData={notificationsData} />
          </Box>
        </Wrapper>
      </Grid>
    </ThemeProvider>
  );
};

export default Cards;
