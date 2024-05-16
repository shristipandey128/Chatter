import { Avatar, Button, Container, IconButton, Paper, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { CameraAlt as CameraAltIcon, Password } from "@mui/icons-material";
import { VisuallyHiddenInput } from "../components/styles/StyledComponents";
import { useFileHandler, useInputValidation } from '6pp';
// , useStrongPassword
import { usernameValidator } from "../utils/validators";



const Login = () => {

    const [isLogin,setIsLogin]= useState(true);

    const toggleLogin = () =>setIsLogin((prev)=>!prev);
const name= useInputValidation("");
const bio= useInputValidation("");
const username = useInputValidation("", usernameValidator);
const password= useInputValidation();

const avatar = useFileHandler("single")
const handleLogin = (e)=>{
    e.prevantDefault();
};
const handleSignUp = (e)=>{
    e.prevantDefault();
};
  return(
    // <div style={
    //     {
    //         "linear-gradient(rgba(200,200,200,0.5),right(120,110,220,0.5)",
    //     }
    // }>>/div>
    
       <Container component={"main"} maxWidth="xs" sx={{
        height:'100vh',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
     }}>
<Paper
elevation={3}
sx={{
    padding:4,
    display:"flex",
    flexDirection: "column",
    alignItems:"center",
}}
>
{
    isLogin ? (
    <>  
    <Typography variant='h5'>Login</Typography>

   
    <form
    style={{
        width:'100%',
        marginTop:'1rem',
    }}
    onSubmit={handleLogin}
    >
<TextField 
required
fullWidth
label='Username'
margin='normal'
variant='outlined'
value={username.value}
    onChange={username.changeHandler}
    />
<TextField 
required
fullWidth
label='Password'
type='password'
margin='normal'
variant='outlined'
value={password.value}
    onChange={password.changeHandler}
/>
<Button 
sx={{marginTop:'1rem'}}
fullWidth
variant='contained' color='primary' type='submit' > Login</Button>
<Typography textAlign={'center'} m={'1rem'}>OR</Typography>
<Button
    // sx={{
    //     marginTop:'1rem',
    // }}
    fullWidth
    variant='text'
    onClick={toggleLogin }
    >
        SignUp
    </Button>
    </form>
    </>

    )
    :( <>  
        <Typography variant='h5'>SignUp</Typography>
    
       
        <form
        style={{
            width:'100%',
            marginTop:'1rem',
        }}
        onSubmit={handleSignUp}
        >
         
            <Stack position={'relative'} width={'10rem'} margin={'auto'}>
<Avatar sx={{
    width:'10rem',
    height:'10rem',
    objectFit:'contain',
}}
src={avatar.preview}
/>           

{
        avatar.error &&(
            <Typography m={"1rem"} color="error" variant ='caption'>
            {
                avatar.error
            }
            </Typography>
    )
}



<IconButton sx={{
    position:'absolute',
    bottom:'0',
    right:'0',
    color:'black',
    bgcolor:'rgba((0,0,0,0.9)',
    ":hover":{
        bgcolor:'rgba(0,0,0,0.5)',
    },
}}
component='label'
>
    <>
    <CameraAltIcon/>
    <VisuallyHiddenInput
                        type="file"
                        onChange={avatar.changeHandler}
                      />
    </>
</IconButton>
 </Stack>

 

    <TextField 
    required
    fullWidth
    label='Name'
    margin='normal'
    variant='outlined'
    value={name.value}
    onChange={name.changeHandler}
    />
    <TextField 
    required
    fullWidth
    label='Bio'
    margin='normal'
    variant='outlined'
    value={bio.value}
    onChange={bio.changeHandler}
    />
    <TextField 
    required
    fullWidth
    label='Username'
    margin='normal'
    variant='outlined'
    value={username.value}
    onChange={username.changeHandler}
    />
    {
        username.error &&(
            <Typography color="error" variant ='caption'>
            {
                username.error
            }
            </Typography>
    )
    }

    <TextField 
    required
    fullWidth
    label='Password'
    type='password'
    margin='normal'
    variant='outlined'
    value={password.value}
    onChange={password.changeHandler}
    />
       {/* {
        password.error &&(
            <Typography color="error" variant ='caption'>
            {
                password.error
            }
            </Typography>
    )
    } */}
    <Button 
    sx={{marginTop:'1rem'}}
    fullWidth
    variant='contained' color='primary' type='submit' > SignUp</Button>
    <Typography textAlign={'center'} m={'1rem'}>OR</Typography>
    <Button
        // sx={{
        //     marginTop:'1rem',
        // }}
        fullWidth
        variant='text'
        onClick={toggleLogin }
        >
            Login
        </Button>
        </form>
        </>
    )
}
</Paper>
  </Container>
  )
}

export default Login;