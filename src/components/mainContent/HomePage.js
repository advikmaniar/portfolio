import * as React from "react";
import { Box, Container } from "@mui/material";
import NameCard from "./NameCard";
import AboutMeCard from "./AboutMeCard";

export default function MainContentProjects() {
    return (
        <Box
            sx={{
                position: "relative", 
                display: "flex",
                justifyContent: "center", 
                alignItems: "center", 
                p: { xs: "30px 10px", sm: "100px 0px 100px 0px" },
            }}
        >
            {/* Background Container */}
            <Box
                sx={{
                    position: "absolute",
                    width: { xs: "80%", sm: "80%" },
                    height: "100%",
                    backgroundImage: `url('/bgImage1.jpg')`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    borderRadius: "10%",
                    zIndex: 0,
                    filter: "blur(2px)",
                }}
            />
            <Container
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    gap: { xs: 2, sm: 1 },
                    alignItems: "center",
                    backgroundColor:" transparent",
                    zIndex: 1,
                }}
            >
                {/* NameCard */}
                <Box
                    sx={{
                        flex: { xs: 1, sm: 5 },
                        width: "100%",
                        position: "relative",
                        opacity: 0.9,
                        transition: "opacity 0.3s ease"
                    }}
                >
                    <NameCard />
                </Box>

                {/* AboutMeCard */}
                <Box
                    sx={{
                        flex: { xs: 1, sm: 3 },
                        width: "100%",
                        position: "relative",
                        opacity: 0.9,
                        transition: "opacity 0.3s ease"
                    }}
                >
                    <AboutMeCard />
                </Box>
            </Container>
        </Box>
    );
}
