import React from 'react'
import { useState } from 'react'

function CounterLabel({count}){
  const color = count > 10 ? 'skyblue' : 'pink';

  return <span style={{color}}>{count}</span>
}

export const Counter = () => {
  const [count, setCount] = useState(0);

  return(
    <button onClick={() => setCount(count+1)}>
      <CounterLabel count={count}/>
    </button>
  )
}