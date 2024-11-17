import * as React from "react";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Logo from '../assets/nameLogo.png';

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  fontSize: "18px",
  color: theme.palette.primary.main, 
  letterSpacing: 1,
}));

export default function NameLogo() {
  return (
      <StyledTypography variant="h6" sx={{ display: 'flex', alignItems: 'center' }}>
        <img src={Logo} alt="Logo" style={{ height: 40, marginRight: 8 }} />
      </StyledTypography>
  );
}
