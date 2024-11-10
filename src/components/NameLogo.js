
import * as React from "react";
import { SvgIcon, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  fontSize: "18px",
  color: theme.palette.primary.main, // Adjust to your theme color
  letterSpacing: 1,
}));

export default function NameLogo() {
  return (
      <StyledTypography variant="h6" sx={{ display: 'flex', alignItems: 'center' }}>
        <img src="./nameLogo.png" alt="Logo" style={{ height: 40, marginRight: 8 }} />
      </StyledTypography>
  );
}
