import { Reddit } from '@mui/icons-material'
import { AppBar, Box, IconButton, Toolbar ,Tooltip,Typography} from '@mui/material'
import {red } from '@mui/material/colors'
import {Menu as MenuIcon,Search as SearchIcon, Add as AddIcon, Group as GroupIcon, Logout as LogoutIcon} from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import React from 'react'



const Header = () => {
    const navigate = useNavigate();
    const handleMobile=()=>{
        console.log("mobile");
    };
    const openSearchDialog=()=>{
        console.log("openSearchDialog");
    };
    const openNewGroup=()=>{
        console.log("openNewGroup");
    };

    const     NavigatetoGroup=()=> navigate ('/groups');
    const LogoutHandler=()=>{
        console.log("LogoutHandler");
    };
  return (
    <>
    
    <Box sx={{flexGrow:1}} height={"4rem"}>
<AppBar position='static' sx={{
    
    bgcolor:red,
}}>

<Toolbar>
<Typography variant ="h6"
sx={{
    display:{xs:'none',sm:'block'},
}}
>
    Chatter
</Typography>
<Box sx={{
display:{xs:'block', sm:'none'},

}}>

    <IconButton color='inherit' onClick={handleMobile}>
<MenuIcon/>    </IconButton>
</Box>
<Box sx={{
    flexGrow:1,
}}/>
<Box>

    <IconBtn 
    title={'Search'}
    icon={<SearchIcon/>}
    onClick={openSearchDialog}/>

{/* <Tooltip title='Search'>    
    <IconButton color='inherit' size='large' onClick={}>
        <SearchIcon/>
        </IconButton>
        </Tooltip>
    */}
     <IconBtn 
    title={'New Group'}
    icon={<AddIcon/>}
    onClick={openNewGroup}/>
{/* <Tooltip title=>    <IconButton color='inherit' size='large' onClick={}>
        
        </IconButton>
        </Tooltip> */}

<IconBtn 
    title={'Manage Group'}
    icon={  <GroupIcon/>}
    onClick={NavigatetoGroup}/>
        {/* <Tooltip title=>    <IconButton color='inherit' size='large' onClick={}>
      
        </IconButton>
        </Tooltip> */}
        <IconBtn 
    title={'Logout'}
    icon={  <LogoutIcon/>}
    onClick={LogoutHandler}/>
</Box>
</Toolbar>
</AppBar>

    </Box>
    </>
  )
}

const IconBtn= ({ title, icon,onClick})=>{
    return(
        <Tooltip title={title}>    <IconButton color='inherit' size='large' onClick={onClick}>
        {icon}
        </IconButton>
        </Tooltip>
    )
}
export default Header