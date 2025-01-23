import React from 'react';
import { Button, Typography, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import IconButton from "@mui/material/IconButton"

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

export const StyledIcons = ({ color, bgColor, hoverColor, icon, url }) => {
    return (
        <a href={url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
            <IconButton
                sx={{
                    borderRadius: "50%",
                    backgroundColor: bgColor,
                    '&:hover': {
                        backgroundColor: hoverColor,
                        transform: "scale(1.2)",
                        boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.3)",
                    },
                    transition: "all 0.3s ease",
                }}
                aria-label={color}
            >
                {React.cloneElement(icon, { sx: { color: "white" } })}
            </IconButton>
        </a>
    );
};