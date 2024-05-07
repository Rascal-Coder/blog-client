import { appList } from './app-list'
import { Theme } from '@/theme'
import { Global } from '@emotion/react'
import { globalStyle } from '@/global/ts/style'
import React, { Suspense } from 'react'
import { ScrollRestoration } from 'react-router-dom'
import Loading from './components/Loading'
const LazyApp = React.lazy(async () => import('./components/AppRender'))
export default function App() {
  return (
    <div>
      <Global styles={globalStyle} />
      <Theme />
      <ScrollRestoration />
      <Suspense fallback={<Loading></Loading>}>
        <LazyApp apps={appList} />
      </Suspense>
    </div>
  )
}
