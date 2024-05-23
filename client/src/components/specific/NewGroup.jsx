import { useInputValidation } from '6pp';
import { Button, Dialog, DialogTitle, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { sampleUsers } from "../../constants/samepleData";
import UserItem from "../shared/UserItem";

const NewGroup = () => {
  const groupName= useInputValidation("");

  const [members, setMembers] = useState(sampleUsers);
  const [selectedMembers, setSelectedMembers]= useState([]);
  const selectMemberHandler = (id) => {
// setMembers(prev=>prev.map((user)=>user._id===id?{...user, isAdded:!user.isAdded} :user))


    setSelectedMembers((prev)=>prev.includes(id)? prev.filter((currElement)=>currElement!==id):[...prev,id]);


  };
  //  console.log(selectedMembers);
  const submitHandler=()=>{};
  const closeHandler=()=>{}
  return (
    <Dialog open onClose={closeHandler}>

<Stack p={{xs:"1rem",sm:"3rem"}} width={"25rem"} spacing={"2rem"}>
<DialogTitle textAlign={"center"} variant='h4'>
    New Group
</DialogTitle>
<TextField label="Group" value={groupName.value} onChange={groupName.changeHandler}/>
<Typography variant='body1'>
  Members
</Typography>


  <Stack>

{
members.map((i) => (
 
  <UserItem
  user={i}
  key={i._id}
  handler={selectMemberHandler}
  // handlerIsLoading={isLoadingSendFriendRequest}
isAdded={selectedMembers.includes(i._id)}
  />))
 }

    </Stack>
<Stack direction={"row"} justifyContent={"space-evenly"}>
  <Button variant='text' color='error' size='large' onClick={submitHandler}>Cancel</Button>
  <Button variant='contained' size='large'>Create</Button>


</Stack>


</Stack>
  </Dialog>
  )
}

export default NewGroup
