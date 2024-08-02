import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Calendar, House, Plus } from "lucide-react";
import TaskApp from './TaskApp';
import UpcomingTraining from './UpcomingTraining';
import CalendarContent from './CalendarContent';
import InputAdornments from './InputAdornments';


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
            <UpcomingTraining trainings={trainings} />
            <TaskApp showToolbar={false} />
        </div>
    );
}

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
                    <Route path="/task" element={<InputAdornments onSave={handleSaveTraining} />} /> {/* Dodano InputAdornments w zakładce Add Task */}
                    <Route path="/calendar" element={<CalendarContent />} />
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
}