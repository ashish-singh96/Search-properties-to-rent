import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import './Text.css'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import Fields from './Fields';
import { keys } from '@mui/system';
import DeleteIcon from '@mui/icons-material/Delete';
const Text = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);

  const addData = () => {
    setData([...data, { name, email }])
    setName("")
    setEmail("")
  }


  const removeItem = (index) => {
    let arr = data;
    arr.splice(index, 1);
    setData([...arr]);
  }

  return (
    <>
      <div>
        <Stack className='text' spacing={2} direction="row">
          <TextField value={name} onChange={(e) => setName(e.target.value)} id="outlined-basic" label="Name" variant="outlined" />
          <TextField value={email} onChange={(e) => setEmail(e.target.value)} id="outlined-basic" label="E-mail" variant="outlined" />
          <Button onClick={addData} variant="contained" color='success'><AddIcon /></Button>
        </Stack>
      </div>

      <div className='data'>
        <div className='data_val'>
          <h4>Name</h4>
          <h4>Email</h4>
          <h4>Remove</h4>
        </div>
        {
          data.map((element, index) => {
            return (
              <div key={index} className='data_val'>
                <h4>{element.name}</h4>
                <h4>{element.email}</h4>
                <Stack>
                  <Button onClick={() => removeItem(index)} variant="contained" color="error"><DeleteIcon /></Button>
                </Stack>
              </div>
            )
          })
        }

      </div>
    </>
  )
}

export default Text