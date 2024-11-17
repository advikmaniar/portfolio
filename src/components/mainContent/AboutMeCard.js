import { Container, Typography, Button, Divider } from '@mui/material';

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
        <Typography variant="h6" sx={{ color: "text.primary", fontSize: 20, mb: 1 }}>
          ABOUT ME
        </Typography>
        <Typography variant="body1" sx={{ color: "text.secondary", mb: 2 }}>
          Lorem ipsum dolor sit amet consectetur adipiscing elit leo quis ullamcorper quis id elementum convallis lacus gravida.
        </Typography>
        <Button
          variant="contained"
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
          Purus ut faucibus pulvinar elementum integer enim neque fermentum iaculis eu non diam phasellus dolor consectetur.
        </Typography>
        <Button
          variant="contained"
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