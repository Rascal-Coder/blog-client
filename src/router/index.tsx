import App from '@/app'
import ErrorPage from '~/error-page'
import { createBrowserRouter, redirect, type RouteObject } from 'react-router-dom'
console.log('import.meta.env.BASE_URL', import.meta.env.BASE_URL)

export const routes: RouteObject[] = [
  {
    path: import.meta.env.BASE_URL,
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: '*',
    loader() {
      return redirect(import.meta.env.BASE_URL)
    }
  }
]

export const router = createBrowserRouter(routes)
