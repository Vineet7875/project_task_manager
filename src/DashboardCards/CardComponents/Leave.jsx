import React from 'react';
import { Card, CardHeader, CardContent, Table, TableBody, TableRow, TableCell, IconButton, Typography } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    table: {
        '& th, & td': {
            padding: 0,
        },
    },
    tableLeave: {
        '& th, & td': {
            padding: '8px 5px',
        },
    },

    card: {
        background: 'none',
        boxShadow: 'none',
        [theme.breakpoints.down('xs')]: {
            width: '82vw'
        },

    },
}));

const Leave = ({ leaveData }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader
        title={
          <>
            <Typography variant="h6" style={{ color: 'black', fontWeight: 'bold', fontSize: '1.1rem' }}>
              LEAVE
            </Typography>
            <Typography variant="subtitle2" style={{ color: 'black' }}>
              27 June 2023
            </Typography>
          </>
        }
        action={
          <IconButton color="primary">
                <Add style={{background:'#3982fd',borderRadius:'8px',padding:'3px',color:'white',fontSize:'1.2rem'}}/>
              </IconButton>
        }
      />
      <CardContent>
        <Table className={classes.tableLeave}>
          <TableBody>
            {leaveData.map((leave, index) => (
              <TableRow key={index}>
                <TableCell>{leave.name}</TableCell>
                <TableCell>{leave.department}</TableCell>
                <TableCell>{leave.type}</TableCell>
                <TableCell>{leave.dates}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default Leave;
