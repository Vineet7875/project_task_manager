import React from 'react';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import BarChart from './BarChart';
import { makeStyles } from '@material-ui/core/styles';
import data from '../../../JSONDATA/data.json';
const useStyles = makeStyles((theme) => ({

    card: {
        background: 'none',
        boxShadow: 'none',
        [theme.breakpoints.down('xs')]: {
            width: '82vw'
        },

    },
}));

const Workload = () => {
    const classes = useStyles();
    const {
        Graphdata
    } = data;
    return (
        <Card className={classes.card}>
            <CardHeader
                title={
                    <>
                        <Typography variant="h6" style={{ color: 'black', fontWeight: 'bold', fontSize: '1.1rem' }}>
                            WORKLOAD
                        </Typography>
                        <Typography variant="subtitle2" style={{ color: 'black' }}>
                            27 June 2023
                        </Typography>
                    </>
                }
            />
            <CardContent>
                <BarChart Graphdata={Graphdata} />
            </CardContent>
        </Card>
    );
};

export default Workload;
