const ErrorExample = () => {
  let count = 0
  return (
    <>
      <h2>useState error example</h2>
      <p>{count}</p>
      <button onClick={() => count++} className="btn">increase</button>
    </>
  )
}

export default ErrorExample
