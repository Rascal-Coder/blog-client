import { Theme, Button } from '@radix-ui/themes'
import { appList } from './app-list'
import { Global } from '@emotion/react'
import { globalStyle } from '@/global/ts/style'
import FooterToolbar from './components/footer-toolbar'
import { GRADIENTS } from './constants'
import AppRender from './components/AppRender'
export default function App() {
  return (
    <>
      <Global styles={globalStyle} />
      <Theme accentColor='indigo' grayColor='sand' panelBackground='solid' radius='large' scaling='95%'>
        <AppRender apps={appList} />
      </Theme>
      <FooterToolbar gradIents={GRADIENTS}></FooterToolbar>
    </>
  )
}
