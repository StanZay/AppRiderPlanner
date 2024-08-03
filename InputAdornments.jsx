<<<<<<< HEAD
=======
// InputAdornments.jsx
>>>>>>> c4a16a519 (Initial commit)
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
<<<<<<< HEAD
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider, DatePicker, TimePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
=======
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
>>>>>>> c4a16a519 (Initial commit)

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
<<<<<<< HEAD
=======
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
>>>>>>> origin/main
=======
>>>>>>> c4a16a519 (Initial commit)

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
<<<<<<< HEAD
    const [selectedTime, setSelectedTime] = React.useState(null);
    const [snackbarOpen, setSnackbarOpen] = React.useState(false);
=======
>>>>>>> origin/main
=======
    const [selectedTime, setSelectedTime] = React.useState(null);
    const [snackbarOpen, setSnackbarOpen] = React.useState(false);
>>>>>>> c4a16a519 (Initial commit)

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
=======
>>>>>>> c4a16a519 (Initial commit)
            setTrainingOptions([...trainingOptions, { value: newOption.toLowerCase(), label: newOption, color: newColor }]);
        } else if (type === 'location') {
            setLocationOptions([...locationOptions, { value: newOption.toLowerCase(), label: newOption }]);
        } else if (type === 'horse') {
            setHorseOptions([...horseOptions, { value: newOption.toLowerCase(), label: newOption }]);
        } else if (type === 'trainer') {
            setTrainerOptions([...trainerOptions, { value: newOption.toLowerCase(), label: newOption }]);
<<<<<<< HEAD
>>>>>>> origin/main
=======
>>>>>>> c4a16a519 (Initial commit)
        }
        setNewOption('');
        setNewColor('');
        handleClose();
    };

    const handleSave = () => {
<<<<<<< HEAD
<<<<<<< HEAD
        if (!selectedDate || !selectedTime) {
            setSnackbarOpen(true);
            return;
        }

=======
>>>>>>> origin/main
=======
>>>>>>> c4a16a519 (Initial commit)
        const data = {
            trainingType,
            location,
            horse,
            trainer,
<<<<<<< HEAD
<<<<<<< HEAD
            selectedDateTime: dayjs(selectedDate)
                .set('hour', selectedTime?.hour() || 0)
                .set('minute', selectedTime?.minute() || 0)
                .toISOString() // Upewnij się, że data jest w poprawnym formacie
        };

        onSave(data);
        setSnackbarOpen(true); // Otwórz Snackbar po zapisaniu
=======
            selectedDate,
            selectedTime
        };

        // Save to localStorage
        let savedTrainings = JSON.parse(localStorage.getItem('trainings')) || [];
        savedTrainings.push(data);
        localStorage.setItem('trainings', JSON.stringify(savedTrainings));

        onSave(data); // Update parent component
        setSnackbarOpen(true); // Open Snackbar after saving
>>>>>>> c4a16a519 (Initial commit)
    };

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
<<<<<<< HEAD
=======
            selectedDate
        };
        onSave(data);
>>>>>>> origin/main
=======
>>>>>>> c4a16a519 (Initial commit)
    };

    return (
        <Box
            sx={{
                width: '100%',
<<<<<<< HEAD
<<<<<<< HEAD
                padding: '00px',
=======
                padding: '20px',
>>>>>>> origin/main
=======
                padding: '00px',
>>>>>>> c4a16a519 (Initial commit)
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px'
            }}
        >
            <h1 style={{ textAlign: 'left' }}>Add Training</h1>
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/main
=======
>>>>>>> c4a16a519 (Initial commit)
            <FormControl fullWidth variant="standard">
                <TextField
                    select
                    id="standard-adornment-training-type"
                    value={trainingType}
                    onChange={handleChange(setTrainingType)}
                    InputProps={{
<<<<<<< HEAD
<<<<<<< HEAD
                        startAdornment: <InputAdornment position="start">Training Type</InputAdornment>
                    }}
                    sx={{ width: '100%' }}
=======
=======
>>>>>>> c4a16a519 (Initial commit)
                        startAdornment: <InputAdornment position="start">Training Type</InputAdornment>,
                    }}
                    sx={{
                        width: '100%'
                    }}
<<<<<<< HEAD
>>>>>>> origin/main
=======
>>>>>>> c4a16a519 (Initial commit)
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
=======
            <FormControl fullWidth variant="standard">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
>>>>>>> c4a16a519 (Initial commit)
                        value={selectedDate}
                        onChange={(newValue) => setSelectedDate(newValue)}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                variant="standard"
                                InputProps={{
<<<<<<< HEAD
<<<<<<< HEAD
                                    startAdornment: <InputAdornment position="start">Date</InputAdornment>
                                }}
                                sx={{ width: '100%', mb: 2 }} // Margines dolny dla oddzielenia od TimePicker
                            />
                        )}
                    />
=======
                                    startAdornment: <InputAdornment position="start">Date</InputAdornment>,
                                    sx: { width: '100%' }
                                }}
                                sx={{
                                    width: '100%'
                                }}
                            />
                        )}
                    />
                </LocalizationProvider>
            </FormControl>
            <FormControl fullWidth variant="standard">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
>>>>>>> c4a16a519 (Initial commit)
                    <TimePicker
                        value={selectedTime}
                        onChange={(newValue) => setSelectedTime(newValue)}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                variant="standard"
                                InputProps={{
<<<<<<< HEAD
                                    startAdornment: <InputAdornment position="start">Time</InputAdornment>
                                }}
                                sx={{ width: '100%' }}
=======
                                    startAdornment: <InputAdornment position="start">Date and Time</InputAdornment>,
=======
                                    startAdornment: <InputAdornment position="start">Time</InputAdornment>,
>>>>>>> c4a16a519 (Initial commit)
                                    sx: { width: '100%' }
                                }}
                                sx={{
                                    width: '100%'
                                }}
<<<<<<< HEAD
>>>>>>> origin/main
=======
>>>>>>> c4a16a519 (Initial commit)
                            />
                        )}
                    />
                </LocalizationProvider>
            </FormControl>
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/main
=======
>>>>>>> c4a16a519 (Initial commit)
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
<<<<<<< HEAD
                    sx={{ width: '100%' }}
=======
                    sx={{
                        width: '100%'
                    }}
>>>>>>> origin/main
=======
                    sx={{
                        width: '100%'
                    }}
>>>>>>> c4a16a519 (Initial commit)
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
<<<<<<< HEAD

=======
>>>>>>> origin/main
=======
>>>>>>> c4a16a519 (Initial commit)
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
<<<<<<< HEAD
                    sx={{ width: '100%' }}
=======
                    sx={{
                        width: '100%'
                    }}
>>>>>>> origin/main
=======
                    sx={{
                        width: '100%'
                    }}
>>>>>>> c4a16a519 (Initial commit)
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
<<<<<<< HEAD

=======
>>>>>>> origin/main
=======
>>>>>>> c4a16a519 (Initial commit)
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
<<<<<<< HEAD
                    sx={{ width: '100%' }}
=======
                    sx={{
                        width: '100%'
                    }}
>>>>>>> origin/main
=======
                    sx={{
                        width: '100%'
                    }}
>>>>>>> c4a16a519 (Initial commit)
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
=======
            <Button onClick={handleSave} variant="contained">
                Save
            </Button>

            <Dialog open={openDialog.open} onClose={handleClose}>
                <DialogTitle>Add {openDialog.type.charAt(0).toUpperCase() + openDialog.type.slice(1)}</DialogTitle>
>>>>>>> c4a16a519 (Initial commit)
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
<<<<<<< HEAD
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
=======
                        label="Option"
                        type="text"
                        fullWidth
                        variant="standard"
>>>>>>> c4a16a519 (Initial commit)
                        value={newOption}
                        onChange={(e) => setNewOption(e.target.value)}
                    />
                    {openDialog.type === 'training' && (
                        <TextField
                            margin="dense"
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> c4a16a519 (Initial commit)
                            label="Color"
                            type="text"
                            fullWidth
                            variant="standard"
<<<<<<< HEAD
=======
                            id="new-color"
                            label="Label Color"
                            type="text"
                            fullWidth
>>>>>>> origin/main
=======
>>>>>>> c4a16a519 (Initial commit)
                            value={newColor}
                            onChange={(e) => setNewColor(e.target.value)}
                        />
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> c4a16a519 (Initial commit)
                    <Button onClick={handleAddOption}>Add</Button>
                </DialogActions>
            </Dialog>

            <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
                <Alert onClose={handleSnackbarClose} severity="success">
<<<<<<< HEAD
                    Training saved successfully!
                </Alert>a
=======
                    Training saved!
                </Alert>
>>>>>>> c4a16a519 (Initial commit)
            </Snackbar>
        </Box>
    );
}
<<<<<<< HEAD
=======
                    <Button onClick={handleAddOption}><b>Add</b></Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}
>>>>>>> origin/main
=======
>>>>>>> c4a16a519 (Initial commit)
