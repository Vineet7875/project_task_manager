export const addTask = (taskData) => ({
  type: 'ADD_TASK',
  payload: taskData,
});

export const deleteTask = (taskId) => ({
  type: 'DELETE_TASK',
  payload: taskId,
});

export const editTask = (taskData) => ({
  type: 'EDIT_TASK',
  payload: taskData,
});
