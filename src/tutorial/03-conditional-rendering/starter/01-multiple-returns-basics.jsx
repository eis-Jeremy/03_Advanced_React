import { useEffect, useState } from 'react';

const MultipleReturnsBasics = () => {
  function sayHello(name) {
    if (name) {
      return <h2>Hello {name}!</h2>
    }

    return <h2>Hello there</h2>
  }
  
  sayHello('Jeremy')
};
export default MultipleReturnsBasics;
