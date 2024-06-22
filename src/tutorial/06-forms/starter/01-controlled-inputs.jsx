import { useState } from 'react'

const ControlledInputs = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  function handleOnNameChange(e) {
    setIsSubmitted(false)
    setName(e.target.value)
  }

  function handleOnEmailChange(e) {
    setIsSubmitted(false)
    setEmail(e.target.value)
  }

  function handleOnSubmit(e) {
    e.preventDefault()
    // console.log(name, email)
    name && email ? setIsSubmitted(true) : null
  }

  return (
    <>
      <form className="form" onSubmit={handleOnSubmit}>
        <h4>Controlled inputs</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="form-input"
            value={name}
            onChange={handleOnNameChange}
          />
        </div>
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="form-input"
            value={email}
            onChange={handleOnEmailChange}
          />
        </div>
        <button type="submit" className="btn btn-block">
          Submit
        </button>
      </form>

      {isSubmitted && <ResultArea name={name} email={email} />}
    </>
  )
}

const ResultArea = ({ name, email }) => {
  return (
    <form className="form">
      <h4 style={{ textTransform: 'none' }}>Name: {name}</h4>
      <h4 style={{ textTransform: 'lowercase' }}>
        <span style={{ textTransform: 'capitalize' }}>Email: </span>
        {email}
      </h4>
    </form>
  )
}

export default ControlledInputs
