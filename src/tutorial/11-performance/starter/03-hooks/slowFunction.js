import React from 'react'

function slowFunction() {
  let value = 0
  for (let i = 0; i <= 0; i++) {
    value += i
  }
  return value
}

export default slowFunction
