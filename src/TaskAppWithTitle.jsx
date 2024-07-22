import React from 'react';
import TaskApp from './TaskApp';

function TaskAppWithTitle() {
    return (
        <TaskApp title="Upcoming Goals" /> {/* Przekazanie nowego tytułu */}
);
}

export default TaskAppWithTitle;
