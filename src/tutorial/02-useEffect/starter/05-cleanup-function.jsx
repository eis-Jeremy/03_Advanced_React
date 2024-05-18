import { useEffect, useState } from "react";

const CleanupFunction = () => {

  const [value, setValue] = useState(false)

  return <>
    <button type="button" className="btn" onClick={() => setValue(!value)}>Toggle Component</button>
    {value && <RandomComponent/>}
  </>;
};


const RandomComponent = () => {
  useEffect(() => {
    function someFunc () {

    }
    window.addEventListener('scroll', someFunc); 
    return () => removeEventListener('scroll', someFunc);
  }, [])
  return <h1>Hello there</h1>
}

export default CleanupFunction;
