import React, { useReducer, useState } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import InputAdornments from './InputAdornments';

function TaskApp({ showToolbar, onSaveTraining }) {
    const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
    const [formData, setFormData] = useState({ trainingType: '', selectedDate: null, location: '', horse: '', trainer: '' });

    function handleAddTask(text) {
        dispatch({
            type: 'added',
            id: nextId++,
            text: text,
        });
    }

    function handleChangeTask(task) {
        dispatch({
            type: 'changed',
            task: task
        });
    }

    function handleDeleteTask(taskId) {
        dispatch({
            type: 'deleted',
            id: taskId
        });
    }

    function handleFormSubmit() {
        onSaveTraining(formData);
        setFormData({ trainingType: '', selectedDate: null, location: '', horse: '', trainer: '' }); // Reset form
    }

    return (
        <>
            <Box
                sx={{
                    margin: '20px'
                }}
            >
                <InputAdornments formData={formData} setFormData={setFormData} onSave={handleFormSubmit} />
            </Box>
            <h1 style={{ textAlign: 'left', margin: '40px' }}>Goal</h1>
            <AddTask onAddTask={handleAddTask} />
            <TaskList
                tasks={tasks}
                onChangeTask={handleChangeTask}
                onDeleteTask={handleDeleteTask}
            />
        </>
    );
}

function tasksReducer(tasks, action) {
    switch (action.type) {
        case 'added': {
            return [...tasks, {
                id: action.id,
                text: action.text,
                done: false
            }];
        }
        case 'changed': {
            return tasks.map(t => {
                if (t.id === action.task.id) {
                    return action.task;
                } else {
                    return t;
                }
            });
        }
        case 'deleted': {
            return tasks.filter(t => t.id !== action.id);
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}

let nextId = 3;
const initialTasks = [
    { id: 0, text: 'Ride bareback', done: true },
    { id: 1, text: 'Practice without stirrups in canter', done: false },
    { id: 2, text: 'Advanced lunging techniques', done: false }
];

export default TaskApp;
