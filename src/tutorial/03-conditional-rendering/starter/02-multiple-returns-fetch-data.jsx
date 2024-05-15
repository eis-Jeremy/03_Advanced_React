import { useEffect, useState } from 'react'
const url = 'https://api.github.com/users/QuincyLarson'

const MultipleReturnsFetchData = () => {
  
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false)
  const [user, setUser]  =useState(null)

  useEffect(() => {
    async function fetchUser() {
      try {
        const resp = await fetch(url)
        const user = await resp.json();
        setUser(user)
      } catch (error) {
        setIsError(true);
      }
    }
  }, [])

  if (isLoading) {
    return <h2>Loading...</h2>
  } else if (isError) {
    return <h2>There was an error! Please try again.</h2>
  }

  re
  
}
export default MultipleReturnsFetchData
