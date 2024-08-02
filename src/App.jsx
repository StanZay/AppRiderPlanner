import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Calendar, House, Plus } from "lucide-react";
import TaskApp from './TaskApp';
import InputAdornments from './InputAdornments';
import UpcomingTraining from './UpcomingTraining';
import CalendarContent from './CalendarContent';

function Home({ trainings }) {
    const today = new Date();
    const formattedDate = today.toLocaleDateString();
    const dayOfWeek = today.toLocaleDateString('pl-PL', { weekday: 'long' });

    return (
        <div>
            <h1 style={{ textAlign: 'left', margin: '20px' }}>Today</h1>
            <div className="date" style={{ textAlign: 'left', margin: '20px' }}>{formattedDate} • {dayOfWeek}</div>
            <UpcomingTraining trainings={trainings} />
            <TaskApp showToolbar={false} />
        </div>
    );
}

function App() {
    const [value, setValue] = useState(0);
    const [trainings, setTrainings] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        // Funkcja do ustawiania domyślnych danych w localStorage
        const initializeLocalStorage = () => {
            const defaultData = {
                trainingType: '',
                location: '',
                horse: '',
                trainer: '',
                selectedDate: null,
                selectedTime: null,
                trainingOptions: [
                    { value: 'dressage', label: 'Dressage', color: 'blue' },
                    { value: 'jumping', label: 'Jumping', color: 'green' },
                    { value: 'cross-country', label: 'Cross-Country', color: 'red' },
                    { value: 'endurance', label: 'Endurance', color: 'purple' },
                ],
                locationOptions: [
                    { value: 'arena', label: 'Arena' },
                    { value: 'field', label: 'Field' },
                    { value: 'trail', label: 'Trail' },
                ],
                horseOptions: [
                    { value: 'black-beauty', label: 'Black Beauty' },
                    { value: 'sea-biscuit', label: 'Sea Biscuit' },
                ],
                trainerOptions: [
                    { value: 'john-duton', label: 'John Duton' },
                    { value: 'jane-doe', label: 'Jane Doe' },
                ],
            };

            if (!localStorage.getItem('trainingData')) {
                localStorage.setItem('trainingData', JSON.stringify(defaultData));
            }
        };

        initializeLocalStorage();

        const storedTrainings = JSON.parse(localStorage.getItem('trainings')) || [];
        setTrainings(storedTrainings);
    }, []);

    useEffect(() => {
        localStorage.setItem('trainings', JSON.stringify(trainings));
    }, [trainings]);

    useEffect(() => {
        switch (value) {
            case 0:
                navigate('/');
                break;
            case 1:
                navigate('/add-new');
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

    const handleAddOption = (type, option) => {
        switch (type) {
            case 'training':
                setTrainings((prev) => [...prev, option]);
                break;
            case 'location':
                // Handle location option
                break;
            case 'horse':
                // Handle horse option
                break;
            case 'trainer':
                // Handle trainer option
                break;
            default:
                break;
        }
    };

    return (
        <div>
            <Box sx={{ paddingBottom: '56px' }}>
                <Routes>
                    <Route path="/" element={<Home trainings={trainings} />} />
                    <Route path="/add-new" element={<InputAdornments onSave={handleSaveTraining} onAddOption={handleAddOption} />} />
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
                    onChange={(event, newValue) => setValue(newValue)}
                    sx={{ width: '100%' }}
                >
                    <BottomNavigationAction
                        label="Home"
                        icon={<House />}
                        component={NavLink}
                        to="/"
                        value={0}
                    />
                    <BottomNavigationAction
                        label="Add New"
                        icon={<Plus />}
                        component={NavLink}
                        to="/add-new"
                        value={1}
                    />
                    <BottomNavigationAction
                        label="Calendar"
                        icon={<Calendar />}
                        component={NavLink}
                        to="/calendar"
                        value={2}
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
