import { Reddit } from '@mui/icons-material'
import { AppBar, Backdrop, Box, IconButton, Toolbar ,Tooltip,Typography} from '@mui/material'
import {red } from '@mui/material/colors'
import {Menu as MenuIcon,Search as SearchIcon, Add as AddIcon, Group as GroupIcon, Logout as LogoutIcon , Notifications as NotificationsIcon} from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import React, { Suspense, useState,lazy } from 'react'
// import SearchDialog from '../specific/Search'


const SearchDialog= lazy(()=> import ("../specific/Search"));
const NotificationDialog =lazy(()=> import ("../specific/Notifications"));
const NewGroupDialog =lazy(()=> import ("../specific/NewGroup"));
const Header = () => {
    const navigate = useNavigate();
const [isMobile, setIsMobile]=useState(false);
const [isSearch, setIsSearch]=useState(false);
const [isNewGroup, setIsNewGroup]=useState(false);
const [isNotification, setIsNotification]=useState(false);



    const handleMobile=()=>{
        setIsMobile((prev)=>!prev);

    };
    const openSearchDialog=()=>{
       setIsSearch((prev)=>!prev)
    };
    const openNewGroup=()=>{
        setIsNewGroup((prev)=>!prev)
    };
    const openNotification=()=>{
        setIsNotification((prev)=>!prev)
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


<IconBtn 
    title={'Notification'}
    icon={  <NotificationsIcon/>}
    onClick={openNotification}/>
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
    {
        isSearch &&
        (
            <Suspense fallback={<Backdrop open/>}>
        <SearchDialog/>
        </Suspense>
        )
    }
      {
        isNotification &&
        (
            <Suspense fallback={<Backdrop open/>}>
        <NotificationDialog/>
        </Suspense>
        )
    }
      {
        isNewGroup &&
        (
            <Suspense fallback={<Backdrop open/>}>
        <NewGroupDialog/>
        </Suspense>
        )
    }
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