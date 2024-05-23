import React, { useRef } from 'react';

import AppLayout from '../components/Layout/AppLayout';
import { IconButton, Stack } from '@mui/material';
// import { grayColor } from '../constants/color';
import { AttachFile as AttachFileIcon, Send as SendIcon } from '@mui/icons-material';
import { InputBox } from '../components/styles/StyledComponents';
import FileMenu from '../components/dialog/FileMenu';
import MessageComponents from '../components/shared/MessageComponents';
import { sampleMessage } from '../constants/samepleData';
// import { orange } from '../constants/color';
// import { pink } from '@mui/material/colors';

const user={
  _id:'ashfajfhsk',
  name:'shristi'

}
const Chat = () => {
  const containerRef= useRef(null);
  // const fileMenuRef= useRef(null);
  return (
    <>
      <Stack   
      ref={containerRef}
      boxSizing={"border-box"}
      padding={"1rem"}
      spacing={"1rem"}
      bgcolor={'silver'}
      height={"90%"}
      sx={{
        overflow:"hidden",
        overflowY:"auto"
      }}
      >
        {
          sampleMessage.map((i)=>(
            <MessageComponents key={i._id} message={i} user={user} />
          ))
        }
      </Stack>

      <form   
      style={{
        height:"10%",
      }}
      >
        <Stack   direction={"row"} height={"100%"}
        padding={"1rem"} alignItems={"center"} position={"relative"} >
          <IconButton   
          // sx={{
          //     position: "absolute",
          //     left: "1.5rem",
              
          //   }}
            // useRef={fileMenuRef}
          >
            <AttachFileIcon 
            sx={{
              rotate: "30deg",
            }}
            />
          </IconButton>

          <InputBox placeholder='Type Message Here...' />

          <IconButton  type='submit'
          sx={{
              rotate: "-30deg",
              bgcolor: 'orange',
              color: "white",
              marginLeft: "1rem",
              padding: "0.5rem",
              "&:hover": {
                bgcolor: "error.dark",
              },
            }}
          >
            <SendIcon />
          </IconButton>
        </Stack>
      </form>
      <FileMenu />
    </>
  )
}

export default AppLayout()(Chat);