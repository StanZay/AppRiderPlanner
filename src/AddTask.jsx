import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function AddTask({ onAddTask }) {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            onAddTask(text);
            setText('');
        }
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                display: 'flex',
                alignItems: 'center',
                gap:2,
                padding: 2,
                border: '1px solid #ccc',
                borderRadius: '8px',
                boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
<<<<<<< HEAD
                width: '80%',
                maxWidth: '600px',
                margin: '20px'
=======
                width: '100%',
                maxWidth: '600px',
                margin: 'auto'
>>>>>>> origin/main
            }}
        >
            <TextField
                label="Add a new goal"
                variant="outlined"
                fullWidth
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <Button type="submit" variant="contained" color="primary">
                Add
            </Button>
        </Box>
    );
}

export default AddTask;
/**/