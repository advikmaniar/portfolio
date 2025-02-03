import React, { useState } from "react";
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import Divider from "@mui/material/Divider"
// import Link from "@mui/material/Link"
import Stack from "@mui/material/Stack"
import TextField from "@mui/material/TextField"
import Typography from "@mui/material/Typography"
import NameLogo from "./NameLogo"
import { StyledIcons } from "../utils/utils"
import { LinkedIn, GitHub, Instagram } from '@mui/icons-material';
import { FaKaggle } from "react-icons/fa";
import SkillsSidebar from "../skillsPage/SkillsSidebar";
import ContactPopup from './ContactPopup';
import { Link } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" sx={{ color: "text.secondary", mt: 1 }}>
      {"Copyright © "}
      <Link color="text.secondary" href="/home">
        Advik Maniar
      </Link>
      &nbsp;
      {new Date().getFullYear()}
    </Typography>
  )
}

export default function Footer() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  }

  const handleContactModal = () => {
    setContactModalOpen((prev) => !prev);
  };

  return (
    <React.Fragment>
      <Divider />
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 1, sm: 2 },
          py: { xs: 1, sm: 2 },
          textAlign: { sm: "center", md: "left" }
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            width: "100%",
            borderRadius: "20px",
            padding: 2,
            justifyContent: "space-between",
            backgroundColor: 'background.paper',
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 4,
              minWidth: { xs: "100%", sm: "60%" }
            }}
          >
            <Box sx={{ width: { xs: "100%", sm: "60%" } }}>
              <NameLogo />
              {/* <Typography
                variant="body2"
                gutterBottom
                sx={{ fontWeight: 600, mt: 2 }}
              >
                Let's get in touch!
              </Typography>
              <Stack direction="row" spacing={1} useFlexGap>
                <Button
                  onClick={handleContactModal}
                  variant="contained"
                  color="primary"
                  size="small"
                  sx={{ flexShrink: 0 }}
                >
                  Connect
                </Button>
              </Stack> */}
            </Box>
          </Box>
          <Box
            sx={{
              backgroundColor: "transparent",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexGrow: 1,
            }}
          >
            <Button
              variant="text"
              color="info"
              size="small"
              component={Link}
              to="/home"
            >
              HOME
            </Button>
            <Button
              variant="text"
              color="info"
              size="small"
              component={Link}
              to="/about"
            >
              ABOUT
            </Button>
            <Button
              variant="text"
              color="info"
              size="small"
              component={Link}
              to="/projects"
            >
              MY WORK
            </Button>
            <Button variant="text" color="info" size="small" onClick={toggleSidebar}>
              SKILLS
            </Button>
            <Button variant="text" color="info" size="small" onClick={handleContactModal}>
              CONTACT
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            pt: { xs: 1, sm: 2 },
            width: "100%",
            borderTop: "1px solid",
            borderColor: "divider"
          }}
        >
          <div>
            <Copyright />
          </div>
          <Stack
            direction="row"
            spacing={1}
            useFlexGap
            sx={{ justifyContent: "left", color: "text.secondary" }}
          >
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
              color="kaggle"
              bgColor="#1da1f2"
              hoverColor="#1991c6"
              icon={<FaKaggle fontSize="medium" />}
              url="https://www.kaggle.com/advikmaniar"
            />
            <StyledIcons
              color="instagram"
              bgColor="#e4405f"
              hoverColor="#b32f46"
              icon={<Instagram fontSize="medium" />}
              url="https://www.instagram.com/advik0220/"
            />
          </Stack>
        </Box>
      </Container>
      <SkillsSidebar open={sidebarOpen} onClose={toggleSidebar} />
      <ContactPopup open={contactModalOpen} onClose={handleContactModal} />
    </React.Fragment>
  )
}
