<<<<<<< HEAD
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { AlarmClock, Calendar, LucideMagnet, MapPin, User } from "lucide-react";

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
            <Typography variant="h5" sx={{ textAlign: 'left', marginBottom: '20px' }}>Upcoming Training</Typography>
            {trainings.length === 0 ? (
                <div style={{ margin: '20px' }}>No trainings scheduled for today.</div>
            ) : (
                trainings.slice(0, 2).map((training, index) => (
                    <TrainingBox
                        key={index}
                        training={training}
                        color={index === 0 ? '#8F0758' : '#8C2D26'} // Kolory zgodne z legendą
                    />
                ))
=======
// UpcomingTraining.jsx
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Calendar, AlarmClock, MapPin, User, Trash2, Edit } from 'lucide-react';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

const UpcomingTraining = () => {
    const [trainings, setTrainings] = useState([]);
    const [editingIndex, setEditingIndex] = useState(null);
    const [formValues, setFormValues] = useState({
        trainingType: '',
        selectedDate: '',
        selectedTime: '',
        location: '',
        horse: '',
        trainer: '',
    });

    useEffect(() => {
        const savedTrainings = JSON.parse(localStorage.getItem('trainings')) || [];
        const formattedTrainings = savedTrainings.map(training => ({
            ...training,
            selectedDate: training.selectedDate ? dayjs(training.selectedDate) : null,
            selectedTime: training.selectedTime ? dayjs(training.selectedTime) : null,
        }));
        setTrainings(formattedTrainings);
    }, []);

    const handleDelete = (index) => {
        const updatedTrainings = trainings.filter((_, i) => i !== index);
        setTrainings(updatedTrainings);
        localStorage.setItem('trainings', JSON.stringify(updatedTrainings));
    };

    const handleEdit = (index) => {
        setEditingIndex(index);
        setFormValues({
            trainingType: trainings[index].trainingType,
            selectedDate: trainings[index].selectedDate ? trainings[index].selectedDate.format('YYYY-MM-DD') : '',
            selectedTime: trainings[index].selectedTime ? trainings[index].selectedTime.format('HH:mm') : '',
            location: trainings[index].location,
            horse: trainings[index].horse,
            trainer: trainings[index].trainer,
        });
    };

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormValues(prev => ({ ...prev, [name]: value }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const updatedTrainings = trainings.map((training, index) =>
            index === editingIndex ? { ...training, ...formValues, selectedDate: dayjs(formValues.selectedDate), selectedTime: dayjs(formValues.selectedTime) } : training
        );
        setTrainings(updatedTrainings);
        localStorage.setItem('trainings', JSON.stringify(updatedTrainings));
        setEditingIndex(null);
    };

    return (
        <Box sx={{ padding: '16px', width: '100%' }}>
            <Typography variant="h4" gutterBottom>
                Upcoming Trainings
            </Typography>
            <Dialog open={editingIndex !== null} onClose={() => setEditingIndex(null)}>
                <DialogTitle>Edit Training</DialogTitle>
                <DialogContent>
                    <form onSubmit={handleFormSubmit}>
                        <TextField
                            name="trainingType"
                            label="Training Type"
                            value={formValues.trainingType}
                            onChange={handleFormChange}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            name="selectedDate"
                            label="Date"
                            type="date"
                            value={formValues.selectedDate}
                            onChange={handleFormChange}
                            fullWidth
                            margin="normal"
                            InputLabelProps={{ shrink: true }}
                        />
                        <TextField
                            name="selectedTime"
                            label="Time"
                            type="time"
                            value={formValues.selectedTime}
                            onChange={handleFormChange}
                            fullWidth
                            margin="normal"
                            InputLabelProps={{ shrink: true }}
                        />
                        <TextField
                            name="location"
                            label="Location"
                            value={formValues.location}
                            onChange={handleFormChange}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            name="horse"
                            label="Horse"
                            value={formValues.horse}
                            onChange={handleFormChange}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            name="trainer"
                            label="Trainer"
                            value={formValues.trainer}
                            onChange={handleFormChange}
                            fullWidth
                            margin="normal"
                        />
                        <DialogActions>
                            <Button type="submit" variant="contained" color="primary">
                                Save Changes
                            </Button>
                            <Button
                                variant="outlined"
                                color="secondary"
                                onClick={() => setEditingIndex(null)}
                            >
                                Cancel
                            </Button>
                        </DialogActions>
                    </form>
                </DialogContent>
            </Dialog>
            {trainings.length > 0 ? (
                trainings.map((training, index) => (
                    <Box key={index} sx={{ backgroundColor: index === 0 ? '#8F0758' : '#8C2D26', padding: '16px', margin: '20px 0', borderRadius: '8px', color: '#fff', position: 'relative' }}>
                        <Typography variant="h6" sx={{ marginBottom: '12px' }}>{training.trainingType}</Typography>
                        <Box sx={{ marginBottom: '12px' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '6px' }}>
                                <Calendar size={20} />
                                <Typography sx={{ marginLeft: '12px' }}>{training.selectedDate ? training.selectedDate.format('YYYY-MM-DD') : 'N/A'}</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <AlarmClock size={20} />
                                <Typography sx={{ marginLeft: '12px' }}>{training.selectedTime ? training.selectedTime.format('HH:mm') : 'N/A'}</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                            <MapPin size={20} />
                            <Typography sx={{ marginLeft: '12px' }}>{training.location}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                            <User size={20} />
                            <Typography sx={{ marginLeft: '12px' }}>{training.horse}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <User size={20} />
                            <Typography sx={{ marginLeft: '12px' }}>{training.trainer}</Typography>
                        </Box>
                        <Box sx={{ position: 'absolute', top: '8px', right: '8px', display: 'flex', gap: '8px' }}>
                            <Box
                                sx={{ cursor: 'pointer' }}
                                onClick={() => handleEdit(index)}
                            >
                                <Edit size={24} color="#fff" />
                            </Box>
                            <Box
                                sx={{ cursor: 'pointer' }}
                                onClick={() => handleDelete(index)}
                            >
                                <Trash2 size={24} color="#fff" />
                            </Box>
                        </Box>
                    </Box>
                ))
            ) : (
                <Typography>No upcoming trainings</Typography>
>>>>>>> c4a16a519 (Initial commit)
            )}
        </Box>
    );
};

<<<<<<< HEAD
export default UpcomingTraining;
=======
export default UpcomingTraining;
>>>>>>> c4a16a519 (Initial commit)
