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
    taskCard: {
        marginTop: '1rem',
        maxHeight: '100vh',
        overflowY: 'auto',
        marginLeft: '3.5rem',
        maxWidth: '100vw',
        [theme.breakpoints.down('md')]: {
            marginLeft: '5rem',
        },
        [theme.breakpoints.down('xs')]: {
            marginLeft: '4rem',
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
        fontSize: '0.8rem',
        '&:hover': {
            backgroundColor: '#3f51b5d4',
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
                    <Typography variant="h6" style={{ color: 'black', fontWeight: 'bold', fontSize: '1.3rem' }}>
                        TASK
                    </Typography>
                }
                action={
                    <Button onClick={handleDialogToggle} variant="contained" color="primary" className={classes.button}>
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
                        <Table className={classes.table}>
                            <TableHead>
                                <TableRow >
                                    <TableCell>Project</TableCell>
                                    <TableCell>Due Date</TableCell>
                                    <TableCell>Task</TableCell>
                                    <TableCell>Task Status</TableCell>
                                    <TableCell>Actions</TableCell>
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
                                        <TableCell>{task.date}</TableCell>
                                        <TableCell>{task.selectedTask}</TableCell>
                                        <TableCell>{task.selectedTaskstatus}</TableCell>
                                        <TableCell>
                                            <IconButton color="primary" onClick={() => handleEditTask(task)}>
                                                <Edit />
                                            </IconButton>
                                            <IconButton color="secondary" onClick={() => handleDeleteTask(task.id)}>
                                                <Delete />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
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
