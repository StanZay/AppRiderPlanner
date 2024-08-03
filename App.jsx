<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
=======
import React, { useState } from 'react';
>>>>>>> origin/main
=======
import React, { useState, useEffect } from 'react';
>>>>>>> c4a16a519 (Initial commit)
import { BrowserRouter as Router, Routes, Route, NavLink, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> c4a16a519 (Initial commit)
import { Calendar, House, Plus } from "lucide-react";
import TaskApp from './TaskApp';
import UpcomingTraining from './UpcomingTraining';
import CalendarContent from './CalendarContent';
import InputAdornments from './InputAdornments';


<<<<<<< HEAD
=======
import { Calendar, CircleUserRound, House, Plus, Settings } from "lucide-react";
import TaskApp from './TaskApp';

// Funkcje pomocnicze
>>>>>>> origin/main
=======
>>>>>>> c4a16a519 (Initial commit)
function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

function getDayOfWeek(date) {
    const options = { weekday: 'long' };
    return date.toLocaleDateString('en-US', options);
}

// Komponenty strony
function Home({ trainings }) {
    const today = new Date();
    const formattedDate = formatDate(today);
    const dayOfWeek = getDayOfWeek(today);

    return (
        <div>
            <h1 style={{ textAlign: 'left', margin: '20px' }}>Today</h1>
            <div className="date" style={{ textAlign: 'left', margin: '20px' }}>{formattedDate} • {dayOfWeek}</div>
<<<<<<< HEAD
<<<<<<< HEAD
            <UpcomingTraining trainings={trainings} />
            <TaskApp showToolbar={false} />
=======
            {trainings.length === 0 ? (
                <div style={{ margin: '20px' }}>No trainings scheduled for today.</div>
            ) : (
                <div style={{ margin: '20px' }}>
                    <h2>Scheduled Trainings</h2>
                    {trainings.map((training, index) => (
                        <div key={index}>
                            <p><strong>Training Type:</strong> {training.type}</p>
                            <p><strong>Date:</strong> {training.date}</p>
                            <p><strong>Horse:</strong> {training.horse}</p>
                            <p><strong>Location:</strong> {training.location}</p>
                            <p><strong>Trainer:</strong> {training.trainer}</p>
                        </div>
                    ))}
                </div>
            )}
>>>>>>> origin/main
=======
            <UpcomingTraining trainings={trainings} />
            <TaskApp showToolbar={false} />
>>>>>>> c4a16a519 (Initial commit)
        </div>
    );
}

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> c4a16a519 (Initial commit)
// Główna aplikacja
function App() {
    const [value, setValue] = useState(0);
    const [trainings, setTrainings] = useState([
        {
            trainingType: 'Dressage',
            selectedDate: new Date(),
            horse: 'Spirit',
            location: 'Stable 1',
            trainer: 'John Doe'
        },
        {
            trainingType: 'Jumping',
            selectedDate: new Date(),
            horse: 'Lightning',
            location: 'Stable 2',
            trainer: 'Jane Doe'
        }
    ]);
    const navigate = useNavigate();

    useEffect(() => {
<<<<<<< HEAD
=======
function CalendarContent() {
    return <div>Calendar Content</div>;
}

function Profile() {
    return <div>Profile Content</div>;
}

function SettingsContent() {
    return <div>Settings Content</div>;
}

// Główna aplikacja
function App() {
    const [value, setValue] = useState(0);
    const [trainings, setTrainings] = useState([]);
    const navigate = useNavigate();

    React.useEffect(() => {
>>>>>>> origin/main
=======
>>>>>>> c4a16a519 (Initial commit)
        switch (value) {
            case 0:
                navigate('/');
                break;
            case 1:
                navigate('/task');
                break;
            case 2:
                navigate('/calendar');
                break;
<<<<<<< HEAD
<<<<<<< HEAD
=======
            case 3:
                navigate('/profile');
                break;
            case 4:
                navigate('/settings');
                break;
>>>>>>> origin/main
=======
>>>>>>> c4a16a519 (Initial commit)
            default:
                navigate('/');
                break;
        }
    }, [value, navigate]);

    const handleSaveTraining = (training) => {
        setTrainings([...trainings, training]);
    };

    return (
        <div>
            <Box sx={{ paddingBottom: '56px' }}>
                <Routes>
                    <Route path="/" element={<Home trainings={trainings} />} />
<<<<<<< HEAD
<<<<<<< HEAD
                    <Route path="/task" element={<InputAdornments onSave={handleSaveTraining} />} /> {/* Dodano InputAdornments w zakładce Add Task */}
                    <Route path="/calendar" element={<CalendarContent />} />
=======
                    <Route path="/task" element={<TaskApp onSaveTraining={handleSaveTraining} />} />
                    <Route path="/calendar" element={<CalendarContent />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/settings" element={<SettingsContent />} />
>>>>>>> origin/main
=======
                    <Route path="/task" element={<InputAdornments onSave={handleSaveTraining} />} /> {/* Dodano InputAdornments w zakładce Add Task */}
                    <Route path="/calendar" element={<CalendarContent />} />
>>>>>>> c4a16a519 (Initial commit)
                </Routes>
            </Box>
            <Box sx={{
                width: '100%',
                position: 'fixed',
                bottom: 0,
                left: 0,
                backgroundColor: 'white',
                borderTop: '1px solid #ddd',
                zIndex: 1000
            }}>
                <BottomNavigation
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    sx={{ width: '100%' }}
                >
                    <BottomNavigationAction
                        label="Home"
                        icon={<House />}
                        component={NavLink}
                        to="/"
                        showLabel={value === 0}
                    />
                    <BottomNavigationAction
                        label="Add New"
                        icon={<Plus />}
                        component={NavLink}
                        to="/task"
                        showLabel={value === 1}
                    />
                    <BottomNavigationAction
                        label="Calendar"
                        icon={<Calendar />}
                        component={NavLink}
                        to="/calendar"
                        showLabel={value === 2}
                    />
<<<<<<< HEAD
<<<<<<< HEAD
=======
                    <BottomNavigationAction
                        label="Profile"
                        icon={<CircleUserRound />}
                        component={NavLink}
                        to="/profile"
                        showLabel={value === 3}
                    />
                    <BottomNavigationAction
                        label="Settings"
                        icon={<Settings />}
                        component={NavLink}
                        to="/settings"
                        showLabel={value === 4}
                    />
>>>>>>> origin/main
=======
>>>>>>> c4a16a519 (Initial commit)
                </BottomNavigation>
            </Box>
        </div>
    );
}

export default function RootApp() {
    return (
        <Router>
            <App />
        </Router>
    );
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
}
>>>>>>> origin/main
=======
}
>>>>>>> c4a16a519 (Initial commit)
