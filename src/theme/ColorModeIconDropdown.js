import * as React from "react"
import DarkModeIcon from "@mui/icons-material/DarkModeRounded"
import LightModeIcon from "@mui/icons-material/LightModeRounded"
import Box from "@mui/material/Box"
import { useColorScheme } from "@mui/material/styles"
import Switch from '@mui/material/Switch';

export default function ColorModeIconDropdown(props) {
  const { mode, systemMode, setMode } = useColorScheme()
  const [checked, setChecked] = React.useState(false);

  console.log("Checked" + checked);
  const handleChange = (event, targetMode) => {
    console.log("Event: " + event);
    console.log("TargetMode" + targetMode);
    setChecked(event.target.checked);
    if (event.target.checked == true){
      setMode("light");
    }
    else if (event.target.checked == false){
      setMode("dark");
    }
  };
  if (!mode) {
    return (
      <Box
        data-screenshot="toggle-mode"
        sx={theme => ({
          verticalAlign: "bottom",
          display: "inline-flex",
          width: "2.25rem",
          height: "2.25rem",
          borderRadius: (theme.vars || theme).shape.borderRadius,
          border: "1px solid",
          borderColor: (theme.vars || theme).palette.divider
        })}
      />
    )
  }
  const resolvedMode = systemMode || mode
  const icon = {
    light: <LightModeIcon />,
    dark: <DarkModeIcon />
  }[resolvedMode]
  return (
    <React.Fragment>
      <Switch 
        checked={checked}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'controlled' }}
      />
    </React.Fragment>
  )
}
