import React from 'react';
import { Box, Typography, TextField, TextFieldProps } from '@mui/material';
import { Editor } from '../editor/Editor';

interface PrimaryTextFieldProps extends Omit<TextFieldProps, 'variant'> {
    label: string;
    multiline?: boolean;
    rows?: number;
    width?: string;
    fieldWidth?: string;
}

const PrimaryTextField: React.FC<PrimaryTextFieldProps> = ({ label, multiline = false, width = '800px', rows = 5, fieldWidth = "100%", ...props }) => {
    return (
        <Box component='div' sx={{ marginBottom: '10px', width: width, fontFamily: 'Roboto, sans-serif' }}>
            <Typography variant='subtitle1' sx={{ marginBottom: '10px', fontWeight: 700 }}>
                {label}
            </Typography>
            {multiline ? (
                <Box
                    component="div"
                    sx={{
                        marginBottom: '10px'
                    }}
                >
                    <Editor />
                </Box>
            ) : (
                <TextField
                    fullWidth
                    variant='outlined'
                    InputProps={{
                        sx: {
                            height: '50px', // Height for the actual input field
                            '& .MuiInputBase-input': {
                                height: '100%',
                                padding: '0 14px', // Adjust padding as needed
                            },
                            '& input::placeholder': {
                                color: '#000 !important', // Set the placeholder color
                                fontSize: '16px', // Set the placeholder font size
                                fontWeight: 700,
                                opacity: 1,
                            },
                            outline: 'none'
                        },
                    }}

                    sx={{ border: '1px solid #D9E2EB' }}
                    {...props}
                />
            )}
        </Box>
    );
};

export default PrimaryTextField;