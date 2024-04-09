import { useState } from 'react'
import { ReactDemo } from './components/Hello'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ReactDemo></ReactDemo>
    </>
  )
}

export default App
