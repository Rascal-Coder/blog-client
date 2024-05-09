import { appList } from './app-list'
import FooterToolbar from './components/footer-toolbar'
import { GRADIENTS } from './constants'
import AppRender from './components/AppRender'

export default function App() {
  return (
    <>
      <AppRender apps={appList} />
      <FooterToolbar gradIents={GRADIENTS}></FooterToolbar>
    </>
  )
}
