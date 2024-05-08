import { useProjectSwitch } from '@/hooks/useProjectSwitch'

interface AppProps {
  apps: Array<{
    key: string
    component: () => JSX.Element
  }>
}

const AppRender: React.FC<AppProps> = ({ apps }) => {
  const { currentProject } = useProjectSwitch()

  const app = apps.find(_App => _App.key === currentProject)
  return (
    <>
      <div className='app-wrapper'>
        {app && (
          <div>
            <app.component></app.component>
          </div>
        )}
      </div>
    </>
  )
}

export default AppRender
