import React, { useState } from 'react'

const Three = () => {
  const [input, setInput] = useState("");
  return (
    <div>
      <input type="text" value={input} onChange={e => setInput(e.target.value)}/>
      <div>He're Text Input : {input}</div>
    </div>
  )
}

export default Three
