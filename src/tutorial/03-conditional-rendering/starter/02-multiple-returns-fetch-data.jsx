import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {
  const [user, setUser] = useState(null)

  const test = useEffect(() => {
    async function fetchUser () {
      try {
        const resp = await fetch(url);
        const user = await resp.json();
        return <h2>{user}</h2>
      } catch (error) {
        return <h2>{error}</h2>
      }
    }


    return fetchUser()
  }, [])

  return test()
};
export default MultipleReturnsFetchData;
