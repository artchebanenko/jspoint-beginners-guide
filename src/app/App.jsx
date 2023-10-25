import React, { useState } from 'react'

export const App = ({ name }) => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>{name}</h1>
      <p>count: {count}</p>

      <button
        type="button"
        onClick={() => {
          setCount(count + 1)
        }}
        disabled={count === 3}
      >
        inc
      </button>
    </div>
  )
}
