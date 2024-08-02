import React from 'react';
import { Calendar, Clock, Pin, Horse, User } from 'lucide-react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function InfoCard() {
    // Funkcja formatowania godziny na podstawie lokalnych ustawień
    const formatTime = (date) => date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    const formattedTime = formatTime(today);

    return (
        <Box sx={{
            backgroundColor: '#FFA500', // Kolor pomarańczowy
            borderRadius: '8px',
            padding: '20px',
            marginTop: '20px',
            color: 'white',
            boxShadow: 2,
        }}>
            <Typography variant="h6" sx={{ marginBottom: '16px' }}>
                Information
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                <Calendar style={{ marginRight: '10px' }} />
                <Typography variant="body1">{formattedDate}</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                <Clock style={{ marginRight: '10px' }} />
                <Typography variant="body1">{formattedTime}</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                <Pin style={{ marginRight: '10px' }} />
                <Typography variant="body1">Location</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                <Horse style={{ marginRight: '10px' }} />
                <Typography variant="body1">Horse Name</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <User style={{ marginRight: '10px' }} />
                <Typography variant="body1">Your Name</Typography>
            </Box>
        </Box>
    );
}

export default InfoCard;
