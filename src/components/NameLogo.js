import * as React from "react";
import {  Button } from "@mui/material";
import Logo from '../assets/nameLogo.png';
import { Link } from "react-router-dom";
import { alpha, useTheme } from "@mui/material/styles";

export default function NameLogo() {

  const theme = useTheme();

  return (
    <Button
      component={Link}
      to='/home'
      sx={{
        padding: 1,
        borderRadius: "50%",
        boxShadow: 5,
        '&:hover': {
          backgroundColor: "transparent",
        },
      }}
    >
      <img
        src={Logo}
        alt="Logo"
        style={{
          height: "40px",
          objectFit: "contain",
        }}
      />
    </Button>
  );
}
