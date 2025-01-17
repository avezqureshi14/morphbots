import React from 'react';
import { Box, MenuItem, Select, FormControl, InputLabel, SelectChangeEvent } from '@mui/material';

interface PrimarySelectProps {
    label: string;
    options: Array<{ value: string | number; label: string }>;
    width?: string;
    height?: string;
    value: string | number;
    onChange: (event: SelectChangeEvent<string | number>) => void;
}

const PrimarySelect: React.FC<PrimarySelectProps> = ({ label, options, width = '730px', height = '50px', value, onChange }) => {
    return (
        <Box component='div' sx={{ marginBottom: '10px', width: width, fontFamily: 'Roboto, sans-serif' }}>
            <InputLabel id={`${label}-label`} sx={{ marginBottom: '10px', fontWeight: 700, color: '#000' }}>
                {label}
            </InputLabel>
            <FormControl fullWidth>
                <Select
                    labelId={`${label}-label`}
                    value={value}
                    onChange={onChange}
                    sx={{
                        width: '100%',
                        height: height,
                        borderRadius: '3px',
                        '& .MuiInputBase-root': {
                            color: '#000',
                            height: '100%',
                            padding: '0 14px',
                        },
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                border: '1px solid #D9E2EB',
                                borderWidth: '1px',
                            },
                            '&:hover fieldset': {
                                border: '1px solid #D9E2EB'
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#6ECDDD',
                            },
                        },
                    }}
                >
                    {options.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
};

export default PrimarySelect;
