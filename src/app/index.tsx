import { useEffect, useState } from 'react'
import { FooterToolbar, AppRender } from './components'
import { GRADIENTS, APPLIST } from './constants'
export default function App() {
  return (
    <>
      <AppRender apps={APPLIST} />
      <FooterToolbar gradIents={GRADIENTS}></FooterToolbar>
    </>
  )
}
