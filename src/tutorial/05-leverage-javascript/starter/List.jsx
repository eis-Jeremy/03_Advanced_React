import { Person } from './Person';
import React from 'react'
import { people } from '../../../data.js'

function List() {
  return (
    <>
      <h2>Leverage JS</h2>
      <div>
        {people.map((person) => {
          return <Person key={person.key} {...person}/>
        })}
      </div>
    </>
  )
}

export default List
