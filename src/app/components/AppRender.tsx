import { useProjectSwitch } from '@/hooks/useProjectSwitch'
import cs from 'classnames'
import FooterToolbar from '~/footer-toolbar'
interface AppProps {
  apps: Array<{
    key: string
    component: () => JSX.Element
  }>
}

const AppRender: React.FC<AppProps> = ({ apps }) => {
  const { toggleProject, currentProject } = useProjectSwitch()
  const currentClassNames = ['sub-app', 'sub-app--current']
  const nextClassNames = ['sub-app', 'sub-app--next', 'sub-app--out']
  const GRADIENTS = [
    {
      icon: 'flat-color-icons:folder',
      name: 'Blog',
      value: 'Blog'
    },
    {
      icon: 'flat-color-icons:folder',
      name: 'Editor',
      value: 'Editor'
    }
  ]
  return (
    <>
      <div className='app-wrapper'>
        {apps.map(_App => (
          <div
            key={_App.key}
            className={currentProject === _App.key ? cs(currentClassNames) : cs(nextClassNames)}
            onClick={() => {
              toggleProject(_App.key)
            }}
          >
            <_App.component />
          </div>
        ))}
        <FooterToolbar gradIents={GRADIENTS}></FooterToolbar>
      </div>
    </>
  )
}

export default AppRender
