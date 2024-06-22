import React from 'react'
import { useContext} from 'react'
import { NavbarContext } from './Navbar'

function UserContainer() {
  const {user, logout} = useContext(NavbarContext);

  return (
    <div className="user-container">
      {user ? (
        <>
          <p>Hello there, {user?.name?.toUpperCase()}</p>

          <button type="button" className="btn" onClick={logout}>
            Logout
          </button>
        </>
      ) : (
        <p>Please Login</p>
      )}
    </div>
  )
}

export default UserContainer
