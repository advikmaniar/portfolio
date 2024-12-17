import React from 'react';
import { Button, Typography, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export const CustomButton = ({ onClick, text }) => {
    const theme = useTheme();  

    return (
        <Button
            onClick={onClick}
            variant="contained"
            sx={{
                textTransform: 'none',
                fontWeight: 'bold',
                fontSize: '16px',
                borderRadius: '8px',
                padding: '5px 20px',
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                color: theme.palette.mode === 'dark' ? 'black' : 'white', 
                backgroundColor: theme.palette.mode === 'dark' 
                    ? 'white'  
                    : '#333333',   
                ':hover': {
                    backgroundColor: theme.palette.mode === 'dark' 
                        ? '#999999'  
                        : '#444444',  
                    color: 'white', 
                    boxShadow: '0px 6px 16px rgba(0, 0, 0, 0.2)',
                },
            }}
        >
            <Typography variant="button" color="inherit">
                {text}
            </Typography>
        </Button>
    );
};