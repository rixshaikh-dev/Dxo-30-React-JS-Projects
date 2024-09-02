import React, { useState } from 'react'

const Two = () => {
  const [count, setCount] = useState(0);

  const incCount = () => {
    setCount(count + 1)
  }
  const decCount = () => {
    if(count == 0){
      setCount(count = 0)
    }else{
      setCount(count - 1)
    }
  }
  return (
    <div>
      <button onClick={incCount}>+</button>
      {count}
      <button onClick={decCount}>-</button>
    </div>
  )
}

export default Two
