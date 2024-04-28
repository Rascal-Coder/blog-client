import { type IconProps, Icon } from '@iconify/react'
import { type CSSProperties, useMemo, type SVGProps } from 'react'
interface CommonProps {
  localIcon?: string
  className?: string
  style?: CSSProperties
}

type SvgIconProps = IconProps & CommonProps

type SvgLocalIconProps = SVGProps<SVGSVGElement> & CommonProps

const SvgIcon: React.FC<SvgIconProps | SvgLocalIconProps> = ({ localIcon, ...props }) => {
  const symbolId = useMemo(() => {
    const { VITE_ICON_LOCAL_PREFIX: prefix } = import.meta.env

    const defaultLocalIcon = 'no-icon'

    const icon = localIcon || defaultLocalIcon

    return `#${prefix}-${icon}`
  }, [localIcon])
  /** If localIcon is passed, render localIcon first */
  const renderLocalIcon = useMemo(() => {
    return localIcon || !('icon' in props)
  }, [localIcon, props])
  const render = () => {
    if (renderLocalIcon) {
      return (
        <svg
          {...props}
          aria-hidden='true'
          width={props.width ? props.width : '1em'}
          height={props.height ? props.height : '1em'}
          className={props.className}
        >
          <use xlinkHref={symbolId} fill='currentColor'></use>
        </svg>
      )
    }

    if ('icon' in props) {
      return <Icon {...props} />
    }
  }

  return render()
}

export default SvgIcon
