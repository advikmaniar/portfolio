import * as React from "react"
import { alpha, styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import NameLogo from "./NameLogo"
import ColorModeIconDropdown from "../theme/ColorModeIconDropdown"

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: "blur(24px)",
  border: "1px solid",
  borderColor: (theme.vars || theme).palette.divider,
  backgroundColor: theme.vars
    ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.4)`
    : alpha(theme.palette.background.default, 0.4),
  boxShadow: (theme.vars || theme).shadows[1],
  padding: "8px 12px",
}))

export default function AppAppBar() {
  const [open, setOpen] = React.useState(false)

  const toggleDrawer = newOpen => () => {
    setOpen(newOpen)
  }

  return (
    <AppBar
      position="fixed"
      enableColorOnDark
      sx={{
        boxShadow: 0,
        bgcolor: "transparent",
        backgroundImage: "none",
        mt: "calc(var(--template-frame-height, 0px) + 28px)"
      }}
    >
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters>
          <Box
            sx={{ flexGrow: 1, display: "flex", alignItems: "center", px: 0 }}
          >
            <NameLogo />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <Button variant="text" color="info" size="small">
                Home
              </Button>
              <Button variant="text" color="info" size="small">
                About Me
              </Button>
              <Button variant="text" color="info" size="small">
                My Work
              </Button>
              <Button variant="text" color="info" size="small">
                Skills
              </Button>
              <Button variant="text" color="info" size="small">
                Contact
              </Button>
            </Box>
          </Box>
          <ColorModeIconDropdown />
        </StyledToolbar>
      </Container>
    </AppBar>
  )
}
