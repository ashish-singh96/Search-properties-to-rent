import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import './Text.css'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import Fields from './Fields';
import { keys } from '@mui/system';
const Text = () => {
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[data,setData]=useState([]);

    const addData = ()=>{
        setData([...data,{name,email}])
        setName("")
        setEmail("")
    }

  return (
    <>
    <div>
        <Stack className='text' spacing={2} direction="row">
        <TextField value={name} onChange={(e)=>setName(e.target.value)} id="outlined-basic" label="Name" variant="outlined" />
        <TextField value={email} onChange={(e)=>setEmail(e.target.value)} id="outlined-basic" label="E-mail" variant="outlined" />
        <Button onClick={addData} variant="contained" color='success'><AddIcon/></Button>
        </Stack>
    </div>
    
    <div className='data'>
    <div className='data_val'>
    <h4>Name</h4>
    <h4>Email</h4>
    <h4>Remove</h4>
    </div>
    {
      data.map((element,index)=>{
        return(
          <Fields
             key={index} name={element.name} email={element.email} index={index}
          />
        )
      })
    }

    </div>
    </>
  )
}

export default Text