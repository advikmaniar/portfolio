import React, { useState } from 'react';
import { Divider, Typography, Box, Container, IconButton } from '@mui/material';
import { GitHub } from '@mui/icons-material';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { FaPython } from "react-icons/fa";
import { FaJava, FaReact, FaHtml5, FaCss3Alt, FaNode } from "react-icons/fa";
import { FaFlutter } from "react-icons/fa6";
import { IoLogoFirebase } from "react-icons/io5";
import { SiMongodb, SiMysql, SiDjango } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Tooltip from '@mui/material/Tooltip';

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
                    '&:hover::after': {
                        content: '"View Code"',
                        position: 'absolute',
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        color: 'white',
                        padding: '2px 8px',
                        borderRadius: '10px',
                        top: '100%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        whiteSpace: 'nowrap',
                        zIndex: 1,
                        fontSize: '0.70rem',
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

const dataProjects = [
    {
        date: 'May 2023',
        name: 'Stock Market Prediction',
        affiliation: 'Entrepreneurship and Technology Innovation Center',
        description: [
            'Led a group of 4 developers to create an ML-based stock prediction model, achieving a prediction accuracy of 70%. ',
            'Analyzed financial data for 50 stocks, including sentiment analysis with news data from Yahoo Finance API and Beautiful Soup. ',
            'Developed an intuitive StreamLit dashboard to display real-time predictions for over 50 stocks.'
        ],
        tools: [
            'Python',
            'Sklearn',
            'Pandas',
            'Numpy',
            'MySQL',
        ],
        image: '/ezinterview.png'
    },
    {
        date: 'December 2022',
        name: 'Data Analysis Tool',
        affiliation: 'Entrepreneurship and Technology Innovation Center',
        description: [
            'REST APIs development with Java - SpringBoot',
            'Chatbot Intent development with Genesys - Google DialogFlow',
            'Version Control and CI/CD with Git - Jenkins - Openshift - XLD',
            '15+ successful production deployments'
        ],
        tools: [
            'Python',
            'Sklearn',
            'Pandas',
            'Numpy',
            'MySQL',
        ],
        image: '/ezinterview.png'
    },
    {
        date: 'October 2024',
        name: 'Anime Recommendation System',
        affiliation: 'New York Institute of Technology',
        description: [
            'Developed a hybrid recommendation system using collaborative filtering / content based methods which uses User-User and Item-Item similarity index.',
            'Analyzed and visualized data using Python libraries like Pandas, Numpy, Matplotlib, and Seaborn.',

        ],
        tools: [
            'React.js',
            'Node.js',
            'Redux',
            'Google DialogFlow',
            'APIs',
            'AWS'
        ],
        image: '/ezinterview.png'
    },
    {
        date: 'May 2021',
        name: 'Machine Learning in Healthcare',
        affiliation: 'Self',
        description: [
            "This is an interactive Machine Learning Web App developed using Python and StreamLit.",
            "It uses ML algorithms to build powerful models and predict the risk of the user of having a Heart Attack or Breast Cancer based on the user's specific attributes.",
        ],
        tools: [
            'Python',
            'StreamLit',
            'SQL',
            'TensorFlow',
            'Keras',
        ],
        image: '/ezinterview.png'
    },
];

const SoftwareProjects = () => {
    const [expanded, setExpanded] = useState(null);

    const handleExpandClick = (row, index) => {
        setExpanded(expanded === `${row}-${index}` ? null : `${row}-${index}`);
    };

    const [likes, setLikes] = useState(Array(dataProjects.length).fill(0));

    const handleLikeClick = (index) => {
        const newLikes = [...likes];
        newLikes[index] += 1;
        setLikes(newLikes);

    };

    return (
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                flexWrap: 'wrap',
                backgroundColor: 'white',
                padding: '20px',
                borderRadius: '16px',
                boxShadow: 3,
                alignItems: 'left',
            }}
        >
            <Typography variant="h6" component="div"
                sx={{
                    mb: 1,
                    color: 'text.secondary',
                    backgroundColor: 'background.paper',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    width: 'fit-content',
                    borderRadius: '10px',
                    p: '5px',
                    opacity: 0.9,
                }}
            >
                Here are some of the data systems I have worked on
            </Typography>
            <Box
                display="flex"
                flexDirection="column"
                width="100%"
                flexWrap="wrap"
            >
                {[0, 1].map((row) => (
                    <Box
                        key={row}
                        display="flex"
                        flexDirection={{ xs: 'column', sm: 'row' }}
                        width="100%"
                        flexWrap="wrap"
                    >
                        {dataProjects.slice(row * 2, row * 2 + 2).map((project, index) => (
                            <Box key={index}
                                sx={{
                                    flex: expanded === `${row}-${index}` ? "90%" : row === 0 ? (index === 0 ? 5 : 3) : 1,
                                    height: expanded === `${row}-${index}` ? '80vh' : "350px",
                                    width: expanded === `${row}-${index}` ? '80vh' : "",
                                    transition: 'all 0.3s ease',
                                    margin: '5px',
                                    position: 'relative',
                                    '&:hover::after': {
                                        content: `"${project.name}"`,
                                        position: 'absolute',
                                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                                        color: 'white',
                                        padding: '2px',
                                        borderRadius: '10px',
                                        zIndex: 1,
                                    },
                                }}
                                onClick={() => handleExpandClick(row, index)}
                            >
                                <Card
                                    sx={{
                                        p: 0,
                                        m: 0,
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        borderRadius: '10px 10px 0px 0px',
                                        justifyContent: 'left',
                                        alignItems: 'left',
                                        transition: 'all 0.3s ease',
                                        backgroundColor: 'background.paper',
                                        '&:hover': {
                                            boxShadow: 3,
                                            transform: "scale(1.01)",
                                            cursor: 'pointer',
                                            opacity: 0.8,
                                        },
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        image={project.images[0]}
                                        alt={`${project.name} image 1`}
                                        sx={{ height: '60%', width: '100%', objectFit: 'fit', borderRadius: '10px 10px 0px 0px' }}
                                    />
                                    <CardContent
                                        sx={{
                                            flexGrow: 1,
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'left',
                                            alignItems: 'left'
                                        }}
                                    >
                                        <Box sx={{
                                            flexGrow: 1,
                                            display: 'flex',
                                            flexDirection: 'column',
                                        }}>
                                            <Container
                                                sx={{
                                                    display: 'flex',
                                                    flexDirection: 'row',
                                                    justifyContent: 'space-between',
                                                }}>
                                                <Box>
                                                    <Typography variant="h5" component="div" sx={{ color: 'text.primary', fontWeight: 'bold' }}>
                                                        {project.name}
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary">
                                                        {project.textSecondary}
                                                    </Typography>
                                                </Box>
                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                    }}
                                                >
                                                    <StyledIcons
                                                        color="github"
                                                        bgColor="#333"
                                                        hoverColor="#444"
                                                        icon={<GitHub fontSize="medium" />}
                                                        url={project.github}
                                                    />
                                                </Box>
                                            </Container>
                                            <Divider sx={{ my: 1 }} />
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    mt: 0
                                                }}
                                            >
                                                {project.tools.slice(0, 3).map((tool, i) => {
                                                    const icons = {
                                                        'React.js': <FaReact style={{ marginRight: "8px", color: "#61DBFB", fontSize: "2.5rem" }} />,
                                                        'Node.js': <FaNode style={{ marginRight: "8px", color: "#68A063", fontSize: "2.5rem" }} />,
                                                        'Java': <FaJava style={{ marginRight: "8px", color: "#f89820", fontSize: "2.5rem" }} />,
                                                        'Python': <FaPython style={{ marginRight: "8px", color: "#306998", fontSize: "2.5rem" }} />,
                                                        'MongoDB': <SiMongodb style={{ marginRight: "8px", color: "#3FA037", fontSize: "1.5rem" }} />,
                                                        'AWS': <FaAws style={{ marginRight: "8px", color: "#FF9900", fontSize: "2.5rem" }} />,
                                                        'Flutter': <FaFlutter style={{ marginRight: "8px", color: "#02569B", fontSize: "2.5rem" }} />,
                                                        'Google Firebase': <IoLogoFirebase style={{ marginRight: "8px", color: "#f5820D", fontSize: "2.5rem" }} />,
                                                        'HTML5': <FaHtml5 style={{ marginRight: "8px", color: "#C42C05", fontSize: "2.5rem" }} />,
                                                        'CSS3': <FaCss3Alt style={{ marginRight: "8px", color: "#006EBB", fontSize: "2.5rem" }} />,
                                                        'Django': <SiDjango style={{ marginRight: "8px", color: "#2BA977", fontSize: "2.5rem" }} />,
                                                        'MySQL': <SiMysql style={{ marginRight: "8px", color: "#61DBFB", fontSize: "2.5rem" }} />,
                                                    };
                                                    return (
                                                        <Tooltip title={tool} key={i}>
                                                            <Box
                                                                sx={{
                                                                    m: 1,
                                                                    '&:hover': {
                                                                        transform: 'scale(1.2)',
                                                                        transition: 'transform 0.2s ease-in-out'
                                                                    }
                                                                }}
                                                            >
                                                                {icons[tool]}
                                                            </Box>
                                                        </Tooltip>
                                                    );
                                                })}
                                                {expanded === `${row}-${index}` && (
                                                    <Box>
                                                        {project.description.map((desc, i) => (
                                                            <Typography key={i} variant="body2" color="text.secondary">
                                                                {desc}
                                                            </Typography>
                                                        ))}
                                                    </Box>
                                                )}
                                            </Box>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Box>
                        ))}
                    </Box>
                ))}
            </Box>
        </Container>
    );
};

export default SoftwareProjects;