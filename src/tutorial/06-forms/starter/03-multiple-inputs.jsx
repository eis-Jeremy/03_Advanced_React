import { useState } from "react";

const MultipleInputs = () => {

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  })

  function handleChange (e) {
    setUser({...user, [e.target.name]: e.target.value})
  }

  function handleSubmit(e) {
    e.preventDefault()
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Multiple Inputs</h4>
        {/* name */}
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            name="name"
            className="form-input"
            id="name"
            onChange={handleChange}
            value={user.name}
          />
        </div>
        {/* email */}
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="form-input"
            id="email"
            onChange={handleChange}
            value={user.email}
          />
        </div>
        {/* email */}
        <div className="form-row">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-input"
            id="password"
            onChange={handleChange}
            value={user.password}
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </div>
  )
};
export default MultipleInputs;
