import { useState } from 'react'

const ShortCircuitOverview = () => {
  const [truthyValue, setTruthyValue] = useState("Hallo")
  const [falsyValue, setfalsyValue] = useState('')

  const codeExample = falsyValue || "Tschüss"

  return (
    <>
      <h2>Short circuit overview</h2>
      <h4>Falsy ODER: {falsyValue || 'Tschüssi'}</h4>
      <h4>Falsy UND: {falsyValue && 'Tschüssi'}</h4>
      <h4>Truthy ODER: {truthyValue || 'Tschüssi'}</h4>
      <h4>Truthy UND: {truthyValue && 'Tschüssi'}</h4>
    </>
  )
}
export default ShortCircuitOverview
