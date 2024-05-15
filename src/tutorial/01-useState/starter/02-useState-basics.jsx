import { useState } from 'react'

const UseStateBasics = () => {
  const [count, setCount] = useState(0)
  if (count < 99) {
    return (
      <>
        <h4>{count}</h4>
        <button
          type="button"
          onClick={() => setCount(count + 1)}
          className="btn"
        >
          Increase
        </button>
      </>
    )
  } else {
    return (
      <>
        <h4>{count}</h4>
        <button type="button" onClick={() => setCount('99+')} className="btn">
          Increase
        </button>
      </>
    )
  }
}

export default UseStateBasics
