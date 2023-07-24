import React from 'react';
import { Card, CardHeader, CardContent, Typography, IconButton } from '@material-ui/core';
import { Add, Notifications } from '@material-ui/icons';
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

const NotificationsComponent = ({ notificationsData }) => {
  const classes = useStyles();
  const getIconComponent = (iconName) => {
    if (iconName === 'Notifications') return <Notifications />;
    return null; // Add a default icon here if needed
  };

  return (
    <Card className={classes.card}>
      <CardHeader
        title={
          <Typography variant="h6" style={{ color: 'black', fontWeight: 'bold', fontSize: '1.1rem' }}>
            NOTIFICATIONS
          </Typography>
        }
        action={
          <div style={{ display: 'flex',alignItems:'center' }}>
            <IconButton color="primary">
              <Add style={{ background: '#3982fd', borderRadius: '8px', padding: '3px', color: 'white', fontSize: '1.2rem' }} />
            </IconButton>
            <Notifications />
          </div>
        }
      />
      <CardContent>
        {notificationsData.map((notification, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: 8, gap: '0.4rem' }}>
            {getIconComponent(notification.icon)}
            <Typography variant="body1">{notification.text}</Typography>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default NotificationsComponent;
