import React from 'react'
import {Avatar, Grid,Paper, TextField,Button, Typography,Link} from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import { useNavigate } from 'react-router-dom';
export default function Login() {
   const paperStyle={padding:20,height:'50vh',width:280,margin:'20px auto'}
   const avatarStle={backgroundColor:'#22b6ba'}
   const inputStyle={marginBottom:'5%'}
   const navigate=useNavigate();
   const handleCick=()=>{
        navigate('/Problems');
   }
  return (
       <Grid>
        <Paper elevation={10} style={paperStyle}>
            <Grid align='center'>
            <Avatar style={avatarStle}><LockIcon/></Avatar>
            <h2>Sign in</h2>
            </Grid>
            <TextField label='UserEmal' placeholder='Enter User Email'  variant="standard" fullWidth required/>
            <TextField label='Password' placeholder='Enter User Password' style={inputStyle} variant="standard" fullWidth required/>
            <Button type='submit' onClick={handleCick} color='primary' variant="contained" style={inputStyle} fullWidth>SIGN IN</Button>
            <Typography>
                Do you have an account?
                <Link href="#">SignUp</Link>
            </Typography>
        </Paper>
       </Grid>
  )
}
