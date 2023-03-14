import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
       <AppBar>
        <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
            <Button color='inherit'><Link to={"/"}>Login</Link></Button>
            <Button color='inherit'><Link to={"/Signup"}>Signup</Link></Button>
            <Button color="inherit"><Link to={"/Contact"}>Contact</Link></Button>
          </Toolbar>
       </AppBar>
    </div>
  )
}

export default Navbar
