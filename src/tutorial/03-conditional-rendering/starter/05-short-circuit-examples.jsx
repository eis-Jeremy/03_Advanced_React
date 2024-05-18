import { useState } from 'react'

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState('')
  // truthy
  const [name, setName] = useState('susan')
  const [user, setUser] = useState({ name: 'Jeremy' })
  const [isEditing, setIsEditing] = useState(false)

  return (
    <>
      <h2>{text || 'Value'}</h2>
      {/* {!text && <div>
          <h2>Whatever return</h2>
          <h2>{name}</h2>
        </div>} */}

      {user && <SomeComponent name={user.name} />}
      <h2 style={{ margin: '1rem 0' }}>Ternary operator</h2>
      <button type="button" className="btn">
        {isEditing ? 'Edit' : 'Add'}
      </button>
      {user ? (
        <div>
          <h2>Hello {user.name}</h2>
        </div>
      ) : (
        <div>
          <h2>Hello there</h2>
        </div>
      )}
    </>
  )
}

const SomeComponent = ({ name }) => {
  return (
    <div>
      <h2>Whatever return</h2>
      <h2>{name}</h2>
    </div>
  )
}

export default ShortCircuitExamples
