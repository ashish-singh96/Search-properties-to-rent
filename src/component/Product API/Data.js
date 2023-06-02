import React, { useEffect, useState } from 'react'
import API from './Api.json';
const Data = () => {
    const[user,setUser]=useState([]);


  return (
    <div>
        {user.length>0 && (
            <ul>
                {
                    user.map((user=>{
                        <li key={user.id}>{user.description}</li>
                    }))
                }
            </ul>
        )}
    </div>
  )
}

export default Data