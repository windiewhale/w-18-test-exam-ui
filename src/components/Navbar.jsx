import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
  return (
    <nav className="navbar">
        <h1>Best Beers</h1>
        <MenuIcon 
         sx={{fontSize: 36}}
        />
    </nav>
  )
}

export default Navbar