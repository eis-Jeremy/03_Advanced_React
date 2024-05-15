import { useState } from 'react'
import { data } from '../../../data'

const UseStateArray = () => {
  const [people, setPeople] = useState(data)

  function removeItem(id) {
    const newPeople = people.filter((person) => person.id !== id)
    setPeople(newPeople)
  }

  function clearAllItems() {
    setPeople([])
  }

  return (
    <>
      {people.map((person) => {
        const { id, name } = person
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button
              type="button"
              className="btn"
              onClick={() => removeItem(id)}
            >
              Remove
            </button>
          </div>
        )
      })}
      <button
        type="button"
        className="btn"
        style={{ marginTop: '2rem', background: 'blue' }}
        onClick={clearAllItems}
      >
        Clear All
      </button>
    </>
  )
}

export default UseStateArray
