import React from 'react';
<<<<<<< HEAD
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
=======
>>>>>>> c4a16a519 (Initial commit)

function Home() {
    return (
        <div>
            <h1>Home</h1>
<<<<<<< HEAD
>>>>>>> origin/main
=======
>>>>>>> c4a16a519 (Initial commit)
        </div>
    );
}

<<<<<<< HEAD
<<<<<<< HEAD
export default Home;
=======
export default Home;
>>>>>>> origin/main
=======
export default Home;
>>>>>>> c4a16a519 (Initial commit)
