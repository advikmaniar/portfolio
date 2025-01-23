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
                    transition: "all 0.3s ease",
                }}
                aria-label={color}
            >
                {React.cloneElement(icon, { sx: { color: "white" } })}
            </IconButton>
        </a>
    );
};

const softwareProjects = [

    {
        date: 'December 2024',
        name: 'EZInterview',
        affiliation: 'Self',
        textSecondary: 'Interview Platform for Job Seekers and Employers',
        description: [
            'REST APIs development with Java - SpringBoot',
            'Chatbot Intent development with Genesys - Google DialogFlow',
            'Version Control and CI/CD with Git - Jenkins - Openshift - XLD',
            '15+ successful production deployments'
        ],
        tools: [
            'React.js',
            'Node.js',
            'MongoDB',
            'AWS',
            'Twilio',
            'APIs',

        ],
        images: ['/EZInterview_Image1.png', '/EZInterview_Image2.png', '/EZInterview_Image3.png', '/EZInterview_Image4.png', '/EZInterview_Image5.png'],
        github: 'https://github.com/advikmaniar/interview-portal'
    },
    {
        date: 'May 2021',
        name: 'FarmApp',
        affiliation: 'Mumbai University',
        textSecondary: 'Android App developed with Flutter',
        description: [
            'IoT Based Smart Irrigation System',
            '',
            '',
        ],
        tools: [
            'Java',
            'Python',
            'Google Firebase',
            'Flutter',
            'Android Studio',
            'APIs',
            'AWS'
        ],
        images: ['/FarmApp_Image1.png', '/ezinterview2.png'],
        github: 'https://github.com/advikmaniar/FarmApp'
    },

    {
        date: 'December 2022',
        name: 'Only Football',
        affiliation: 'Self',
        textSecondary: 'E-commerce website developed using Python and Django',
        description: [
            'E-commerce website developed using Python and Django to browse, add-to-cart, and order football merchandise. Included functionality like Stripe payment.',
            'Integrated MongoDB to store user data and order history, and AWS to deploy the website.',
        ],
        tools: [
            'Python',
            'Django',
            'MySQL',
            'Stripe',
            'MongoDB',
            'APIs',
            'AWS'
        ],
        images: ['/OnlyFootball_Image1.png', '/OnlyFootball_Image2.png'],
        github: 'https://github.com/advikmaniar/Only-Football-Website'
    },
    {
        date: 'October 2024',
        name: 'React Portfolio',
        affiliation: 'Self',
        textSecondary: 'Personal Portfolio developed with React.js',
        description: [
            'Designed a responsive React portfolio using Material UI, showcasing projects, work experience, and skills interactively.',
            'Established a backend system with Node.js to deliver 100+ real-time messages from the UI directly to the inbox.',
            'Integrated an intelligent chatbot using Google DialogFlow, with 30+ intents to help users with FAQs and page navigation',
        ],
        tools: [
            'React.js',
            'HTML5',
            'CSS3',
            'Node.js',
            'Redux',
            'Google DialogFlow',
            'APIs',
            'AWS'
        ],
        images: ['/ReactPortfolio_Image1.png', '/ezinterview2.png'],
        github: 'https://github.com/advikmaniar/portfolio'
    },
];

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

const Projects = () => {
    const [expanded, setExpanded] = useState(null);

    const handleExpandClick = (index) => {
        setExpanded(expanded === index ? null : index);
    }

    const [likes, setLikes] = useState(Array(softwareProjects.length).fill(0));

    const handleLikeClick = (index) => {
        const newLikes = [...likes];
        newLikes[index] += 1;
        setLikes(newLikes);

    };

    return (
        // <Box
        //     sx={{
        //         width: '100%',
        //         backgroundColor: 'blue',
        //         borderRadius: '16px',
        //     }}
        // >
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                flexWrap: 'wrap',
            }}
        >
            <Box
                display="flex"
                flexDirection={{ xs: 'column', sm: 'row' }}
                backgroundColor="white"
                width="100%"
            >
                {softwareProjects.slice(0, 2).map((project, index) => (
                    <Box key={index}
                        sx={{
                            flex: expanded === index ? "80%" : (index === 0 ? 7 : 4),
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
                        onClick={() => handleExpandClick(index)}
                    >
                        <Card
                            sx={{
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                borderRadius: '20px',
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
                                sx={{ height: 350, width: '100%', objectFit: 'fit' }}
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
                                            <Typography variant="h5" component="div">
                                                {project.name}
                                            </Typography>
                                            <Typography variant="text" color="text.secondary">
                                                {project.textSecondary}
                                            </Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <StyledIcons
                                                color="github"
                                                bgColor="#333"
                                                hoverColor="#444"
                                                icon={<GitHub fontSize="medium" />}
                                                url={project.github}
                                            />
                                            {/* <IconButton
                            sx={{ ml: 1 }}
                            aria-label="like"
                            onClick={() => handleLikeClick(index)}
                            >
                            <Tooltip title={`${likes[index]} likes`} arrow>
                                <FavoriteBorderIcon sx={{ color: likes[index] > 0 ? 'red' : 'inherit' }} />
                            </Tooltip>
                            </IconButton> */}
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
                                            };
                                            return (
                                                <Box
                                                    key={i}
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
                                            );
                                        })}
                                        {expanded === index && (
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
            <Box
                display="flex"
                flexDirection={{ xs: 'column', sm: 'row' }}
                backgroundColor="white"
                width="100%"
            >
                {softwareProjects.slice(2).map((project, index) => (
                    <Box key={index}
                        sx={{
                            flex: expanded === index + 2 ? 9 : (index === 0 ? 1 : 1),
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
                        onClick={() => handleExpandClick(index + 2)}
                    >
                        <Card
                            sx={{
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                borderRadius: '20px',
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
                                sx={{ height: 250, width: '100%', objectFit: 'contain' }}
                            />
                            <CardContent
                                sx={{
                                    flexGrow: 1,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'left',
                                    alignItems: 'left'
                                }}>
                                <Box sx={{
                                    flexGrow: 1,
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {project.name}
                                    </Typography>
                                    <Typography variant="text" color="text.secondary">
                                        {project.textSecondary}
                                    </Typography>
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
                                                'Python': <FaPython style={{ marginRight: "8px", color: "#306998", fontSize: "2.5rem" }} />,
                                                'HTML5': <FaHtml5 style={{ marginRight: "8px", color: "#C42C05", fontSize: "2.5rem" }} />,
                                                'CSS3': <FaCss3Alt style={{ marginRight: "8px", color: "#006EBB", fontSize: "2.5rem" }} />,
                                                'Django': <SiDjango style={{ marginRight: "8px", color: "#2BA977", fontSize: "2.5rem" }} />,
                                                'MySQL': <SiMysql style={{ marginRight: "8px", color: "#61DBFB", fontSize: "2.5rem" }} />,
                                            };
                                            return (
                                                <Box
                                                    key={i}
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
                                            );
                                        })}
                                        {expanded === index + 2 && (
                                            <Box>
                                                {project.description.map((desc, i) => (
                                                    <Typography key={i} variant="body2" color="text.secondary">
                                                        {desc}
                                                    </Typography>
                                                ))}
                                            </Box>
                                        )}
                                    </Box>
                                    {expanded === index + 2 && (
                                        <Box>
                                            {project.description.map((desc, i) => (
                                                <Typography key={i} variant="body2" color="text.secondary">
                                                    {desc}
                                                </Typography>
                                            ))}
                                        </Box>
                                    )}
                                </Box>
                            </CardContent>
                        </Card>
                    </Box>
                ))}
            </Box>
        </Container>
        // </Box>
    );
};

export default Projects;