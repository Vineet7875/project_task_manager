import React from 'react';
import { Card, CardHeader, CardContent, Typography, IconButton } from '@material-ui/core';
import { AddCircleOutline,Add } from '@material-ui/icons';
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

const ToDoList = ({ toDoListData }) => {
    const classes = useStyles();
    const getIconComponent = (iconName) => {
        if (iconName === 'AddCircleOutline') return <AddCircleOutline />;
        return null; // Add a default icon here if needed
      };
    return (
        <Card className={classes.card}>
            <CardHeader
                title={
                    <Typography variant="h6" style={{ color: 'black', fontWeight: 'bold', fontSize: '1.1rem' }}>
                        TO DO LIST
                    </Typography>
                }
                action={
                    <IconButton color="primary">
                <Add style={{background:'#3982fd',borderRadius:'8px',padding:'3px',color:'white',fontSize:'1.2rem'}}/>
              </IconButton>
                }
            />
            <CardContent>
                {toDoListData.map((item, index) => (
                    <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: 8, gap: '0.4rem' }}>

                    {getIconComponent(item.icon)}
                        <Typography variant="body1">{item.text}</Typography>
                    </div>
                ))}
            </CardContent>
        </Card>
    );
};

export default ToDoList;
