import { useProjectSwitch } from '@/hooks/useProjectSwitch'
import { useTransition, animated, type AnimatedProps } from '@react-spring/web'
import { useEffect, type CSSProperties } from 'react'
interface AppProps {
  apps: Array<{
    key: string
    component: () => JSX.Element
  }>
}
type PageItem = (props: AnimatedProps<{ style: CSSProperties }>) => React.ReactElement
interface PageProps {
  key: string
  component: PageItem
}
export const AppRender: React.FC<AppProps> = ({ apps }) => {
  const { currentProject } = useProjectSwitch()
  const _apps: PageProps[] = apps.map(_app => {
    return {
      key: _app.key,
      component: ({ style }) => (
        <animated.div style={{ ...style }}>
          <_app.component></_app.component>
        </animated.div>
      )
    }
  })
  const app = _apps.find(_App => _App.key === currentProject)
  const transitions = useTransition(currentProject, {
    from: { transform: 'translate3d(100%,0,0)' },
    enter: { transform: 'translate3d(0%,0,0)' },
    leave: { transform: 'translate3d(-100%,0,0)' }
  })

  return (
    <>
      {transitions(style => {
        return <div className='bg-blue'>{app && <app.component style={style}></app.component>}</div>
      })}
    </>
  )
}
