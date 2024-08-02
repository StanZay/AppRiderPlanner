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
<<<<<<< HEAD
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider, DatePicker, TimePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
=======
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
>>>>>>> origin/main

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
<<<<<<< HEAD
    const [selectedTime, setSelectedTime] = React.useState(null);
    const [snackbarOpen, setSnackbarOpen] = React.useState(false);
=======
>>>>>>> origin/main

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
<<<<<<< HEAD
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
=======
            setTrainingOptions([...trainingOptions, { value: newOption.toLowerCase(), label: newOption, color: newColor }]);
        } else if (type === 'location') {
            setLocationOptions([...locationOptions, { value: newOption.toLowerCase(), label: newOption }]);
        } else if (type === 'horse') {
            setHorseOptions([...horseOptions, { value: newOption.toLowerCase(), label: newOption }]);
        } else if (type === 'trainer') {
            setTrainerOptions([...trainerOptions, { value: newOption.toLowerCase(), label: newOption }]);
>>>>>>> origin/main
        }
        setNewOption('');
        setNewColor('');
        handleClose();
    };

    const handleSave = () => {
<<<<<<< HEAD
        if (!selectedDate || !selectedTime) {
            setSnackbarOpen(true);
            return;
        }

=======
>>>>>>> origin/main
        const data = {
            trainingType,
            location,
            horse,
            trainer,
<<<<<<< HEAD
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
=======
            selectedDate
        };
        onSave(data);
>>>>>>> origin/main
    };

    return (
        <Box
            sx={{
                width: '100%',
<<<<<<< HEAD
                padding: '00px',
=======
                padding: '20px',
>>>>>>> origin/main
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px'
            }}
        >
            <h1 style={{ textAlign: 'left' }}>Add Training</h1>
<<<<<<< HEAD

=======
>>>>>>> origin/main
            <FormControl fullWidth variant="standard">
                <TextField
                    select
                    id="standard-adornment-training-type"
                    value={trainingType}
                    onChange={handleChange(setTrainingType)}
                    InputProps={{
<<<<<<< HEAD
                        startAdornment: <InputAdornment position="start">Training Type</InputAdornment>
                    }}
                    sx={{ width: '100%' }}
=======
                        startAdornment: <InputAdornment position="start">Training Type</InputAdornment>,
                    }}
                    sx={{
                        width: '100%'
                    }}
>>>>>>> origin/main
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
<<<<<<< HEAD

            <FormControl fullWidth variant="standard">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
=======
            <FormControl fullWidth variant="standard">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateTimePicker
                        label="Date and Time"
>>>>>>> origin/main
                        value={selectedDate}
                        onChange={(newValue) => setSelectedDate(newValue)}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                variant="standard"
                                InputProps={{
<<<<<<< HEAD
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
=======
                                    startAdornment: <InputAdornment position="start">Date and Time</InputAdornment>,
                                    sx: { width: '100%' }
                                }}
                                sx={{
                                    width: '100%'
                                }}
>>>>>>> origin/main
                            />
                        )}
                    />
                </LocalizationProvider>
            </FormControl>
<<<<<<< HEAD

=======
>>>>>>> origin/main
            <FormControl fullWidth variant="standard">
                <TextField
                    select
                    id="standard-adornment-location"
                    value={location}
                    onChange={handleChange(setLocation)}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">Location</InputAdornment>
                    }}
<<<<<<< HEAD
                    sx={{ width: '100%' }}
=======
                    sx={{
                        width: '100%'
                    }}
>>>>>>> origin/main
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
<<<<<<< HEAD

=======
>>>>>>> origin/main
            <FormControl fullWidth variant="standard">
                <TextField
                    select
                    id="standard-adornment-horse"
                    value={horse}
                    onChange={handleChange(setHorse)}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">Horse</InputAdornment>
                    }}
<<<<<<< HEAD
                    sx={{ width: '100%' }}
=======
                    sx={{
                        width: '100%'
                    }}
>>>>>>> origin/main
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
<<<<<<< HEAD

=======
>>>>>>> origin/main
            <FormControl fullWidth variant="standard">
                <TextField
                    select
                    id="standard-adornment-trainer"
                    value={trainer}
                    onChange={handleChange(setTrainer)}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">Trainer</InputAdornment>
                    }}
<<<<<<< HEAD
                    sx={{ width: '100%' }}
=======
                    sx={{
                        width: '100%'
                    }}
>>>>>>> origin/main
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
<<<<<<< HEAD

            <Button variant="contained" color="primary" onClick={handleSave}>
                Save Training
            </Button>

            <Dialog open={openDialog.open} onClose={handleClose}>
                <DialogTitle>Add {openDialog.type}</DialogTitle>
=======
            <Button variant="contained" color="primary" onClick={handleSave}>Save</Button>

            <Dialog open={openDialog.open} onClose={handleClose}>
                <DialogTitle>Add New {openDialog.type.charAt(0).toUpperCase() + openDialog.type.slice(1)}</DialogTitle>
>>>>>>> origin/main
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
<<<<<<< HEAD
                        label={`New ${openDialog.type}`}
                        type="text"
                        fullWidth
                        variant="standard"
=======
                        id="new-option"
                        label={openDialog.type.charAt(0).toUpperCase() + openDialog.type.slice(1)}
                        type="text"
                        fullWidth
>>>>>>> origin/main
                        value={newOption}
                        onChange={(e) => setNewOption(e.target.value)}
                    />
                    {openDialog.type === 'training' && (
                        <TextField
                            margin="dense"
<<<<<<< HEAD
                            label="Color"
                            type="text"
                            fullWidth
                            variant="standard"
=======
                            id="new-color"
                            label="Label Color"
                            type="text"
                            fullWidth
>>>>>>> origin/main
                            value={newColor}
                            onChange={(e) => setNewColor(e.target.value)}
                        />
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
<<<<<<< HEAD
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
=======
                    <Button onClick={handleAddOption}><b>Add</b></Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}
>>>>>>> origin/main
