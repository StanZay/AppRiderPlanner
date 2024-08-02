import * as React from 'react';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider, DatePicker, TimePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function InputAdornments({ onSave }) {
    const [trainingType, setTrainingType] = React.useState('');
    const [trainingOptions, setTrainingOptions] = React.useState([
        { value: 'dressage', label: 'Dressage', color: 'blue' },
        { value: 'jumping', label: 'Jumping', color: 'green' },
        { value: 'cross-country', label: 'Cross-Country', color: 'red' },
        { value: 'endurance', label: 'Endurance', color: 'purple' },
    ]);
    const [location, setLocation] = React.useState('');
    const [locationOptions, setLocationOptions] = React.useState([
        { value: 'arena', label: 'Arena' },
        { value: 'field', label: 'Field' },
        { value: 'trail', label: 'Trail' },
    ]);
    const [horse, setHorse] = React.useState('');
    const [horseOptions, setHorseOptions] = React.useState([
        { value: 'black-beauty', label: 'Black Beauty' },
        { value: 'sea-biscuit', label: 'Sea Biscuit' },
    ]);
    const [trainer, setTrainer] = React.useState('');
    const [trainerOptions, setTrainerOptions] = React.useState([
        { value: 'john-duton', label: 'John Duton' },
        { value: 'jane-doe', label: 'Jane Doe' },
    ]);
    const [openDialog, setOpenDialog] = React.useState({ open: false, type: '' });
    const [newOption, setNewOption] = React.useState('');
    const [newColor, setNewColor] = React.useState('');
    const [selectedDate, setSelectedDate] = React.useState(null);
    const [selectedTime, setSelectedTime] = React.useState(null);
    const [snackbarOpen, setSnackbarOpen] = React.useState(false);

    const handleChange = (setter) => (event) => {
        setter(event.target.value);
    };

    const handleClickOpen = (type) => {
        setOpenDialog({ open: true, type });
    };

    const handleClose = () => {
        setOpenDialog({ open: false, type: '' });
    };

    const handleAddOption = () => {
        const { type } = openDialog;
        if (type === 'training') {
            setTrainingOptions([
                ...trainingOptions,
                { value: newOption.toLowerCase(), label: newOption, color: newColor }
            ]);
        } else if (type === 'location') {
            setLocationOptions([
                ...locationOptions,
                { value: newOption.toLowerCase(), label: newOption }
            ]);
        } else if (type === 'horse') {
            setHorseOptions([
                ...horseOptions,
                { value: newOption.toLowerCase(), label: newOption }
            ]);
        } else if (type === 'trainer') {
            setTrainerOptions([
                ...trainerOptions,
                { value: newOption.toLowerCase(), label: newOption }
            ]);
        }
        setNewOption('');
        setNewColor('');
        handleClose();
    };

    const handleSave = () => {
        if (!selectedDate || !selectedTime) {
            setSnackbarOpen(true);
            return;
        }

        const data = {
            trainingType,
            location,
            horse,
            trainer,
            selectedDateTime: dayjs(selectedDate)
                .set('hour', selectedTime?.hour() || 0)
                .set('minute', selectedTime?.minute() || 0)
                .toISOString() // Upewnij się, że data jest w poprawnym formacie
        };

        onSave(data);
        setSnackbarOpen(true); // Otwórz Snackbar po zapisaniu
    };

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    return (
        <Box
            sx={{
                width: '100%',
                padding: '00px',
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px'
            }}
        >
            <h1 style={{ textAlign: 'left' }}>Add Training</h1>

            <FormControl fullWidth variant="standard">
                <TextField
                    select
                    id="standard-adornment-training-type"
                    value={trainingType}
                    onChange={handleChange(setTrainingType)}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">Training Type</InputAdornment>
                    }}
                    sx={{ width: '100%' }}
                >
                    {trainingOptions.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            <span style={{ color: option.color }}>●</span> {option.label}
                        </MenuItem>
                    ))}
                    <MenuItem value="" onClick={() => handleClickOpen('training')}>
                        <em>Add Type...</em>
                    </MenuItem>
                </TextField>
            </FormControl>

            <FormControl fullWidth variant="standard">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        value={selectedDate}
                        onChange={(newValue) => setSelectedDate(newValue)}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                variant="standard"
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">Date</InputAdornment>
                                }}
                                sx={{ width: '100%', mb: 2 }} // Margines dolny dla oddzielenia od TimePicker
                            />
                        )}
                    />
                    <TimePicker
                        value={selectedTime}
                        onChange={(newValue) => setSelectedTime(newValue)}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                variant="standard"
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">Time</InputAdornment>
                                }}
                                sx={{ width: '100%' }}
                            />
                        )}
                    />
                </LocalizationProvider>
            </FormControl>

            <FormControl fullWidth variant="standard">
                <TextField
                    select
                    id="standard-adornment-location"
                    value={location}
                    onChange={handleChange(setLocation)}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">Location</InputAdornment>
                    }}
                    sx={{ width: '100%' }}
                >
                    {locationOptions.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                    <MenuItem value="" onClick={() => handleClickOpen('location')}>
                        <em>Add Location...</em>
                    </MenuItem>
                </TextField>
            </FormControl>

            <FormControl fullWidth variant="standard">
                <TextField
                    select
                    id="standard-adornment-horse"
                    value={horse}
                    onChange={handleChange(setHorse)}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">Horse</InputAdornment>
                    }}
                    sx={{ width: '100%' }}
                >
                    {horseOptions.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                    <MenuItem value="" onClick={() => handleClickOpen('horse')}>
                        <em>Add Horse...</em>
                    </MenuItem>
                </TextField>
            </FormControl>

            <FormControl fullWidth variant="standard">
                <TextField
                    select
                    id="standard-adornment-trainer"
                    value={trainer}
                    onChange={handleChange(setTrainer)}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">Trainer</InputAdornment>
                    }}
                    sx={{ width: '100%' }}
                >
                    {trainerOptions.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                    <MenuItem value="" onClick={() => handleClickOpen('trainer')}>
                        <em>Add Trainer...</em>
                    </MenuItem>
                </TextField>
            </FormControl>

            <Button variant="contained" color="primary" onClick={handleSave}>
                Save Training
            </Button>

            <Dialog open={openDialog.open} onClose={handleClose}>
                <DialogTitle>Add {openDialog.type}</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        label={`New ${openDialog.type}`}
                        type="text"
                        fullWidth
                        variant="standard"
                        value={newOption}
                        onChange={(e) => setNewOption(e.target.value)}
                    />
                    {openDialog.type === 'training' && (
                        <TextField
                            margin="dense"
                            label="Color"
                            type="text"
                            fullWidth
                            variant="standard"
                            value={newColor}
                            onChange={(e) => setNewColor(e.target.value)}
                        />
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleAddOption}>Add</Button>
                </DialogActions>
            </Dialog>

            <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
                <Alert onClose={handleSnackbarClose} severity="success">
                    Training saved successfully!
                </Alert>a
            </Snackbar>
        </Box>
    );
}