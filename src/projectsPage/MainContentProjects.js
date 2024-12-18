import * as React from "react"
import { Box, Container, } from '@mui/material';
import NameCard from "../homePage/NameCard";
import AboutMeCard from "../homePage/AboutMeCard";


export default function MainContentProjects() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" }, 
        gap: { xs: 2, sm: 1 },
        bgcolor: "red",
        p: { xs: "30px 10px", sm: "100px 20px 100px 20px" },
        alignItems: "center",
      }}
    >
      <Box sx={{
        flex: { xs: 1, sm: 5 },
        width:  "100%"
        }}>
        <NameCard />
      </Box>
      <Box sx={{
        flex: { xs: 1, sm: 3 },
        width:  "100%"
       }}>
        <AboutMeCard />
      </Box>
    </Container>
  );
}
