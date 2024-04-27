/**
 * @author
 * @link https://codepen.io/isaaclouzeiro/pen/YzRzmwQ
 */

import { useTheme } from '@/hooks/useTheme'
import { ThemeWrapper } from '@/theme'
import { themeSwitchStyle } from './style'
import SvgIcon from '@/components/svg-icon'

export type ThemeSwitchProps = {
  className?: string
}
const ThemeSwitch: React.FC<ThemeSwitchProps> = ({ className = '' }) => {
  const { toggleThemeMode } = useTheme()
  return (
    <ThemeWrapper style={themeSwitchStyle}>
      <div className={`theme-switch ${className}`}>
        <button
          type='button'
          id='switch'
          onClick={() => {
            toggleThemeMode()
          }}
        >
          <SvgIcon
            style={{ width: '4vw', height: '4vw' }}
            icon='line-md:moon-alt-to-sunny-outline-loop-transition'
            className='theme-icon sun'
          ></SvgIcon>
          <span className='btn-switch'></span>
          <SvgIcon
            style={{ width: '4vw', height: '4vw' }}
            icon='line-md:sunny-filled-loop-to-moon-filled-loop-transition'
            className='theme-icon moon'
          ></SvgIcon>
        </button>
      </div>
    </ThemeWrapper>
  )
}

export default ThemeSwitch
