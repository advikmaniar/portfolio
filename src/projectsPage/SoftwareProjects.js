import React, { useState } from 'react';
import { Divider, Typography, Box, Container, IconButton } from '@mui/material';
import { ArrowForward, GitHub } from '@mui/icons-material';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { FaPython } from "react-icons/fa";
import { FaJava, FaReact, FaHtml5, FaCss3Alt, FaNode } from "react-icons/fa";
import { FaFlutter } from "react-icons/fa6";
import { IoLogoFirebase } from "react-icons/io5";
import { SiRedux, SiDialogflow, SiTwilio, SiMongodb, SiMysql, SiDjango } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Tooltip from '@mui/material/Tooltip';
import { IoIosClose } from "react-icons/io";
import { FcAndroidOs } from "react-icons/fc";
import { StyledIconsPortfolio } from '../utils/utils';

const softwareProjects = [

    {
        date: 'December 2024',
        name: 'EZInterview',
        affiliation: 'Self',
        textSecondary: 'Interview Platform for Job Seekers and Employers',
        description: [
            'Real-time interview platform for employers to conduct interviews.',
            'Secure authentication and authorization using JWT and OAuth2.0.',
            'Designed with Material UI and React.js for a seamless user experience.',
            'Integrated Twilio to establish secure meeting rooms for interviews.',
            'Deployed on AWS EC2 and S3 for scalability and reliability.',
        ],
        tools: [
            'React.js',
            'Node.js',
            'MongoDB',
            'AWS',
            'Twilio',
            'APIs',

        ],
        images: ['/EZInterviewImages/EZInterview_Image1.png', '/EZInterviewImages/EZInterview_Image2.png', '/EZInterviewImages/EZInterview_Image3.png', '/EZInterviewImages/EZInterview_Image4.png', '/EZInterview_Image5.png'],
        github: 'https://github.com/advikmaniar/interview-portal'
    },
    {
        date: 'May 2021',
        name: 'FarmApp',
        affiliation: 'Mumbai University',
        textSecondary: 'Android App developed with Java and Flutter',
        description: [
            'IoT Based Smart Irrigation System',
            '',
            '',
        ],
        tools: [
            'Java',
            'Android',
            'Python',
            'Google Firebase',
            'Flutter',
        ],
        images: ['/FarmAppImages/FarmApp_Image1.png', '/FarmAppImages/FarmApp_Image2.png', '/FarmAppImages/FarmApp_Image3.png', '/FarmAppImages/FarmApp_Image4.png'],
        github: 'https://github.com/advikmaniar/FarmApp'
    },

    {
        date: 'December 2022',
        name: 'Only Football',
        affiliation: 'New York Institute of Technology',
        textSecondary: 'E-commerce website for football merchandise',
        description: [
            'E-commerce website developed using Python and Django to browse, add-to-cart, and order football merchandise. Included functionality like Stripe payment.',
            'Integrated MongoDB to store user data and order history, and AWS to deploy the website.',
        ],
        tools: [
            'Python',
            'Django',
            'MySQL',
            'MongoDB',
            'Stripe',
            'AWS'
        ],
        images: ['/OnlyFootballImages/OnlyFootball_Image1.png', '/OnlyFootballImages/OnlyFootball_Image2.png'],
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
            'AWS',
        ],
        images: ['/PersonalPortfolioImages/ReactPortfolio_Image1.png', '/PersonalPortfolioImages/ReactPortfolio_Image2.png',
            '/PersonalPortfolioImages/ReactPortfolio_Image3.png', '/PersonalPortfolioImages/ReactPortfolio_Image4.png'],
        github: 'https://github.com/advikmaniar/portfolio'
    },
];

const SoftwareProjects = () => {
    const [expanded, setExpanded] = useState(null);

    const handleExpandClick = (row, index) => {
        setExpanded(expanded === `${row}-${index}` ? null : `${row}-${index}`);
    };

    const [likes, setLikes] = useState(Array(softwareProjects.length).fill(0));
    const [expandedImageIndex, setExpandedImageIndex] = useState(0);

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
                backgroundColor: 'background.paper',
                opacity: 0.9,
                padding: '10px',
                borderRadius: '10px',
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
                    fontFamily: 'Cursive',
                }}
            >
                Some of the websites and mobile applications I have developed.
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                }}
            >
                {[0, 1].map((row) => (
                    <Box
                        key={row}
                        display="flex"
                        flexDirection={{ xs: 'column', sm: 'row' }}
                        width="100%"
                    >
                        {softwareProjects.slice(row * 2, row * 2 + 2).map((project, index) => (
                            <Box key={index}
                                sx={{
                                    height: expanded === `${row}-${index}` ? '60vh' : expanded ? "50px" : "350px",
                                    width: expanded === `${row}-${index}` ? '100vh' : expanded ? "50px" : "100%",
                                    transition: 'all 0.3s ease',
                                    margin: '10px',
                                    position: 'relative',
                                    '&:hover::after': {
                                        content: expanded === `${row}-${index}` ? '""' : `"${project.name}"`,
                                        position: 'absolute',
                                        padding: '2px',
                                        borderRadius: '10px',
                                        zIndex: 1,
                                    },
                                }}

                            >
                                <Card
                                    sx={{
                                        p: 0,
                                        m: 0,
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        borderRadius: '10px',
                                        justifyContent: 'left',
                                        alignItems: 'left',
                                        transition: 'all 0.3s ease',
                                        backgroundColor: 'background.paper',
                                        '&:hover': expanded === `${row}-${index}` ? {} : {
                                            boxShadow: 3,
                                            transform: "scale(1.01)",
                                            cursor: 'pointer',
                                            opacity: 0.8,
                                        },
                                    }}
                                >
                                    <Box sx={{ position: 'relative', height: expanded === `${row}-${index}` ? '60%' : '60%', width: '100%' }}>
                                        {expanded === `${row}-${index}` && (
                                            <>
                                                <IconButton
                                                    sx={{ position: 'absolute', top: '50%', left: 0, zIndex: 2, border: '0px', }}
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setExpandedImageIndex((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));
                                                    }}
                                                >
                                                    &lt;
                                                </IconButton>
                                                <IconButton
                                                    sx={{ position: 'absolute', top: '50%', right: 0, zIndex: 2, border: '0px', }}
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setExpandedImageIndex((prev) => (prev === project.images.length - 1 ? 0 : prev + 1));
                                                    }}
                                                >
                                                    &gt;
                                                </IconButton>
                                                <IconButton
                                                    sx={{
                                                        position: 'absolute',
                                                        top: 0,
                                                        right: 0,
                                                        borderRadius: '10px',
                                                        border: '0px',
                                                        zIndex: 2
                                                    }}
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setExpanded(null);
                                                    }}
                                                >
                                                    <IoIosClose />
                                                </IconButton>
                                            </>
                                        )}
                                        <CardMedia
                                            component="img"
                                            image={project.images[expanded === `${row}-${index}` ? expandedImageIndex : 0]}
                                            alt={`${project.name} image ${expanded === `${row}-${index}` ? expandedImageIndex + 1 : 1}`}
                                            sx={{
                                                height: '100%',
                                                width: '100%',
                                                objectFit: expanded === `${row}-${index}` ? "contain" : "fit",
                                                borderRadius: '10px 10px 0px 0px'
                                            }}
                                            onClick={() => handleExpandClick(row, index)}
                                        />
                                    </Box>
                                    <CardContent
                                        sx={{
                                            flexGrow: 1,
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'left',
                                            alignItems: 'left',
                                            height: expanded === `${row}-${index}` ? '50%' : '40%',
                                        }}
                                        onClick={() => handleExpandClick(row, index)}
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
                                                    alignItems: 'center',
                                                }}>
                                                <Box>
                                                    <Typography variant="h5" component="div"
                                                        sx={{
                                                            color: 'text.primary',
                                                            fontWeight: 'bold',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            flexDirection: 'row',
                                                            gap: '22px',
                                                        }}
                                                    >
                                                        {project.name}
                                                        {project.affiliation !== 'Self' && (
                                                            <Box sx={{
                                                                display: 'flex',
                                                                alignContent: 'center',
                                                                backgroundColor: '#77dd77', // pastel green color code
                                                                borderRadius: '20px',
                                                                px: '5px',
                                                                py: '2px',
                                                                boxShadow: 3,
                                                            }}>
                                                                <Typography variant="body2" color="black">
                                                                    {project.affiliation}
                                                                </Typography>
                                                            </Box>
                                                        )}
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary">
                                                        {project.textSecondary}
                                                    </Typography>
                                                </Box>
                                                <StyledIconsPortfolio
                                                    color="github"
                                                    bgColor="#333"
                                                    hoverColor="#444"
                                                    icon={<GitHub fontSize="medium" />}
                                                    url={project.github}
                                                    onClick={(event) => event.stopPropagation()}
                                                />
                                            </Container>
                                            <Divider sx={{ m: 1 }} />
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    mt: 0,
                                                }}
                                            >
                                                {project.tools.slice(0, expanded === `${row}-${index}` ? project.tools.length : 4).map((tool, i) => {
                                                    const icons = {
                                                        'React.js': <FaReact style={{ marginRight: "6px", color: "#61DBFB", fontSize: "2.5rem" }} />,
                                                        'Node.js': <FaNode style={{ marginRight: "6px", color: "#68A063", fontSize: "2.5rem" }} />,
                                                        'Java': <FaJava style={{ marginRight: "6px", color: "#f89820", fontSize: "2.5rem" }} />,
                                                        'Python': <FaPython style={{ marginRight: "6px", color: "#306998", fontSize: "2.5rem" }} />,
                                                        'MongoDB': <SiMongodb style={{ marginRight: "6px", color: "#3FA037", fontSize: "1.5rem" }} />,
                                                        'AWS': <FaAws style={{ marginRight: "6px", color: "#FF9900", fontSize: "2.5rem" }} />,
                                                        'Flutter': <FaFlutter style={{ marginRight: "6px", color: "#02569B", fontSize: "2.5rem" }} />,
                                                        'Google Firebase': <IoLogoFirebase style={{ marginRight: "6px", color: "#f5820D", fontSize: "2.5rem" }} />,
                                                        'HTML5': <FaHtml5 style={{ marginRight: "6px", color: "#C42C05", fontSize: "2.5rem" }} />,
                                                        'CSS3': <FaCss3Alt style={{ marginRight: "6px", color: "#006EBB", fontSize: "2.5rem" }} />,
                                                        'Django': <SiDjango style={{ marginRight: "6px", color: "#2BA977", fontSize: "2.5rem" }} />,
                                                        'MySQL': <SiMysql style={{ marginRight: "6px", color: "#61DBFB", fontSize: "2.5rem" }} />,
                                                        'Twilio': <SiTwilio style={{ marginRight: "6px", color: "#F22F46", fontSize: "2.5rem" }} />,
                                                        'Google DialogFlow': <SiDialogflow style={{ marginRight: "6px", color: "#f5820D", fontSize: "2.5rem" }} />,
                                                        'Redux': <SiRedux style={{ marginRight: "6px", color: "#764ABC", fontSize: "2.5rem" }} />,
                                                        'Android': <FcAndroidOs style={{ marginRight: "6px", color: "#7db343", fontSize: "2.5rem" }} />,
                                                    };
                                                    return (
                                                        <Tooltip title={tool} key={i}>
                                                            <Box
                                                                sx={{
                                                                    m: 1,
                                                                    width: 'fit-content',
                                                                    flexWrap: "wrap",
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
                                                    <Box
                                                        sx={{
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            justifyContent: 'left',
                                                            alignItems: 'left',
                                                            backgroundColor: 'background.default',
                                                            borderRadius: '10px',
                                                            padding: '10px',
                                                        }}>
                                                        {project.description.map((desc, i) => (
                                                            <Typography key={i} variant="body2" color="text.secondary"
                                                                sx={{
                                                                    fontSize: '1rem',
                                                                }}>
                                                                <li>{desc}</li>
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
            <Divider sx={{ mt: 1 }} />
            <Typography variant="h6" color="text.secondary"
                sx={{
                    mt: 1,
                    color: 'text.secondary',
                    backgroundColor: 'background.paper',
                    fontWeight: 'bold',
                    textAlign: 'left',
                    width: 'fit-content',
                    borderRadius: '10px',
                    p: '5px',
                    fontFamily: 'Cursive',
                    justifyContent: 'center',
                }}>
                To view more projects you can navigate to my GitHub Profile here -&gt; {' '}
                <StyledIconsPortfolio
                    color="github"
                    bgColor="#333"
                    hoverColor="#444"
                    icon={<GitHub fontSize="medium" />}
                    url="https://github.com/advikmaniar?tab=repositories"
                />
            </Typography>
        </Container>
    );
};

export default SoftwareProjects;