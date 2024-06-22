import React from 'react'
import { data } from '../../../data'
import { useReducer } from 'react'
import { reducer } from './reducer'
import { CLEAR_LIST, REMOVE_ITEM, RESET_LIST } from './actions'

// const CLEAR_LIST = 'CLEAR_LIST'
// const RESET_LIST = 'RESET_LIST'
// const REMOVE_ITEM = 'REMOVE_ITEM'

const defaultState = {
  people: data,
}

// const reducer = (state, action) => {
//   if (action.type === CLEAR_LIST) {
//     return { ...state, people: [] }
//   }
//   if (action.type === RESET_LIST) {
//     return { ...state, people: data }
//   }
//   if (action.type === REMOVE_ITEM) {
//     let newPeople = state.people.filter((person) => person.id !== action.payload.id)
//     return {...state, people: newPeople}
//   }

//   throw new Error(`No matching action type: "${action.type}"`)
// }

const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, defaultState)

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: { id } })
  }

  const clearList = () => {
    dispatch({ type: CLEAR_LIST })
  }

  const resetList = () => {
    dispatch({ type: RESET_LIST })
  }

  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        )
      })}

      {state.people.length < 1 ? (
        <button
          className="btn"
          style={{ marginTop: '2rem' }}
          onClick={resetList}
        >
          reset
        </button>
      ) : (
        <button
          className="btn"
          style={{ marginTop: '2rem' }}
          onClick={clearList}
        >
          clear items
        </button>
      )}
    </div>
  )
}

export default ReducerBasics
