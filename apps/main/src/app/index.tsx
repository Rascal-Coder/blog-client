import { FooterToolbar, AppRender } from './components'
import { GRADIENTS, APPLIST } from './constants'
import { globalCss } from '@stitches/react'
const globalStyles = globalCss({
  bottun: { background: 'none' }
})
export default function App() {
  globalStyles()
  return (
    <>
      <AppRender apps={APPLIST} />
      <FooterToolbar gradIents={GRADIENTS}></FooterToolbar>
    </>
  )
}
