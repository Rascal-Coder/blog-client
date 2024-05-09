import SvgIcon from '~/svg-icon'
import RaTooltip from '~/tooltip'
import classnames from 'classnames'
import { useProjectSwitch } from '@/hooks/useProjectSwitch'
interface CardProps {
  icon: string
  name: string
  value: string
}

export const Card: React.FC<CardProps> = ({ icon, name, value }) => {
  const { currentProject } = useProjectSwitch()
  const dockClass = classnames('flex-col-center! hidden w-full h-full relative z-0 rounded-1', {
    'bg-[#f5f5f5]': currentProject === value
  })
  return (
    <RaTooltip content={name}>
      <div className={dockClass}>
        {icon.includes('local-icon') ? (
          <SvgIcon localIcon={icon.split(' ')[1]} width='25px' height='25px'></SvgIcon>
        ) : (
          <SvgIcon icon={icon} width='25px' height='25px'></SvgIcon>
        )}
      </div>
    </RaTooltip>
  )
}
