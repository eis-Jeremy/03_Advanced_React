import { useState } from 'react'
import { data } from '../../../data'

const UserChallenge = () => {
  const [name, setName] = useState('')
  const [users, setUsers] = useState(data)

  function handleOnNameChange(e) {
    setName(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!name) {
      return
    }

    const fakeID = Date.now();

    const newUser = {id: fakeID, name}
    const updatedUsers = [...users, newUser]
    setUsers(updatedUsers)
    setName('')
  }

  function removeUser(id) {
    const updatedUsers = users.filter((user) => {
      return user.id !== id
    })
    setUsers(updatedUsers)
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={handleOnNameChange}
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      {/* render users below */}
      <form className="form">
        <h2>users</h2>
        {users.map((user) => {
          return (
            <div key={user.id} style={{marginBottom: '2.5rem'}}>
              <h4>{user.name}</h4>
              <button type="button" onClick={() => removeUser(user.id)} className='btn'>Remove</button>
            </div>
          )
        })}
      </form>
    </div>
  )
}
export default UserChallenge
