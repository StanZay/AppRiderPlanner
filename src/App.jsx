import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Calendar, CircleUserRound, House, Plus, Settings } from "lucide-react";
import TaskApp from './TaskApp';

// Funkcje pomocnicze
function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

function getDayOfWeek(date) {
    const options = { weekday: 'long' };
    return date.toLocaleDateString('en-US', options);
}

// Komponenty strony
function Home() {
    const today = new Date();
    const formattedDate = formatDate(today);
    const dayOfWeek = getDayOfWeek(today);

    return (
        <div>
            <h1 style={{ textAlign: 'left', margin: '20px' }}>Today</h1>
            <div className="date" style={{ textAlign: 'left', margin: '20px' }}>{formattedDate} • {dayOfWeek}</div>
        </div>
    );
}

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
    const [value, setValue] = React.useState(0);
    const navigate = useNavigate();

    React.useEffect(() => {
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
            case 3:
                navigate('/profile');
                break;
            case 4:
                navigate('/settings');
                break;
            default:
                navigate('/');
                break;
        }
    }, [value, navigate]);

    return (
        <div>
            <Box sx={{ paddingBottom: '56px' }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/task" element={<TaskApp showToolbar={true} />} /> {/* TaskApp z Toolbar */}
                    <Route path="/calendar" element={<CalendarContent />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/settings" element={<SettingsContent />} />
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
