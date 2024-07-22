import React, { useState } from 'react';

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
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Add a new goal"
            />
            <button type="submit">Add</button>
        </form>
    );
}

export default AddTask;
