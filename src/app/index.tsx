import { Theme, ThemePanel } from '@radix-ui/themes'
import { appList } from './app-list'
import React, { Suspense } from 'react'
import Loading from './components/Loading'
const LazyApp = React.lazy(async () => import('./components/AppRender'))
export default function App() {
  return (
    <Theme accentColor='indigo' grayColor='sand' panelBackground='solid' radius='large' scaling='95%'>
      {/* <ThemePanel /> */}
      <Suspense fallback={<Loading></Loading>}>
        <LazyApp apps={appList} />
      </Suspense>
    </Theme>
  )
}
