import { createStore } from 'redux';

// Generate a unique id for a task
const generateUniqueId = () => {
  return Math.random().toString(36).substr(2, 9);
};

// Load tasks from local storage
const getTasksFromLocalStorage = () => {
  const tasksString = localStorage.getItem('tasks');
  return tasksString ? JSON.parse(tasksString) : [];
};

// Save tasks to local storage
const saveTasksToLocalStorage = (tasks) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

// Define the initial state for your tasks
const initialState = {
  tasks: getTasksFromLocalStorage(), // Load initial tasks from local storage
};

// Define the reducer function to update the state
const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      const newTask = {
        ...action.payload,
        id: generateUniqueId(),
      };
      const filteraddedTasks = [...state.tasks, newTask];
      saveTasksToLocalStorage(filteraddedTasks); // Save tasks to local storage
      return {
        ...state,
        tasks: filteraddedTasks,
      };
    case 'DELETE_TASK':
      const filteredTasks = state.tasks.filter((task) => task.id !== action.payload);
      saveTasksToLocalStorage(filteredTasks); // Save tasks to local storage
      return {
        ...state,
        tasks: filteredTasks,
      };
    case 'EDIT_TASK':
      const editedTasks = state.tasks.map((task) =>
        task.id === action.payload.id ? { ...task, ...action.payload } : task
      );
      saveTasksToLocalStorage(editedTasks); // Save tasks to local storage
      return {
        ...state,
        tasks: editedTasks,
      };
    default:
      return state;
  }
};

// Create the store
const store = createStore(tasksReducer);

export default store;
