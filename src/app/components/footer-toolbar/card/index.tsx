import SvgIcon from '~/svg-icon'
import styles from './styles.module.scss'
// import * as Tooltip from '@radix-ui/react-tooltip'
import RaTooltip from '~/tooltip'

interface CardProps {
  icon: string
  name: string
}

export const Card = ({ icon, name }: CardProps) => {
  return (
    <RaTooltip content={name}>
      <div className={styles.card}>
        {icon.includes('local-icon') ? (
          <SvgIcon localIcon={icon.split(' ')[1]} width='30px' height='30px'></SvgIcon>
        ) : (
          <SvgIcon icon={icon} width='30px' height='30px'></SvgIcon>
        )}
      </div>
    </RaTooltip>
    // <Tooltip.Provider>
    //   <Tooltip.Root>
    //     <Tooltip.Trigger asChild>
    //       <div className={styles.card}>
    //         {icon.includes('local-icon') ? (
    //           <SvgIcon localIcon={icon.split(' ')[1]} width='30px' height='30px'></SvgIcon>
    //         ) : (
    //           <SvgIcon icon={icon} width='30px' height='30px'></SvgIcon>
    //         )}
    //       </div>
    //     </Tooltip.Trigger>
    //     <Tooltip.Portal>
    //       <Tooltip.Content className='TooltipContent' sideOffset={5}>
    //         {name}
    //       </Tooltip.Content>
    //     </Tooltip.Portal>
    //   </Tooltip.Root>
    // </Tooltip.Provider>
  )
}
