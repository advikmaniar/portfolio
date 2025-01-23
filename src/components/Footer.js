import React, { useState } from "react";
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import Divider from "@mui/material/Divider"
import Link from "@mui/material/Link"
import Stack from "@mui/material/Stack"
import TextField from "@mui/material/TextField"
import Typography from "@mui/material/Typography"
import NameLogo from "./NameLogo"
import { StyledIcons } from "../utils/utils"
import { LinkedIn, GitHub, Instagram } from '@mui/icons-material';
import { FaKaggle } from "react-icons/fa";

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
          gap: { xs: 4, sm: 8 },
          py: { xs: 8, sm: 10 },
          textAlign: { sm: "center", md: "left" }
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            width: "100%",
            justifyContent: "space-between",
            backgroundColor: 'black'
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
              <Typography
                variant="body2"
                gutterBottom
                sx={{ fontWeight: 600, mt: 2 }}
              >
                Let's get in touch!
              </Typography>
              <Stack direction="row" spacing={1} useFlexGap>
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  sx={{ flexShrink: 0 }}
                >
                  Connect
                </Button>
              </Stack>
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              flexDirection: "column",
              gap: 1
            }}
          >
            <Link color="text.secondary" variant="body2" href="#">
              Home
            </Link>
            <Link color="text.secondary" variant="body2" href="#">
              About
            </Link>
            <Link color="text.secondary" variant="body2" href="#">
              My Work
            </Link>
            <Link color="text.secondary" variant="body2" href="#">
              Skills
            </Link>
            <Link color="text.secondary" variant="body2" href="#">
              Contact
            </Link>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            pt: { xs: 4, sm: 8 },
            width: "100%",
            borderTop: "1px solid",
            borderColor: "divider"
          }}
        >
          <div>
            <Link color="text.secondary" variant="body2" href="#">
              Privacy Policy
            </Link>
            <Typography sx={{ display: "inline", mx: 0.5, opacity: 0.5 }}>
              &nbsp;•&nbsp;
            </Typography>
            <Link color="text.secondary" variant="body2" href="#">
              Terms of Service
            </Link>
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
    </React.Fragment>
  )
}
