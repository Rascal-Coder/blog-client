import { Theme } from '@/theme'
import { Global } from '@emotion/react'
import './animation.scss'
import { appList } from './app-list'
import { globalStyle } from './style'
import SvgIcon from '@/components/svg-icon'
import { useProjectSwitch } from '@/hooks/useProjectSwitch'
import cs from 'classnames'
interface AppProps {
  apps: Array<{
    key: string
    component: () => JSX.Element
  }>
}

const ProjectSwitch: React.FC<AppProps> = ({ apps }) => {
  /* current w:40px h:40px ; next w:20px h:20px */
  const { toggleProject, currentProject } = useProjectSwitch()
  return (
    <div className='fixed left-0 top-[calc(50%-30px)] translate-y-[clac(50%-30px)]'>
      {apps.map(app => (
        <div className={`color-white flex-y-center`} key={app.key}>
          <SvgIcon
            onClick={() => {
              toggleProject(app.key)
            }}
            className='cursor-pointer'
            icon='flat-color-icons:folder'
            width={currentProject === app.key ? '40px' : '20px'}
            height={currentProject === app.key ? '40px' : '20px'}
          ></SvgIcon>
          <span
            onClick={() => {
              toggleProject(app.key)
            }}
            className={`cursor-pointer ${currentProject === app.key ? 'text-white' : 'text-gray-500'}`}
          >
            {app.key}
          </span>
        </div>
      ))}
    </div>
  )
}

const AppRender: React.FC<AppProps> = ({ apps }) => {
  const { toggleProject, currentProject } = useProjectSwitch()
  const currentClassNames = ['sub-app', 'sub-app--current']
  const nextClassNames = ['sub-app', 'sub-app--next', 'sub-app--out']

  return (
    <>
      <Global styles={globalStyle} />
      <Theme />
      <ProjectSwitch apps={apps}></ProjectSwitch>
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
      </div>
    </>
  )
}

const App = () => <AppRender apps={appList} />

export default App
