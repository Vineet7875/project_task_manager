import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createTheme } from '@mui/material/styles';
import Button from '@material-ui/core/Button';
import { Card, CardHeader, CardContent, Table, TableHead, TableBody, TableRow, TableCell, IconButton, Grid, Avatar, Typography, makeStyles } from '@material-ui/core';
import { Add, Edit, Delete } from '@material-ui/icons';
import { addTask, deleteTask, editTask } from '../../Redux/action';
import DialogBox from '../../DiaglogBox/DiaglogBox';

const theme = createTheme({
    palette: {
        background: {
            paper: 'none',
        },
    },
});

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
    tablehead: {
        fontWeight: 'bold'
    },
    taskCard: {
        background: '#f0f0f0',
        marginTop: '1rem',
        maxHeight: '100vh',
        overflowY: 'auto',
        marginLeft: '3rem',
        maxWidth: '100vw',
        [theme.breakpoints.down('md')]: {
            marginLeft: '4rem',
        },
        [theme.breakpoints.down('xs')]: {
            marginLeft: '3rem',
        },

    },
    card: {
        background: 'none',
        boxShadow: 'none',
        [theme.breakpoints.down('xs')]: {
            width: '82vw'
        },

    },
    button: {
        marginLeft: 'auto',
        marginTop: '0.7rem',
        color: 'white',
        fontSize: '0.8rem',
        background: '#3982fd',
        '&:hover': {
            backgroundColor: '#3982fdd4',
        },
    },

}));

const MainTaskCard = () => {
    const classes = useStyles();

    const [isDialogOpen, setDialogOpen] = useState(false);
    const [editingTask, setEditingTask] = useState(null);

    const handleDialogToggle = () => {
        setDialogOpen(!isDialogOpen);
        setEditingTask(null);
    };

    const tasksData = useSelector((state) => state.tasks);
    const dispatch = useDispatch();

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'long' });
        return `${day} ${month}`;
    };

    const handleFormSubmit = (taskData) => {
        dispatch(addTask(taskData));
    };

    const handleDeleteTask = (taskId) => {
        dispatch(deleteTask(taskId));
    };

    const handleEditTask = (task) => {
        setEditingTask(task);
        setDialogOpen(true);
        dispatch(editTask(task));
    };

    return (
        <Card className={`card ${classes.taskCard}`}>
            <CardHeader
                title={
                    <Typography variant="h6" style={{ color: 'black', fontWeight: 'bold', fontSize: '1.1rem' }}>
                        TASKS
                    </Typography>
                }
                action={
                    <Button onClick={handleDialogToggle} variant="contained" className={classes.button}>
                        Add Task
                    </Button>
                }
            />
            <CardContent>
                {tasksData.length === 0 ? (
                    <Typography variant="h6" style={{ textAlign: "center", marginTop: "20px", color: 'black', fontWeight: 'bold', fontSize: '1.3rem' }}>
                        NO TASKS
                    </Typography>
                ) : (
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow >
                                <TableCell className={classes.tablehead}>Project</TableCell>
                                <TableCell className={classes.tablehead}>Due Date</TableCell>
                                <TableCell className={classes.tablehead}>Task</TableCell>
                                <TableCell className={classes.tablehead}>Task Status</TableCell>
                                <TableCell className={classes.tablehead}>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {tasksData.map((task, index) => (
                                <TableRow key={index}>
                                    {console.log(task)}
                                    <TableCell>
                                        <Grid container alignItems="center" spacing={2}>
                                            <Grid item>
                                                <Avatar alt={task.projectname} src={`vineet1.jpeg`} style={{ width: 32, height: 32, fontSize: 16 }} />
                                            </Grid>
                                            <Grid item>
                                                <Typography variant="body1">{task.projectname}</Typography>
                                            </Grid>
                                        </Grid>
                                    </TableCell>
                                    <TableCell>{formatDate(task.date)}</TableCell> {/* Use the formatDate function here */}
                                    <TableCell>{task.selectedTask}</TableCell>
                                    <TableCell style={{ color: task.selectedTaskstatus === 'Pending' ? 'red' : 'inherit' }}>
                                        {task.selectedTaskstatus}
                                    </TableCell>
                                    <TableCell>
                                        <IconButton style={{ color: 'black' }} onClick={() => handleEditTask(task)}>
                                            <Edit />
                                        </IconButton>
                                        <IconButton style={{ color: 'black' }} onClick={() => handleDeleteTask(task.id)}>
                                            <Delete />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                )}
            </CardContent>
            {isDialogOpen && (
                <DialogBox
                    onClose={handleDialogToggle}
                    onSubmit={handleFormSubmit}
                    onEdit={handleEditTask}
                    editingTask={editingTask}
                />
            )}
        </Card>
    );
};

export default MainTaskCard;
