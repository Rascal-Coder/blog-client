import { useState } from 'react'
import { ReactDemo } from './components/Hello'
import ThemeSwitch from '@/components/theme-switch'
const fontFamily = [import.meta.env.RICK_FONTFAMILY, 'Roboto', 'Fira Code']
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ThemeSwitch className='scale-[0.2] w-4 h-4 ml-8' />
      <ReactDemo></ReactDemo>
    </>
  )
}

export default App
