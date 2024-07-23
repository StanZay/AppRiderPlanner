import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';

export default function InputAdornments() {
    const [trainingType, setTrainingType] = React.useState('');
    const [trainingOptions, setTrainingOptions] = React.useState([
        { value: 'dressage', label: 'Dressage', color: 'blue' },
        { value: 'jumping', label: 'Jumping', color: 'green' },
        { value: 'cross-country', label: 'Cross-Country', color: 'red' },
        { value: 'endurance', label: 'Endurance', color: 'purple' },
    ]);
    const [open, setOpen] = React.useState(false);
    const [newTraining, setNewTraining] = React.useState('');
    const [newColor, setNewColor] = React.useState('');

    const handleChange = (event) => {
        setTrainingType(event.target.value);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleAddTraining = () => {
        setTrainingOptions([...trainingOptions, { value: newTraining.toLowerCase(), label: newTraining, color: newColor }]);
        setNewTraining('');
        setNewColor('');
        setOpen(false);
    };

    return (
        <Box
            sx={{
                width: '100%',         // Pełna szerokość
                padding: '20px',       // Padding
                boxSizing: 'border-box', // Upewnij się, że padding nie wpływa na szerokość
                display: 'flex',       // Używamy flexbox do układu
                flexDirection: 'column', // Układ w kolumnie
                gap: '24px'            // Odstęp między elementami
            }}
        >
            <h1 style={{ textAlign: 'left' }}>Add Training</h1>
            <FormControl fullWidth variant="standard">
                <Select
                    labelId="training-type-label"
                    id="training-type"
                    value={trainingType}
                    onChange={handleChange}
                    startAdornment={<InputAdornment position="start">Training Type</InputAdornment>}
                    sx={{
                        width: '100%' // Ustawienie szerokości Select na 100%
                    }}
                >
                    {trainingOptions.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            <span style={{ color: option.color }}>●</span> {option.label}
                        </MenuItem>
                    ))}
                    <MenuItem value="" onClick={handleClickOpen}>
                        <em>Add Type...</em>
                    </MenuItem>
                </Select>
            </FormControl>
            <FormControl fullWidth variant="standard">
                <Input
                    id="standard-adornment-date"
                    startAdornment={<InputAdornment position="start">Date</InputAdornment>}
                    sx={{
                        width: '100%' // Ustawienie szerokości Input na 100%
                    }}
                />
            </FormControl>
            <FormControl fullWidth variant="standard">
                <Input
                    id="standard-adornment-time"
                    startAdornment={<InputAdornment position="start">Time</InputAdornment>}
                    sx={{
                        width: '100%' // Ustawienie szerokości Input na 100%
                    }}
                />
            </FormControl>
            <FormControl fullWidth variant="standard">
                <Input
                    id="standard-adornment-location"
                    startAdornment={<InputAdornment position="start">Location</InputAdornment>}
                    sx={{
                        width: '100%' // Ustawienie szerokości Input na 100%
                    }}
                />
            </FormControl>
            <FormControl fullWidth variant="standard">
                <Input
                    id="standard-adornment-horse"
                    startAdornment={<InputAdornment position="start">Horse</InputAdornment>}
                    sx={{
                        width: '100%' // Ustawienie szerokości Input na 100%
                    }}
                />
            </FormControl>
            <FormControl fullWidth variant="standard">
                <Input
                    id="standard-adornment-trainer"
                    startAdornment={<InputAdornment position="start">Trainer</InputAdornment>}
                    sx={{
                        width: '100%' // Ustawienie szerokości Input na 100%
                    }}
                />
            </FormControl>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add New Training Type</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="new-training"
                        label="Training Type"
                        type="text"
                        fullWidth
                        value={newTraining}
                        onChange={(e) => setNewTraining(e.target.value)}
                    />
                    <TextField
                        margin="dense"
                        id="new-color"
                        label="Label Color"
                        type="text"
                        fullWidth
                        value={newColor}
                        onChange={(e) => setNewColor(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleAddTraining}><b>Add</b></Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}
