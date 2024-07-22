import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';

export default function InputAdornments() {
    const [trainingType, setTrainingType] = React.useState('');

    const handleChange = (event) => {
        setTrainingType(event.target.value);
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
                    <MenuItem value="dressage">Dressage</MenuItem>
                    <MenuItem value="jumping">Jumping</MenuItem>
                    <MenuItem value="cross-country">Cross-Country</MenuItem>
                    <MenuItem value="endurance">Endurance</MenuItem>
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
        </Box>
    );
}
