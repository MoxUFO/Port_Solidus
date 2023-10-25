import * as React from "react";
import Paper from '@mui/material/Paper';
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import AccountTreeRoundedIcon from '@mui/icons-material/AccountTreeRounded';
import PersonSearchRoundedIcon from '@mui/icons-material/PersonSearchRounded';
import ConnectWithoutContactRoundedIcon from '@mui/icons-material/ConnectWithoutContactRounded';
import '../assest/css/NavBar.css'

export default function NavBar() {
    
 

  return (
    <Paper elevation={3}  sx={{height: '12%' ,width: '100%', position: 'fixed', bottom: 0, left: 0, right: 0 }} color="primary" >
      <BottomNavigation  sx={{ backgroundColor: "#201D20", height: '100%'  }} showLabels>
        <BottomNavigationAction href="#Projects" className="nav-link" label="Projects" icon={<AccountTreeRoundedIcon  fontSize="large" />} />
        <BottomNavigationAction href="#About-Me" className="nav-link" label="About Me" icon={<PersonSearchRoundedIcon fontSize="large" />} />
        <BottomNavigationAction href="#Contact" className="nav-link" label="Contact Me" icon={<ConnectWithoutContactRoundedIcon fontSize="large" />} />
      </BottomNavigation>
    </Paper>
  );
}