import * as React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import { styled } from "@mui/material/styles"
import { Box, Typography, IconButton, Container } from '@mui/material';
import { Facebook, Twitter, LinkedIn, GitHub, Instagram } from '@mui/icons-material';

const SyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: 0,
  height: "100%",
  backgroundColor: (theme.vars || theme).palette.background.paper,
  "&:hover": {
    backgroundColor: "transparent",
    cursor: "pointer"
  },
  "&:focus-visible": {
    outline: "3px solid",
    outlineColor: "hsla(210, 98%, 48%, 0.5)",
    outlineOffset: "2px"
  }
}))

const SyledCardContent = styled(CardContent)({
  display: "flex",
  flexDirection: "column",
  gap: 4,
  padding: 16,
  flexGrow: 1,
  "&:last-child": {
    paddingBottom: 16
  }
})

const StyledTypography = styled(Typography)({
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 2,
  overflow: "hidden",
  textOverflow: "ellipsis"
})

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
      width: "fit-content",
      p: "30px 50px 30px 50px",
      borderRadius: "16px",
      boxShadow: 1,
      transition: "all 0.5s ease",
      '&:hover': {
        boxShadow: 3,
        transform: "scale(1.05)",
      },
    }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", fontSize: 65 }}>
        Hi, I'm Advik Maniar
      </Typography>
      <Typography variant="h6" sx={{ fontSize: 25, color: "text.secondary" }}>
        Software Developer based In New York
      </Typography>

      {/* Social Media Icons */}
      <Container sx={{
        display: "flex",
        justifyContent: "center",
        gap: 3,
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

const AboutMeCard = () => {
  return (
    <Container sx={{
      display: "flex",
      flexDirection: "column",
      bgcolor: "background.paper",
      height: "flex",
      width: "fit-content",
      p: "16px 24px 30px 50px",
      borderRadius: "16px",
      boxShadow: 1,
      transition: "all 0.5s ease",
      '&:hover': {
        boxShadow: 3,
        transform: "scale(1.05)",
      },
    }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", fontSize: 22 }}>
        Hi, I'm Advik Maniar
      </Typography>
    </Container>
  );
}


export default function MainContent() {
  const [focusedCardIndex, setFocusedCardIndex] = React.useState(null)
  const handleFocus = index => {
    setFocusedCardIndex(index)
  }
  const handleBlur = () => {
    setFocusedCardIndex(null)
  }
  const handleClick = () => {
    console.info("You clicked the filter chip.")
  }

  return (
    <Container sx={{
      display: "flex",
      flexDirection: "row",
      gap: 0,
      // bgcolor: "blue",
      padding: 10,
    }}>
      <NameCard />
      <AboutMeCard />
    </Container>
  )
}
