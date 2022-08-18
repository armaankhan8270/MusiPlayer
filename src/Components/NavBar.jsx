import { Margin } from '@mui/icons-material'
import { pink } from '@mui/material/colors'
import { Link } from 'react-router-dom'
import React from 'react'

const NavBar = () => {
  return (
    <div>
      <nav>
        <div className='fs-1' style={{width:'1000px',opacity:'0.5',height:'70px' ,backgroundColor:'Black',borderRadius:'30px' }}>
<Link  style={{padding:'30px',marginTop:'40px',color:'white',fontFamily:'cursive',fontSize:'20px' }} to="/MusicPlayer">MusicPlayer</Link>
<Link  style={{paddingTop:'30px',margin:'30px',color:'white',fontFamily:'cursive',fontSize:'20px' }} to="/Signin">SighnIn</Link>
<Link  style={{paddingTop:'30px',margin:'30px',color:'white',fontFamily:'cursive',fontSize:'20px' }} to="/Home">Home</Link>
<Link  style={{marginTop:'20px',margin:'30px',color:'white',fontFamily:'cursive',fontSize:'20px' }} to="/Signup">Sighnup</Link>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
