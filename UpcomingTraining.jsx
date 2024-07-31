import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {AlarmClock, Calendar, LucideMagnet, MapPin, User} from "lucide-react";

const TrainingBox = ({ training, color }) => {
    const formatDate = (date) => {
        const options = { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' };
        return new Date(date).toLocaleDateString('pl-PL', options);
    };

    // Extract date and time separately
    const formattedDateTime = formatDate(training.selectedDate).split(', ');
    const date = formattedDateTime[0];
    const time = formattedDateTime[1];

    return (
        <Box sx={{ backgroundColor: color, padding: '16px', margin: '20px 0', borderRadius: '8px', color: '#fff' }}>
            <Typography variant="h6" sx={{ marginBottom: '12px' }}>{training.trainingType}</Typography>
            <Box sx={{ marginBottom: '12px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '6px' }}>
                    <Calendar size={20} />
                    <Typography sx={{ marginLeft: '12px' }}>{date}</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <AlarmClock size={20} />
                    <Typography sx={{ marginLeft: '12px' }}>{time}</Typography>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                <MapPin size={20} />
                <Typography sx={{ marginLeft: '12px' }}>{training.location}</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                <LucideMagnet size={20} />
                <Typography sx={{ marginLeft: '12px' }}>{training.horse}</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <User size={20} />
                <Typography sx={{ marginLeft: '12px' }}>{training.trainer}</Typography>
            </Box>
            {/* Dodaj tutaj dodatkowe informacje z InputAdornments */}
        </Box>
    );
};

const UpcomingTraining = ({ trainings }) => {
    return (
        <Box sx={{ margin: '20px', marginBottom: '40px' }}>
            <Typography variant="h5" sx={{ textAlign: 'left', marginBottom: '20px' }}>Upcoming training</Typography>
            {trainings.length === 0 ? (
                <div style={{ margin: '20px' }}>No trainings scheduled for today.</div>
            ) : (
                trainings.slice(0, 2).map((training, index) => (
                    <TrainingBox
                        key={index}
                        training={training}
                        color={index === 0 ? '#8F0758' : '#8C2D26'}
                    />
                ))
            )}
        </Box>
    );
};

export default UpcomingTraining;
