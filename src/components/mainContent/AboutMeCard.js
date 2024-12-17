import { Container, Typography, Button, Divider, Box } from '@mui/material';
import { Link } from "react-router-dom";
import { FaJava, FaReact, FaPython } from "react-icons/fa";

const AboutMeCard = () => {
  return (
    <Container sx={{
      display: "flex",
      flexDirection: "column",
      bgcolor: "background.paper",
      height: "flex",
      width: "flex",
      p: "16px 24px 30px 50px",
      borderRadius: "16px",
      boxShadow: 1,
      transition: "all 0.5s ease",
      '&:hover': {
        boxShadow: 3,
        transform: "scale(1.02)",
      },
    }}>
      {/* About Me Section */}
      <Typography variant="h6" sx={{ color: "text.primary", fontSize: 20, mb: 0 }}>
        ABOUT ME
      </Typography>
      <Typography variant="body1" sx={{ color: "text.secondary", mb: 0 }}>
        Very passionate Software Developer currently working at{" "}
        <a href="https://www.voya.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "orange" }}>
          Voya Financial
        </a>.
        <Divider sx={{ borderColor: "text.secondary", my: 1, width: "60%", mx: "auto" }} />
      </Typography>
      <Typography variant="h7" sx={{ color: "text.secondary", fontWeight: "bold", mb: 1 }}>
        My Core Skills
      </Typography>
      <Typography variant="body1" sx={{ color: "text.secondary", mb: 0 }}>
      <FaJava style={{ marginRight: "8px", color: "#f89820" }} /> API Development with Java | SpringBoot
      </Typography>
      <Typography variant="body1" sx={{ color: "text.secondary", mb: 0 }}>
      <FaReact style={{ marginRight: "8px", color: "#61DBFB" }} /> Web Development with React.js | Node.js
      </Typography>
      <Typography variant="body1" sx={{ color: "text.secondary", mb: 2 }}>
      <FaPython style={{ marginRight: "8px", color: "#306998" }} />  Machine Learning modeling with Python
      </Typography>

      <Button
        variant="contained"
        component={Link}
        to='/about'
        sx={{
          bgcolor: "primary.main",
          color: "background.paper",
          borderRadius: "8px",
          width: "fit-content",
          px: 2,
          py: 1,
          fontWeight: "bold",
          boxShadow: 3,
          transition: "all 0.3s ease",
          '&:hover': {
            bgcolor: "primary.dark",
            boxShadow: 6,
            transform: "translateY(-2px)",
          },
        }}
        endIcon={<span style={{ fontSize: '1.2em' }}>→</span>}
      >
        Learn More
      </Button>
      <Divider sx={{ borderColor: "text.secondary", my: 3 }} />

      {/* My Work Section */}
      <Typography variant="h6" sx={{ color: "text.primary", fontSize: 20, mb: 1 }}>
        MY WORK
      </Typography>
      <Typography variant="body1" sx={{ color: "text.secondary", mb: 2 }}>
        I have worked various projects from data analysis domain and web development. Click the button below to  view my work.
      </Typography>
      <Button
        variant="contained"
        component={Link}
        to='/projects'
        sx={{
          bgcolor: "primary.main",
          color: "background.paper",
          borderRadius: "8px",
          width: "fit-content",
          px: 2,
          py: 1,
          fontWeight: "bold",
          boxShadow: 3,
          transition: "all 0.3s ease",
          '&:hover': {
            bgcolor: "primary.dark",
            boxShadow: 6,
            transform: "translateY(-2px)",
          },
        }}
        endIcon={<span style={{ fontSize: '1.2em' }}>→</span>}
      >
        Browse Work
      </Button>
    </Container>
  );
}

export default AboutMeCard;