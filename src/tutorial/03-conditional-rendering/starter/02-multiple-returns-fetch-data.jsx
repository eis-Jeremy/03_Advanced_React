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
      setIsLoading(false)
    }
    
    fetchUser()
  }, [])


  if (isLoading) {
    return <h2>Loading...</h2>
  } else if (isError) {
    return <h2>There was an error! Please try again.</h2>
  }
  
  return <>
    <img src={user.avatar_url} alt={user.name} style={{width: '150px', borderRadius: '25px'}} />
    <h2>{user.name}</h2>
    <h4>Works at: {user.company}</h4>
    <p>{user.bio}</p>
  </>
}
export default MultipleReturnsFetchData
