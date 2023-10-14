import * as React from "react";
import Paper from '@mui/material/Paper';
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import AccountTreeRoundedIcon from '@mui/icons-material/AccountTreeRounded';
import PersonSearchRoundedIcon from '@mui/icons-material/PersonSearchRounded';
import ConnectWithoutContactRoundedIcon from '@mui/icons-material/ConnectWithoutContactRounded';

export default function NavBar() {
    
    let styles = {
        color:"#96A27C",
    }

  return (
    <Paper elevation={3}  sx={{height: '12%' ,width: '100%', position: 'fixed', bottom: 0, left: 0, right: 0 }} color="primary" >
      <BottomNavigation  sx={{ backgroundColor: "#201D20", height: '100%'  }} showLabels>
        <BottomNavigationAction sx={styles} label="Projects" icon={<AccountTreeRoundedIcon sx={styles} fontSize="large" />} />
        <BottomNavigationAction sx={styles} label="About Me" icon={<PersonSearchRoundedIcon sx={styles} fontSize="large" />} />
        <BottomNavigationAction sx={styles} label="Contact Me" icon={<ConnectWithoutContactRoundedIcon sx={styles} fontSize="large" />} />
      </BottomNavigation>
    </Paper>
  );
}