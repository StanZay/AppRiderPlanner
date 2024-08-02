import React from 'react';
<<<<<<< HEAD
import UpcomingTraining from './UpcomingTraining';
import TaskApp from './TaskApp';
import { useAppContext } from './AppContext';

function Home() {
    const { trainings } = useAppContext();

    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    const dayOfWeek = today.toLocaleDateString('en-US', { weekday: 'long' });

    return (
        <div>
            <h1 style={{ textAlign: 'left', margin: '20px' }}>Today</h1>
            <div className="date" style={{ textAlign: 'left', margin: '20px' }}>{formattedDate} • {dayOfWeek}</div>
            <UpcomingTraining trainings={trainings} />
            <TaskApp showToolbar={false} />
=======

function Home() {
    return (
        <div>
            <h1>Home</h1>
>>>>>>> origin/main
        </div>
    );
}

<<<<<<< HEAD
export default Home;
=======
export default Home;
>>>>>>> origin/main
