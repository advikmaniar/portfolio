import { Container, Typography, IconButton } from '@mui/material';
import { Twitter, LinkedIn, GitHub, Instagram } from '@mui/icons-material';
import React from 'react';

const StyledIcons = ({ color, bgColor, hoverColor, icon, url }) => {
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

const NameCard = () => {
    return (
        <Container sx={{
            display: "flex",
            flexDirection: "column",
            bgcolor: "background.paper",
            height: "flex",
            width: "flex",
            p: "30px 50px 30px 50px",
            borderRadius: "16px",
            alignItems: "center",
            boxShadow: 1,
            transition: "all 0.5s ease",
            '&:hover': {
                boxShadow: 3,
                transform: "scale(1.02)",
            },
        }}>
            <Typography variant="h4" sx={{
                fontWeight: "bold",
                fontSize: { xs: '36px', sm: '65px'},
                display: "inline",
            }}>
                <Typography variant="h4" sx={{
                    display: { xs: 'none', sm: 'none', md: 'inline'},
                    fontSize: { xs: '36px', sm: '65px' }
                }}>
                    Hi, I'm
                </Typography>
                <span> <u>Advik Maniar</u></span>
            </Typography>
            <Typography variant="h6" sx={{
                fontSize: 25,
                color: "text.secondary",
                display: { xs: 'none', sm: 'block' }
            }}>
                Software Developer based In New York
            </Typography>

            {/* Social Media Icons */}
            <Container sx={{
                display: "flex",
                justifyContent: "center",
                gap: 2,
                mt: 3,
            }}>
                <StyledIcons
                    color="linkedin"
                    bgColor="#0077b5"
                    hoverColor="#005c8a"
                    icon={<LinkedIn fontSize="medium" />}
                    url="https://www.linkedin.com/in/advikmaniar/"
                />
                <StyledIcons
                    color="github"
                    bgColor="#333"
                    hoverColor="#444"
                    icon={<GitHub fontSize="medium" />}
                    url="https://github.com/advikmaniar"
                />
                <StyledIcons
                    color="twitter"
                    bgColor="#1da1f2"
                    hoverColor="#1991c6"
                    icon={<Twitter fontSize="medium" />}
                    url="https://x.com/home"
                />
                <StyledIcons
                    color="instagram"
                    bgColor="#e4405f"
                    hoverColor="#b32f46"
                    icon={<Instagram fontSize="medium" />}
                    url="https://www.instagram.com/advik0220/"
                />
            </Container>
        </Container>
    );
}

export default NameCard;