import { useState } from 'react'

const UserChallenge = () => {
  const [user, setUser] = useState(null)

  function login() {
    console.log(user)
    setUser({ name: 'Jeremy' })
  }

  function logout() {
    console.log(user)
    setUser(null)
  }

  return (
    <>
      <h2>{user ? `Hello ${user.name}` : 'Please log in first'}</h2>
      <button
        type="button"
        className="btn"
        onClick={() => {
          user ? logout() : login()
        }}
      >
        {' '}
        {user ? 'Log out' : 'Log in'}
      </button>
    </>
  )
}

export default UserChallenge
