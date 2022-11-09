import { BottomNavigation, BottomNavigationAction, } from "@mui/material"
import { useState } from "react";

export const Bar = () => {
  const [value, setValue] = useState(0)
  const changeHandle = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  }
  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => changeHandle(event, newValue)}
      showLabels
    >
      <BottomNavigationAction label="Recents" />
      <BottomNavigationAction label="Favorites" />
      <BottomNavigationAction label="Nearby" />
    </BottomNavigation>
  )
}
