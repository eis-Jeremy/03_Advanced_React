import { useState } from 'react'

const ToggleChallenge = () => {
  const [value, setValue] = useState(false)
  const name = 'Jeremy'

  return (
    <>
      <h2>Hello {value ? name : 'Unknown'}</h2>
      <button
        type="button"
        className="btn"
        onClick={() => {
          setValue(!value)
        }}
      >
        {value ? 'Log out' : 'Log in'}
      </button>
    </>
  )
}

export default ToggleChallenge
