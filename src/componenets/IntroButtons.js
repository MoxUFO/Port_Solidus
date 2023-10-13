import React from 'react'
import Button from '@mui/material/Button';
import '../assest/css/IntroButtons.css'

export default function IntroButtons() {

    let styles = {
        "&.MuiButton-contained" : {
            backgroundColor: '#201d20'
        }
    }

  return (
    <div className='btn-div'>
         <Button className='intro-btn'sx={styles} color='inherit' variant="contained">Source Code</Button>
         <Button className='intro-btn'sx={styles} color='inherit' variant="contained" >My GitHub</Button>
    </div>
  )
}
