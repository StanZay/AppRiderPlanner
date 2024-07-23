import React, { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import Typography from '@mui/material/Typography';

export default function TaskList({ tasks, onChangeTask, onDeleteTask }) {
    return (
        <List>
            {tasks.map(task => (
                <ListItem key={task.id}>
                    <Task
                        task={task}
                        onChange={onChangeTask}
                        onDelete={onDeleteTask}
                    />
                </ListItem>
            ))}
        </List>
    );
}

function Task({ task, onChange, onDelete }) {
    const [isEditing, setIsEditing] = useState(false);
    let taskContent;
    if (isEditing) {
        taskContent = (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <TextField
                    value={task.text}
                    onChange={e => {
                        onChange({
                            ...task,
                            text: e.target.value
                        });
                    }}
                    size="small"
                />
                <IconButton
                    color="primary"
                    onClick={() => setIsEditing(false)}
                >
                    <SaveIcon />
                </IconButton>
            </Box>
        );
    } else {
        taskContent = (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Typography
                    variant="body1"
                    component="span"
                    sx={{ textDecoration: task.done ? 'line-through' : 'none' }}
                >
                    {task.text}
                </Typography>
                <IconButton
                    color="primary"
                    onClick={() => setIsEditing(true)}
                >
                    <EditIcon />
                </IconButton>
            </Box>
        );
    }
    return (
        <Box
            sx={{ display: 'flex', alignItems: 'center', gap: 2, width: '100%' }}
        >
            <Checkbox
                checked={task.done}
                onChange={e => {
                    onChange({
                        ...task,
                        done: e.target.checked
                    });
                }}
            />
            {taskContent}
            <IconButton
                color="secondary"
                onClick={() => onDelete(task.id)}
            >
                <DeleteIcon />
            </IconButton>
        </Box>
    );
}
