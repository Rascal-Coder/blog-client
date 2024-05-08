import * as React from 'react'
import { animated, useSpringValue } from '@react-spring/web'

import styles from './styles.module.scss'
import { useProjectSwitch } from '@/hooks/useProjectSwitch'
interface GradIent {
  icon: string
  name: string
  value: string
}
interface DockCardProps {
  children: React.ReactNode
  gradIent: GradIent
}

const INITIAL_WIDTH = 30

export const DockCard = ({ children, gradIent }: DockCardProps) => {
  const { toggleProject, currentProject } = useProjectSwitch()
  const cardRef = React.useRef<HTMLButtonElement>(null!)

  const size = useSpringValue(INITIAL_WIDTH, {
    config: {
      mass: 0.1,
      tension: 320
    }
  })
  const y = useSpringValue(0, {
    config: {
      friction: 29,
      tension: 238
    }
  })

  const timesLooped = React.useRef(0)
  const timeoutRef = React.useRef<NodeJS.Timeout>()
  const isAnimating = React.useRef(false)

  const handleClick = () => {
    toggleProject(gradIent.value)
    if (gradIent.value === currentProject) return
    if (!isAnimating.current) {
      isAnimating.current = true
      timesLooped.current = 0

      y.start(-INITIAL_WIDTH / 2, {
        loop() {
          if (timesLooped.current++ === 3) {
            timeoutRef.current = setTimeout(() => {
              y.set(0)
              isAnimating.current = false
              timeoutRef.current = undefined
            }, 2000)
            y.stop()
          }

          return { reverse: true }
        }
      })
    } else {
      /**
       * Allow premature exit of animation
       * on a second click if we're currently animating
       */
      clearTimeout(timeoutRef.current)
      y.start(0)
      isAnimating.current = false
    }
  }

  React.useEffect(
    () => () => {
      clearTimeout(timeoutRef.current)
    },
    []
  )

  return (
    <div className={styles['dock-card-container']}>
      <animated.button
        ref={cardRef}
        className={styles['dock-card']}
        onClick={handleClick}
        style={{
          width: size,
          height: size,
          y
        }}
      >
        {children}
      </animated.button>
      {/* dot */}
      <div className={currentProject === gradIent.value ? `w-[4px] h-[4px] rounded-[50%] bg-coolGray` : ''} />
    </div>
  )
}
