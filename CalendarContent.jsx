import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import InputAdornments from './InputAdornments';
import { Plus, ChevronLeft, ChevronRight } from 'lucide-react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
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
    { date: dayjs('2024-07-29'), type: 'dressage' },
    { date: dayjs('2024-08-01'), type: 'jumping' },
    { date: dayjs('2024-08-03'), type: 'crossCountry' },
    { date: dayjs('2024-08-04'), type: 'endurance' },
    { date: dayjs('2024-08-05'), type: 'eventing' },
    { date: dayjs('2024-08-07'), type: 'showJumping' },
    { date: dayjs('2024-08-10'), type: 'endurance' },
    { date: dayjs('2024-08-12'), type: 'dressage' },
    { date: dayjs('2024-08-15'), type: 'jumping' },
    { date: dayjs('2024-08-20'), type: 'crossCountry' },
    { date: dayjs('2024-08-25'), type: 'endurance' },
    { date: dayjs('2024-08-30'), type: 'showJumping' }
];

const CalendarWeek = ({ selectedDate, onSelectDate }) => {
    const [currentWeekStart, setCurrentWeekStart] = useState(selectedDate.startOf('week'));
    const daysOfWeek = Array.from({ length: 7 }, (_, i) => currentWeekStart.add(i, 'day'));

    const handlePrevWeek = () => {
        setCurrentWeekStart(prev => prev.subtract(1, 'week'));
    };

    const handleNextWeek = () => {
        setCurrentWeekStart(prev => prev.add(1, 'week'));
    };

    return (
        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', marginBottom: '10px' }}>
                <IconButton onClick={handlePrevWeek} sx={{ marginRight: '8px' }}>
                    <ChevronLeft />
                </IconButton>
                <Typography variant="h6" sx={{ flex: 1, textAlign: 'left' }}>
                    {currentWeekStart.format('MMMM YYYY')}
                </Typography>
                <IconButton onClick={handleNextWeek} sx={{ marginLeft: '8px' }}>
                    <ChevronRight />
                </IconButton>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day, index) => (
                    <Box key={index} sx={{ flex: 1, textAlign: 'center' }}>
                        <Typography variant="caption">{day}</Typography>
                    </Box>
                ))}
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                {daysOfWeek.map((day) => {
                    const isToday = day.isSame(dayjs(), 'day');
                    const trainingsForDay = trainings.filter(training => training.date.isSame(day, 'day'));

                    return (
                        <Button
                            key={day.format('YYYY-MM-DD')}
                            onClick={() => onSelectDate(day)}
                            sx={{
                                flex: 1,
                                padding: '16px',
                                borderRadius: '50%',
                                backgroundColor: isToday ? 'gray' : 'transparent',
                                color: isToday ? 'white' : 'text.primary',
                                border: 'none',
                                minWidth: '40px',
                                minHeight: '40px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                position: 'relative',
                                aspectRatio: '1 / 1',
                                '&:hover': {
                                    backgroundColor: isToday ? 'darkgray' : 'rgba(0, 0, 0, 0.1)',
                                },
                            }}
                        >
                            <Typography variant="body2" sx={{ marginBottom: '4px' }}>
                                {day.format('D')}
                            </Typography>
                            {trainingsForDay.map((training, idx) => (
                                <Box
                                    key={idx}
                                    sx={{
                                        position: 'absolute',
                                        bottom: `calc(4px + ${8 * idx}px)`,
                                        left: `calc(50% - ${8}px)`,
                                        width: '8px',
                                        height: '8px',
                                        borderRadius: '50%',
                                        backgroundColor: trainingTypes[training.type]?.color || 'gray',
                                    }}
                                />
                            ))}
                        </Button>
                    );
                })}
            </Box>
        </Box>
    );
};

const StyledText = styled('text')(({ theme }) => ({
    fill: theme.palette.text.primary,
    textAnchor: 'middle',
    dominantBaseline: 'central',
    fontSize: 20,
}));

function PieCenterLabel({ children }) {
    const { width, height, left, top } = useDrawingArea();
    return (
        <StyledText x={left + width / 2} y={top + height / 2}>
            {children}
        </StyledText>
    );
}

const StyledLabel = styled('text')(({ theme }) => ({
    fill: theme.palette.text.primary,
    textAnchor: 'middle',
    dominantBaseline: 'central',
    fontSize: 14,
}));

function CustomLabel({ x, y, value }) {
    return (
        <StyledLabel x={x + 10} y={y +120}>
            {value}
        </StyledLabel>
    );
}

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

    const getTrainingCounts = () => {
        return Object.keys(trainingTypes).map(type => ({
            id: type,
            label: trainingTypes[type].label,
            value: trainings.filter(training => training.type === type).length,
            color: trainingTypes[type].color
        }));
    };

    const chartData = getTrainingCounts();

    return (
        <Box sx={{ padding: '20px', width: '100%', boxSizing: 'border-box' }}>
            <Typography variant="h4" gutterBottom>
                Calendar
            </Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <CalendarWeek
                    selectedDate={selectedDate}
                    onSelectDate={handleDateChange}
                />
            </LocalizationProvider>
            <Button
                variant="contained"
                color="primary"
                onClick={handleAddTraining}
                sx={{ marginTop: '20px', display: 'flex', alignItems: 'center' }}
            >
                <Plus style={{ marginRight: '8px' }} />
                Add Task
            </Button>
            <Box sx={{ marginTop: '40px', width: 'calc(100% - 40px)', backgroundColor: '#D4D9DB', padding: '16px', borderRadius: '8px', margin: '0 auto', display: 'flex', alignItems: 'center' }}>
                <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', marginRight: '40px' }}>
                    <PieChart
                        series={[
                            {
                                data: chartData.map(item => ({
                                    value: item.value,
                                    label: item.label,
                                    color: item.color
                                })),
                                innerRadius: 80,
                                label: CustomLabel, // Użyj niestandardowej etykiety
                            }
                        ]}
                        width={400}
                        height={200}
                    >
                        <PieCenterLabel>Training Type</PieCenterLabel>
                    </PieChart>
                </Box>
            </Box>
            <Dialog open={openDialog} onClose={handleCloseDialog}>
                <DialogContent>
                    <InputAdornments onSave={handleSaveTraining} />
                </DialogContent>
            </Dialog>
        </Box>
    );
}

export default CalendarContent;
