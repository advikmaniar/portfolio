import * as React from "react"
import { Typography, Box, Container, } from '@mui/material';
import SoftwareProjects from "./SoftwareProjects";
import { LuFileSpreadsheet } from "react-icons/lu";
import Logo from "../assets/portfolioIcon.PNG";


export default function MainContentProjects() {

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: { xs: 2, sm: 1 },
        // bgcolor: "red",
        p: { xs: "30px 10px", sm: "0px 20px 0px 20px" },
        alignItems: "left",
      }}
    >
      <Box sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        borderRadius: '10px',
        p: '10px',
        opacity: 0.9,
        boxShadow: 3,
        width: 'fit-content',
        backgroundColor: 'background.paper',
      }}>
        <Typography variant="h1" component="div"
          sx={{
            color: 'text.primary',
            fontWeight: 'bold',
            textAlign: 'center',
            width: 'fit-content',
            fontFamily: 'Cursive',
          }}
        >
          Welcome to my <span style={{ animation: 'pulse 3s infinite, zoomIn 2s 1' }}>Portfolio📄</span>
          !
        </Typography>
      </Box>
      <Box sx={{
        flex: { xs: 1, sm: 5 },
        width: "100%"
      }}>
        <SoftwareProjects />
      </Box>
      <style>
        {`
        @keyframes rubberBand {
            0% { transform: scale(1); }
            30% { transform: scale(1.25, 0.75); }
            40% { transform: scale(0.75, 1.25); }
            50% { transform: scale(1.15, 0.85); }
            65% { transform: scale(0.95, 1.05); }
            75% { transform: scale(1.05, 0.95); }
            100% { transform: scale(1); }
          }
          @keyframes zoomIn {
            0% { transform: scale(0); }
            100% { transform: scale(1); }
          }
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
          }
          span {
            display: inline-block;
          }
        `}
      </style>
    </Container>
  );
}
