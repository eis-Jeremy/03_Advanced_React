import { useState } from 'react'

const UseStateObject = () => {
  const jeremy = {
    name: 'Jeremy',
    age: 15,
    hobby: 'Gaming',
  }
  const antony = {
    name: 'Antony',
    age: 9,
    hobby: 'Same as *Jeremy*',
  }
  const [person, setPerson] = useState(jeremy)

  let btnTxt = 'Show Antony'

  if (person.name === 'Antony') {
    btnTxt = 'Show Jeremy'
  } else {
    btnTxt = 'Show Antony'
  }

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h4>Enjoys: {person.hobby}</h4>
      <button
        type="button"
        onClick={() => {
          if (person.name === 'Jeremy') {
            setPerson(antony)
          } else {
            setPerson(jeremy)
          }
        }}
        className="btn"
      >
        {btnTxt}
      </button>
    </>
  )
}

export default UseStateObject
