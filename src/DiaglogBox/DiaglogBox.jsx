import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dialog, DialogContent, DialogActions, Button, TextField, MenuItem, Select, InputLabel } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    title: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        fontFamily: 'Titillium Web, sans-serif',
    },
    inputField: {
        margin: '1rem 0',
        '& .MuiInputLabel-root': {
            fontFamily: 'Titillium Web, sans-serif',
            fontSize: '1rem',
            color: 'black'
        },
        '& .MuiInputBase-input': {
            fontFamily: 'Titillium Web, sans-serif',
            fontSize: '1rem',
            fontWeight: 'normal',
        },
    },
    submitButton: {
        fontFamily: 'Titillium Web, sans-serif',
        backgroundColor: 'orange',
        color: 'white',
        padding: '0.4rem 3.5rem',
        borderRadius: '3rem',
        fontSize: '1rem',
        cursor: 'pointer',
        border: '1px solid orange',
        '&:hover': {
            backgroundColor: '#ffa500b3',
            color: 'white'
        },
    },
}));

function DialogBox({ onClose, onSubmit, onEdit, editingTask }) {
    const navigate = useNavigate();
    const classes = useStyles();
    const [name, setName] = useState('');
    const [projectname, setprojectName] = useState('');
    const [date, setDate] = useState('');
    const [selectedTask, setSelectedTask] = useState('');
    const [selectedTaskstatus, setSelectedTaskstatus] = useState('');
    const [nameError, setNameError] = useState('');
    const [projectnameError, setprojectNameError] = useState('');
    const [dateError, setDateError] = useState('');
    const [selectedTaskError, setSelectedTaskError] = useState('');
    const [selectedTaskstatusError, setSelectedTaskstatusError] = useState('');
    const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);

    const taskOptions = ['Design UI', 'Testing', 'Other'];
    const taskstatusOptions = ['Assigned', 'Pending', 'Urgent'];

    const handleClose = () => {
        onClose();
        console.log("close");
    };


    const handleSubmit = () => {
        // Perform validation
        if (name.trim() === '') {
            setNameError('Please enter a name.');
            return;
        }

        if (projectname.trim() === '') {
            setprojectNameError('Please enter a project name.');
            return;
        }

        if (selectedTask === '') {
            setSelectedTaskError('Please select a task.');
            return;
        }

        if (selectedTaskstatus === '') {
            setSelectedTaskstatusError('Please select a task status.');
            return;
        }

        if (editingTask) {
            // Use the onEdit prop to update the task
            const updatedTaskData = {
                id: editingTask.id,
                name,
                projectname,
                selectedTask,
                selectedTaskstatus,
                date,
            };
            onEdit(updatedTaskData); // Call the onEdit function with the updated task data
        } else {
            // Proceed with the original submission logic for adding a new task
            const taskData = {
                name,
                projectname,
                selectedTask,
                selectedTaskstatus,
                date,
            };
            onSubmit(taskData);
        }

        onClose();
    };

    // Set the initial state of the form fields to the task data received as a prop
    useEffect(() => {
        if (editingTask) {
            setName(editingTask.name);
            setprojectName(editingTask.projectname);
            setDate(editingTask.date);
            setSelectedTask(editingTask.selectedTask);
            setSelectedTaskstatus(editingTask.selectedTaskstatus);
        }
    }, [editingTask]);

    return (
        <>
            <Dialog
                open
                onClose={handleClose}
                maxWidth="sm"
                fullWidth
                PaperProps={{
                    style: {
                        borderRadius: '20px',
                        textAlign: 'center',
                        alignItems: 'center',
                        padding: '2rem',
                        maxWidth: '400px',
                        maxHeight: '400px'
                    },
                }}
            >
                <DialogContent>
                    <TextField
                        label="Username"
                        className={classes.inputField}
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                            setNameError('');
                        }}
                        fullWidth

                        error={!!nameError}
                        helperText={nameError}
                    />

                    <TextField
                        label="Project Name"
                        className={classes.inputField}
                        value={projectname}
                        onChange={(e) => {
                            setprojectName(e.target.value);

                        }}
                        fullWidth

                        error={!!projectnameError}
                        helperText={projectnameError}

                    />

                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '0.5rem', gap: '1rem' }}>
                        <InputLabel style={{ color: 'black' }} id="task-label" className={classes.inputField}>
                            Task
                        </InputLabel>
                        <Select
                            labelId="task-label"
                            id="task-select"
                            value={selectedTask}
                            onChange={(e) => setSelectedTask(e.target.value)}
                            fullWidth

                            error={!!selectedTaskError}
                            helperText={selectedTaskError}
                            className={classes.inputField}
                        >
                            {taskOptions.map((taskOption, index) => (
                                <MenuItem key={index} value={taskOption}>
                                    {taskOption}
                                </MenuItem>
                            ))}
                        </Select>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '0.5rem', gap: '1rem' }}>
                        <InputLabel style={{ color: 'black' }} id="taskstatus-label" className={classes.inputField}>
                            Status
                        </InputLabel>
                        <Select
                            labelId="taskstatus-label"
                            id="taskstatus-select"
                            value={selectedTaskstatus}
                            onChange={(e) => setSelectedTaskstatus(e.target.value)}
                            fullWidth


                            error={!!selectedTaskstatusError}
                            helperText={selectedTaskstatusError}
                            className={classes.inputField}
                        >
                            {taskstatusOptions.map((taskstatusOption, index) => (
                                <MenuItem key={index} value={taskstatusOption}>
                                    {taskstatusOption}
                                </MenuItem>
                            ))}
                        </Select>
                    </div>
                    <TextField
                        type="date"

                        className={classes.inputField}
                        value={date}
                        onChange={(e) => {
                            setDate(e.target.value);
                            setDateError('');
                        }}
                        fullWidth
                        style={{ marginTop: '2rem' }}
                        error={!!dateError}
                        helperText={dateError}
                    />

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleSubmit} color="primary" className={classes.submitButton}>
                        {editingTask ? 'Update' : 'Submit'} 
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default DialogBox;
