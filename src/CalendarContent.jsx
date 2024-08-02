import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import dayjs from 'dayjs';
import InputAdornments from './InputAdornments';
import { Plus, TrendingUp } from 'lucide-react';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import { styled } from '@mui/material/styles';

const trainingTypes = {
    dressage: { color: '#0056A0', label: 'Dressage' },
    jumping: { color: '#009B77', label: 'Jumping' },
    crossCountry: { color: '#E03C31', label: 'Cross-Country' },
    endurance: { color: '#5B2A7F', label: 'Endurance' },
    eventing: { color: '#F5A300', label: 'Eventing' },
    showJumping: { color: '#F0A6C2', label: 'Show Jumping' }
};

const trainings = [
    { date: dayjs('2024-07-29'), type: 'dressage', hours: 1.5 },
    { date: dayjs('2024-08-01'), type: 'jumping', hours: 2.0 },
    { date: dayjs('2024-08-03'), type: 'crossCountry', hours: 1.0 },
    { date: dayjs('2024-08-04'), type: 'endurance', hours: 3.0 },
    { date: dayjs('2024-08-05'), type: 'eventing', hours: 2.5 },
    { date: dayjs('2024-08-07'), type: 'showJumping', hours: 2.0 },
    { date: dayjs('2024-08-10'), type: 'endurance', hours: 1.5 },
    { date: dayjs('2024-08-12'), type: 'dressage', hours: 1.0 },
    { date: dayjs('2024-08-15'), type: 'jumping', hours: 2.5 },
    { date: dayjs('2024-08-20'), type: 'crossCountry', hours: 1.5 },
    { date: dayjs('2024-08-25'), type: 'endurance', hours: 3.5 },
    { date: dayjs('2024-08-30'), type: 'showJumping', hours: 2.0 }
];

const getTrainingCounts = () => {
    return Object.keys(trainingTypes).map(type => ({
        id: type,
        label: trainingTypes[type].label,
        value: trainings.filter(training => training.type === type).reduce((total, training) => total + training.hours, 0),
        color: trainingTypes[type].color
    }));
};

const chartData = getTrainingCounts();

const StyledLabel = styled('text')(({ theme }) => ({
    fill: theme.palette.text.primary,
    textAnchor: 'middle',
    dominantBaseline: 'central',
    fontSize: 14,
}));

function CalendarContent() {
    const [selectedDate, setSelectedDate] = useState(dayjs());
    const [openDialog, setOpenDialog] = useState(false);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleAddTraining = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    const handleSaveTraining = (data) => {
        console.log('Training saved:', data);
        setOpenDialog(false);
    };

    const getDayContent = (day) => {
        const trainingsForDay = trainings.filter(training => training.date.isSame(day, 'day'));
        return (
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant="body2">{day.format('D')}</Typography>
                {trainingsForDay.map((training, idx) => (
                    <Box
                        key={idx}
                        sx={{
                            width: '8px',
                            height: '8px',
                            borderRadius: '50%',
                            backgroundColor: trainingTypes[training.type]?.color || 'gray',
                            marginTop: '2px',
                        }}
                    />
                ))}
            </Box>
        );
    };

    return (
        <Box sx={{ padding: '20px', width: '100%', boxSizing: 'border-box', position: 'relative' }}>
            <Typography variant="h4" gutterBottom>
                Calendar
            </Typography>
            <Box sx={{ backgroundColor: '#D4D9DB', padding: '16px', borderRadius: '8px', marginBottom: '20px' }}>
                <Card>
                    <CardHeader
                        title="Training Types"
                        subheader="Data for training types"
                    />
                    <CardContent>
                        <ResponsiveContainer width="100%" height={400}>
                            <BarChart
                                data={chartData}
                                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis
                                    dataKey="label"
                                    tickLine={false}
                                    tickMargin={10}
                                    axisLine={false}
                                />
                                <YAxis />
                                <Tooltip />
                                <Legend
                                    formatter={(value, entry) => (
                                        <Box component="span" sx={{ display: 'flex', alignItems: 'center' }}>
                                            <Box
                                                sx={{
                                                    width: '10px',
                                                    height: '10px',
                                                    borderRadius: '50%',
                                                    backgroundColor: entry.color,
                                                    marginRight: '8px'
                                                }}
                                            />
                                            <Typography variant="body2">{value}</Typography>
                                        </Box>
                                    )}
                                />
                                <Bar dataKey="value" radius={[10, 10, 0, 0]} background={{ fill: '#eee' }}>
                                    {chartData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </CardContent>
                    <CardActions sx={{ justifyContent: 'space-between', padding: '16px' }}>
                        <Typography variant="body2" color="textSecondary">
                            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            Showing training data
                        </Typography>
                    </CardActions>
                </Card>
            </Box>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <StaticDatePicker
                    displayStaticWrapperAs="desktop"
                    value={selectedDate}
                    onChange={handleDateChange}
                    renderDay={(day, _value, DayComponent) => {
                        const trainingsForDay = trainings.filter(training => training.date.isSame(day, 'day'));
                        return (
                            <Box sx={{ position: 'relative' }}>
                                <DayComponent />
                                {trainingsForDay.map((training, idx) => (
                                    <Box
                                        key={idx}
                                        sx={{
                                            width: '8px',
                                            height: '8px',
                                            borderRadius: '50%',
                                            backgroundColor: trainingTypes[training.type]?.color || 'gray',
                                            position: 'absolute',
                                            bottom: 4,
                                            left: '50%',
                                            transform: 'translateX(-50%)',
                                            zIndex: 1,
                                        }}
                                    />
                                ))}
                            </Box>
                        );
                    }}
                    renderInput={(params) => <Box {...params} />}
                />
            </LocalizationProvider>
            <Button
                variant="contained"
                color="primary"
                onClick={handleAddTraining}
                sx={{ textTransform: 'none', position: 'absolute', bottom: '20px', right: '20px' }}
            >
                <Plus style={{ marginRight: '8px' }} />
                Add Task
            </Button>
            <Dialog open={openDialog} onClose={handleCloseDialog}>
                <DialogContent>
                    <InputAdornments onSave={handleSaveTraining} />
                </DialogContent>
            </Dialog>
        </Box>
    );
}

export default CalendarContent;