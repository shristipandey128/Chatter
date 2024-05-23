import { Menu } from '@mui/material'
// import PropTypes from 'prop-types';
import React from 'react'

const FileMenu = ({ anchorE1 }) => {
  return (

    <Menu  anchorE1={anchorE1} open={false} >
        <div style={{
            width:'10rem',
        }}>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure tenetur ex in eius 
saepe qui delectus sapiente, perspiciatis illo quidem dolor asperiores ipsam, 
dicta quod neque nobis modi repellendus odit.
        </div>

   </Menu>
  )
}

export default FileMenu;