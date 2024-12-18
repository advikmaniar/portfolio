import React, { useState } from 'react';
import {
    Box,
    Button,
    Drawer,
    Typography,
    Divider,
    List,
    ListItem,
    ListItemText,
    IconButton,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from "@mui/material";
import { Close as CloseIcon } from '@mui/icons-material';
import { SiRedhatopenshift, SiOpencv, SiKeras, SiScikitlearn, SiPandas, SiNumpy, SiPlotly, SiDialogflow, SiDailydotdev, SiMongodb, SiMysql, SiDjango, SiSpringboot, SiJupyter, SiTensorflow } from "react-icons/si";
import { FaJenkins, FaBitbucket, FaGithub, FaChartPie, FaUserTie, FaPython, FaJava, FaDatabase, FaReact, FaHtml5, FaCss3Alt, FaNode } from "react-icons/fa";
import { IoLogoFirebase, IoLogoJavascript } from "react-icons/io5";
import { RiTeamFill } from "react-icons/ri";
import { GiCaptainHatProfile, GiThink } from "react-icons/gi";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { alpha, styled, useTheme } from "@mui/material/styles";

const SkillsSidebar = ({ open, onClose }) => {

    const [expandedPanels, setExpandedPanels] = useState([
        'panelWD1', 'panelWD2', 'panelWD3', 'panelWD4', 'panelWD5',
        'panelDA1', 'panelDA2', 'panelDA3',
        'panelSS1', 'panelSS2', 'panelSS3']);
    const theme = useTheme();

    const handleChange = (panel) => () => {
        if (expandedPanels.includes(panel)) {
            setExpandedPanels(expandedPanels.filter(p => p !== panel));
        } else {
            setExpandedPanels([...expandedPanels, panel]);
        }
    };

    return (
        <Drawer
            anchor="left"
            open={open}
            onClose={onClose}
            PaperProps={{
                sx: {
                    width: 300,
                    opacity: 1,
                    boxShadow: 5,
                    borderRadius: "0px 20px 20px 0px",
                    transition: "opacity 0.3s ease",
                    backgroundColor: "background.paper",
                    p: 1,
                    overflowY: "auto",
                    "&::-webkit-scrollbar": {
                        width: "2px",
                    },
                    "&::-webkit-scrollbar-thumb": {
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        borderRadius: "10px",
                    },
                    "&::-webkit-scrollbar-thumb:hover": {
                        backgroundColor: "rgba(0, 0, 0, 0.8)",
                    },
                    "&::-webkit-scrollbar-track": {
                        backgroundColor: "transparent",
                    },
                },
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    // backgroundColor: "red",
                    opacity: 0.9,
                    transition: "opacity 0.3s ease",
                    height: "100%",

                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        mb: 0,
                    }}
                >
                    <Typography variant="h6" sx={{ m: 1 }}>Skills</Typography>
                    <IconButton
                        onClick={onClose}
                        size="small"
                        sx={{
                            position: 'absolute',
                            borderRadius: "20px",
                            top: 10,
                            right: 10,
                            backgroundColor: 'transparent !important',
                            border: "transparent !important",
                            '&:hover': {
                                backgroundColor: 'transparent',
                                color: "black"
                            },
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                </Box>
                <Divider sx={{ mb: 2 }} />
                <Box
                    sx={{
                        backgroundColor: "background.paper",
                        color: "text.primary",
                        boxShadow: 5,
                        borderRadius: 2,
                        px: 2,
                        py: 1
                    }}>
                    {/* Web Development Section */}
                    <Box sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 1
                    }}>
                        <Typography variant="h6" sx={{ mb: 0 }}>
                            Web Development
                        </Typography>
                        <SiDailydotdev style={{ marginRight: "8px", color: "grey", fontSize: "1.5rem" }} />
                    </Box>

                    <Accordion
                        expanded={expandedPanels.includes('panelWD1')}
                        onChange={handleChange('panelWD1')}
                        sx={{
                            backgroundColor: "transparent",
                            padding: 0,
                            margin: 0,
                        }}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="frontend-content"
                            id="frontend-header"
                            sx={{
                                p: "0px 0px 0px 10px",
                                minHeight: "30px",
                                color: "text.secondary",
                                '& .MuiAccordionSummary-content': {
                                    margin: 0,
                                    alignItems: 'center',
                                },
                            }}
                        >
                            <Typography variant="h7">Frontend</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{
                            padding: "0px",
                            color: theme.palette.mode === "dark" ? "white" : "black",
                        }}>
                            <ListItem sx={{ padding: "0px 10px", marginBottom: 0.5 }}>
                                <FaHtml5 style={{ marginRight: "8px", color: "#C42C05", fontSize: "1.5rem" }} />
                                <ListItemText primary="HTML5" />
                            </ListItem>
                            <ListItem sx={{ padding: "0px 10px", marginBottom: 0.5 }}>
                                <FaCss3Alt style={{ marginRight: "8px", color: "#006EBB", fontSize: "1.5rem" }} />
                                <ListItemText primary="CSS3" />
                            </ListItem>
                            <ListItem sx={{ padding: "0px 10px", marginBottom: 0.5 }}>
                                <IoLogoJavascript style={{ marginRight: "8px", color: "#E1BF05", fontSize: "1.5rem" }} />
                                <ListItemText primary="JavaScript" />
                            </ListItem>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                        expanded={expandedPanels.includes('panelWD2')}
                        onChange={handleChange('panelWD2')}
                        sx={{
                            backgroundColor: "transparent",
                            padding: 0,
                            margin: 0,
                        }}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="backend-content"
                            id="backend-header"
                            sx={{
                                p: "0px 0px 0px 10px",
                                minHeight: "30px",
                                color: "text.secondary",
                                '& .MuiAccordionSummary-content': {
                                    margin: 0,
                                    alignItems: 'center',
                                },
                            }}
                        >
                            <Typography variant="h7">Backend</Typography>
                        </AccordionSummary>
                        <AccordionDetails
                            sx={{
                                padding: "0px",
                                color: theme.palette.mode === "dark" ? "white" : "black",
                            }}>
                            <ListItem sx={{ padding: "0px 10px", marginBottom: 0.5 }}>
                                <FaNode style={{ marginRight: "8px", color: "#3C873A", fontSize: "1.5rem" }} />
                                <ListItemText primary="Node.js" />
                            </ListItem>
                            <ListItem sx={{ padding: "0px 10px", marginBottom: 0.5 }}>
                                <FaJava style={{ marginRight: "8px", color: "#f89820", fontSize: "1.5rem" }} />
                                <ListItemText primary="Java" />
                            </ListItem>

                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                        expanded={expandedPanels.includes('panelWD3')}
                        onChange={handleChange('panelWD3')}
                        sx={{
                            backgroundColor: "transparent",
                            padding: 0,
                            margin: 0,
                        }}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="frameworks-content"
                            id="frameworks-header"
                            sx={{
                                p: "0px 0px 0px 10px",
                                minHeight: "30px",
                                color: "text.secondary",
                                '& .MuiAccordionSummary-content': {
                                    margin: 0,
                                    alignItems: 'center',
                                },
                            }}
                        >
                            <Typography variant="h7">Frameworks</Typography>
                        </AccordionSummary>
                        <AccordionDetails
                            sx={{
                                padding: "0px",
                                color: theme.palette.mode === "dark" ? "white" : "black",
                            }}>
                            <ListItem sx={{ padding: "0px 10px", marginBottom: 0.5 }}>
                                <FaReact style={{ marginRight: "8px", color: "#61DBFB", fontSize: "1.5rem" }} />
                                <ListItemText primary="React.js" />
                            </ListItem>
                            <ListItem sx={{ padding: "0px 10px", marginBottom: 0.5 }}>
                                <SiDjango style={{ marginRight: "8px", color: "#2BA977", fontSize: "1.5rem" }} />
                                <ListItemText primary="Django" />
                            </ListItem>
                            <ListItem sx={{ padding: "0px 10px", marginBottom: 0.5 }}>
                                <SiSpringboot style={{ marginRight: "8px", color: "#6BB13F", fontSize: "1.5rem" }} />
                                <ListItemText primary="SpringBoot" />
                            </ListItem>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                        expanded={expandedPanels.includes('panelWD4')}
                        onChange={handleChange('panelWD4')}
                        sx={{
                            backgroundColor: "transparent",
                            padding: 0,
                            margin: 0,
                        }}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="databases-content"
                            id="databases-header"
                            sx={{
                                p: "0px 0px 0px 10px",
                                minHeight: "30px",
                                color: "text.secondary",
                                '& .MuiAccordionSummary-content': {
                                    margin: 0,
                                    alignItems: 'center',
                                },
                            }}
                        >
                            <Typography variant="h7">Databases/Cloud</Typography>
                        </AccordionSummary>
                        <AccordionDetails
                            sx={{
                                padding: "0px",
                                color: theme.palette.mode === "dark" ? "white" : "black",
                            }}>
                            <ListItem sx={{ padding: "0px 10px", marginBottom: 0.5 }}>
                                <SiMysql style={{ marginRight: "8px", color: "#61DBFB", fontSize: "1.5rem" }} />
                                <ListItemText primary="MySQL" />
                            </ListItem>
                            <ListItem sx={{ padding: "0px 10px", marginBottom: 0.5 }}>
                                <SiMongodb style={{ marginRight: "8px", color: "#3FA037", fontSize: "1.5rem" }} />
                                <ListItemText primary="MongoDB" />
                            </ListItem>
                            <ListItem sx={{ padding: "0px 10px", marginBottom: 0.5 }}>
                                <IoLogoFirebase style={{ marginRight: "8px", color: "#f5820D", fontSize: "1.5rem" }} />
                                <ListItemText primary="Google Firebase" />
                            </ListItem>
                            <ListItem sx={{ padding: "0px 10px", marginBottom: 0.5 }}>
                                <SiDialogflow style={{ marginRight: "8px", color: "#f5820D", fontSize: "1.5rem" }} />
                                <ListItemText primary="Google DialogFlow" />
                            </ListItem>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                        expanded={expandedPanels.includes('panelWD5')}
                        onChange={handleChange('panelWD5')}
                        sx={{
                            backgroundColor: "transparent",
                            padding: 0,
                            margin: 0,
                        }}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="versioncontrol-content"
                            id="versioncontrol-header"
                            sx={{
                                p: "0px 0px 0px 10px",
                                minHeight: "30px",
                                color: "text.secondary",
                                '& .MuiAccordionSummary-content': {
                                    margin: 0,
                                    alignItems: 'center',
                                },
                            }}
                        >
                            <Typography variant="h7">Version Control</Typography>
                        </AccordionSummary>
                        <AccordionDetails
                            sx={{
                                padding: "0px",
                                color: theme.palette.mode === "dark" ? "white" : "black",
                            }}>
                            <ListItem sx={{ padding: "0px 10px", marginBottom: 0.5 }}>
                                <FaGithub style={{ marginRight: "8px", color: "#9A59B5", fontSize: "1.5rem" }} />
                                <ListItemText primary="GitHub" />
                            </ListItem>
                            <ListItem sx={{ padding: "0px 10px", marginBottom: 0.5 }}>
                                <FaBitbucket style={{ marginRight: "8px", color: "#2682FD", fontSize: "1.5rem" }} />
                                <ListItemText primary="BitBucket" />
                            </ListItem>
                            <ListItem sx={{ padding: "0px 10px", marginBottom: 0.5 }}>
                                <FaJenkins  style={{ marginRight: "8px", color: "red", fontSize: "1.5rem" }} />
                                <ListItemText primary="Jenkins" />
                            </ListItem>
                            <ListItem sx={{ padding: "0px 10px", marginBottom: 0.5 }}>
                                <SiRedhatopenshift style={{ marginRight: "8px", color: "red", fontSize: "1.5rem" }} />
                                <ListItemText primary="OpenShift" />
                            </ListItem>

                        </AccordionDetails>
                    </Accordion>
                </Box>
                <Divider sx={{ my: 2 }} />
                {/* Data Analysis / Machine Learning Section */}
                <Box
                    sx={{
                        backgroundColor: "background.paper",
                        color: "text.primary",
                        boxShadow: 5,
                        borderRadius: 2,
                        px: 2,
                        py: 1
                    }}>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 1
                    }}>
                        <Typography variant="h6" sx={{ mb: 0 }}>
                            Data Analytics
                        </Typography>
                        <TbDeviceDesktopAnalytics style={{ marginRight: "8px", color: "grey", fontSize: "1.5rem" }} />
                    </Box>

                    <Accordion
                        expanded={expandedPanels.includes('panelDA1')}
                        onChange={handleChange('panelDA1')}
                        sx={{
                            backgroundColor: "transparent",
                            padding: 0,
                            margin: 0,
                        }}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="frontend-content"
                            id="frontend-header"
                            sx={{
                                p: "0px 0px 0px 10px",
                                minHeight: "30px",
                                color: "text.secondary",
                                '& .MuiAccordionSummary-content': {
                                    margin: 0,
                                    alignItems: 'center',
                                },
                            }}
                        >
                            <Typography variant="h7">Data Manipulation</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{
                            padding: "0px",
                            color: theme.palette.mode === "dark" ? "white" : "black",
                        }}
                        >
                            <ListItem sx={{ padding: "0px 10px", marginBottom: 0.5 }}>
                                <FaPython style={{ marginRight: "8px", color: "#306998", fontSize: "1.5rem" }} />
                                <ListItemText primary="Python" />
                            </ListItem>
                            <ListItem sx={{ padding: "0px 10px", marginBottom: 0.5 }}>
                                <SiPandas style={{ marginRight: "8px", color: "#130751", fontSize: "1.5rem" }} />
                                <ListItemText primary="Pandas" />
                            </ListItem>
                            <ListItem sx={{ padding: "0px 10px", marginBottom: 0.5 }}>
                                <SiNumpy style={{ marginRight: "8px", color: "#4D76CE", fontSize: "1.5rem" }} />
                                <ListItemText primary="NumPy" />
                            </ListItem>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                        expanded={expandedPanels.includes('panelDA2')}
                        onChange={handleChange('panelDA2')}
                        sx={{
                            backgroundColor: "transparent",
                            padding: 0,
                            margin: 0,
                        }}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="backend-content"
                            id="backend-header"
                            sx={{
                                p: "0px 0px 0px 10px",
                                minHeight: "30px",
                                color: "text.secondary",
                                '& .MuiAccordionSummary-content': {
                                    margin: 0,
                                    alignItems: 'center',
                                },
                            }}
                        >
                            <Typography variant="h7">Data Visualization</Typography>
                        </AccordionSummary>
                        <AccordionDetails
                            sx={{
                                padding: "0px",
                                color: theme.palette.mode === "dark" ? "white" : "black",
                            }}>
                            <ListItem sx={{ padding: "0px 10px", marginBottom: 0.5 }}>
                                <FaChartPie style={{ marginRight: "8px", color: "#3C873A", fontSize: "1.5rem" }} />
                                <ListItemText primary="Matplotlib" />
                            </ListItem>
                            <ListItem sx={{ padding: "0px 10px", marginBottom: 0.5 }}>
                                <SiPlotly style={{ marginRight: "8px", color: "#119DFF", fontSize: "1.5rem" }} />
                                <ListItemText primary="Plotly" />
                            </ListItem>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                        expanded={expandedPanels.includes('panelDA3')}
                        onChange={handleChange('panelDA3')}
                        sx={{
                            backgroundColor: "transparent",
                            padding: 0,
                            margin: 0,
                        }}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="frameworks-content"
                            id="frameworks-header"
                            sx={{
                                p: "0px 0px 0px 10px",
                                minHeight: "30px",
                                color: "text.secondary",
                                '& .MuiAccordionSummary-content': {
                                    margin: 0,
                                    alignItems: 'center',
                                },
                            }}
                        >
                            <Typography variant="h7">Machine Learning</Typography>
                        </AccordionSummary>
                        <AccordionDetails
                            sx={{
                                padding: "0px",
                                color: theme.palette.mode === "dark" ? "white" : "black",
                            }}>
                            <ListItem sx={{ padding: "0px 10px", marginBottom: 0.5 }}>
                                <SiScikitlearn style={{ marginRight: "8px", color: "#F79939", fontSize: "1.5rem" }} />
                                <ListItemText primary="Scikit-Learn" />
                            </ListItem>
                            <ListItem sx={{ padding: "0px 10px", marginBottom: 0.5 }}>
                                <SiTensorflow style={{ marginRight: "8px", color: "#FFA101", fontSize: "1.5rem" }} />
                                <ListItemText primary="TensorFlow" />
                            </ListItem>
                            <ListItem sx={{ padding: "0px 10px", marginBottom: 0.5 }}>
                                <SiKeras style={{ marginRight: "8px", color: "#CE0002", fontSize: "1.5rem" }} />
                                <ListItemText primary="Keras" />
                            </ListItem>
                            <ListItem sx={{ padding: "0px 10px", marginBottom: 0.5 }}>
                                <SiOpencv  style={{ marginRight: "8px", color: "#06FC09", fontSize: "1.5rem" }} />
                                <ListItemText primary="OpenCV" />
                            </ListItem>
                        </AccordionDetails>
                    </Accordion>
                </Box>
                <Divider sx={{ my: 2 }} />
                <Box
                    sx={{
                        backgroundColor: "background.paper",
                        color: "text.primary",
                        boxShadow: 5,
                        borderRadius: 2,
                        px: 2,
                        py: 1
                    }}>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 1
                    }}>
                        <Typography variant="h6" sx={{ mb: 0 }}>
                            Soft Skills
                        </Typography>
                        <FaUserTie style={{ marginRight: "8px", color: "grey", fontSize: "1.5rem" }} />
                    </Box>

                    <Accordion
                        expanded={expandedPanels.includes('panelSS1')}
                        onChange={handleChange('panelSS1')}
                        sx={{
                            backgroundColor: "transparent",
                            padding: 0,
                            margin: 0,
                        }}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="frontend-content"
                            id="frontend-header"
                            sx={{
                                p: "0px 0px 0px 10px",
                                minHeight: "30px",
                                color: "text.secondary",
                                '& .MuiAccordionSummary-content': {
                                    margin: 0,
                                    alignItems: 'center',
                                },
                            }}
                        >
                            <Typography variant="h7">Soft Skills</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{
                            padding: "0px",
                            color: theme.palette.mode === "dark" ? "white" : "black",
                        }}>
                            <ListItem sx={{ padding: "0px 10px", marginBottom: 0.5 }}>
                                <RiTeamFill style={{ marginRight: "8px", color: "lightblue", fontSize: "1.5rem" }} />
                                <ListItemText primary="Team Collaboration" />
                            </ListItem>
                            <ListItem sx={{ padding: "0px 10px", marginBottom: 0.5 }}>
                                <SiNumpy style={{ marginRight: "8px", color: "#4D76CE", fontSize: "1.5rem" }} />
                                <ListItemText primary="Agile" />
                            </ListItem>
                            <ListItem sx={{ padding: "0px 10px", marginBottom: 0.5 }}>
                                <GiCaptainHatProfile style={{ marginRight: "8px", color: "yellow", fontSize: "1.5rem" }} />
                                <ListItemText primary="Leadership" />
                            </ListItem>
                            <ListItem sx={{ padding: "0px 10px", marginBottom: 0.5 }}>
                                <GiThink style={{ marginRight: "8px", color: "#119DFF", fontSize: "1.5rem" }} />
                                <ListItemText primary="Critical Thinking" />
                            </ListItem>
                        </AccordionDetails>
                    </Accordion>
                </Box>
            </Box>
        </Drawer>
    );
};

export default SkillsSidebar;
