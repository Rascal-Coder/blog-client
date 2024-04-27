import { Icon } from '@iconify/react'
import { type CSSProperties, useMemo } from 'react'
interface Props {
  /** Iconify icon name */
  icon?: string
  /** Local svg icon name */
  localIcon?: string
  className?: string
  style?: CSSProperties
}

const SvgIcon: React.FC<Props> = ({ localIcon, className = '', icon, style }) => {
  const symbolId = useMemo(() => {
    const { VITE_ICON_LOCAL_PREFIX: prefix } = import.meta.env

    const defaultLocalIcon = 'no-icon'

    const icon = localIcon || defaultLocalIcon

    return `#${prefix}-${icon}`
  }, [localIcon])
  /** If localIcon is passed, render localIcon first */
  const renderLocalIcon = useMemo(() => {
    return localIcon || !icon
  }, [localIcon, icon])
  const render = () => {
    if (renderLocalIcon) {
      return (
        <svg aria-hidden='true' width='1em' height='1em' style={style} className={className}>
          <use xlinkHref={symbolId} fill='currentColor'></use>
        </svg>
      )
    }

    if (icon) {
      return <Icon icon={icon} style={style} className={className} />
    }
  }

  return render()
}

export default SvgIcon
