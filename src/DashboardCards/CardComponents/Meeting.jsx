// Meeting.js
import React from 'react';
import { Card, CardHeader, CardContent, Typography, IconButton, Grid, Avatar } from '@material-ui/core';
import { Add, Link } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    card: {
        background: 'none',
        boxShadow: 'none',
        [theme.breakpoints.down('xs')]: {
            width: '82vw'
        },

    },
}));

const Meeting = ({ meetingsData }) => {
  const classes = useStyles();

  return (
    <>
      {meetingsData.map((meeting, index) => (
        <Card key={index} className={classes.card}>
          <CardHeader
            title={
              <>
                <Typography variant="h6" style={{ color: 'black', fontWeight: 'bold', fontSize: '1.1rem' }}>
                  {meeting.title}
                </Typography>
                <Typography variant="subtitle2" style={{ color: 'black' }}>
                  {meeting.date}
                </Typography>
              </>
            }
            action={
              <IconButton color="primary">
                <Add />
              </IconButton>
            }
          />
          {meeting.attendees.map((attendee, i) => (
            <CardContent key={i}>
              <div style={{ display: 'flex' }}>
                <Grid item container alignItems="center">
                  <Grid item>
                    <Avatar src={attendee.avatar} alt="User Image" />
                  </Grid>
                  <Grid item style={{ marginLeft: 8 }}>
                    <Typography variant="subtitle2">
                      {attendee.name}
                    </Typography>
                    <Typography variant="caption">
                      {attendee.time}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <IconButton color="primary">
                    <Link />
                  </IconButton>
                </Grid>
              </div>
            </CardContent>
          ))}
        </Card>
      ))}
    </>
  );
};

export default Meeting;
