// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app'
import { Provider } from 'react-redux'
import { setupIconifyOffline } from './plugins'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './store'
import './plugins/assets'

function setupVitePlugins() {
  setupIconifyOffline()
}

setupVitePlugins()
ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
)
