import { useState } from 'react'

const UseStateGotcha = () => {
  const [value, setValue] = useState(0)
  return (
    <>
      <h1>{value}</h1>
      <button
        type="button"
        className="btn"
        onClick={() => {
          setTimeout(() => {
            setValue(value + 1)
          }, 3000)
        }}
      >
        Increase
      </button>
    </>
  )
}

export default UseStateGotcha
