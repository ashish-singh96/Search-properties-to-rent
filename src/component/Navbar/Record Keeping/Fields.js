import React from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import './Text.css'
const Fields = ({name, email, index}) => {
    const remove = () =>{
        
    }
    return (
        // <Stack direction="row" spacing={2}>
       
            <div className='data_val'>
                <h4>{name}</h4>
                <h4>{email}</h4>
                <Stack>
                <Button onClick={()=>remove(index)} variant="contained" color="error"><DeleteIcon/></Button>
                </Stack>
            </div> 
        // </Stack>

    )
}

export default Fields
