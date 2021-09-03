import React from 'react'
import { useState } from 'react'

export const UserList = () => {
  
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchUsers = async () =>{
    setLoading(true);
    try{
      const res = await fetch("./api/1.json");
      console.log(res);
      const json = await res.json();
      console.log(json);
      setUsers(json.users);
    } catch(err) {
      setError(err);
    }
    setLoading(false);
  }


  return (
    <div>
      <button onClick={fetchUsers}>
        {loading ? "Loading..." : "Show Users"}
      </button>
      {error && <div style={{ color: "red" }}>Failed: {String(error)}</div>      }
      <ul>
        {users.map((user) =>{
          return <li key={user.name}>{user.name}</li>
        })}
      </ul>
    </div>
  )
}