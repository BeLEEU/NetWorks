import React from 'react'
import { useState, useEffect } from 'react'

const useUserCollection = () => {
  
  const [filter, setFilter] = useState("")
  const [userCollection, setUserCollection] = useState([])

  const loadUsers = () =>{
    setTimeout(()=>{setUserCollection([...userCollection, 'new'])}, 1000)
  }
  return {filter, setFilter, userCollection, loadUsers}
}

export const Custom = () => {
  const {filter, setFilter, userCollection, loadUsers} = useUserCollection(); 
  useEffect(() =>{
    loadUsers();
  }, [filter]) 
  return(
  <div>
    <input value={filter} onChange={e => setFilter(e.target.value)}></input>
    <ul>
      {userCollection.map((item, index)=> (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>)
}