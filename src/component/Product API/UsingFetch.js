import React, { useEffect, useState } from "react"

const UsingFetch = () => {
  const [users, setUsers] = useState([])

  const fetchData = () => {
    fetch("https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      {users.length > 0 && (
        <ul>
          {users.map(user => (
            <h3>{user.lastName}{user.firstName}</h3>
          ))}
        </ul>
      )}
    </div>
  )
}

export default UsingFetch
