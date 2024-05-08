import * as Tooltip from '@radix-ui/react-tooltip'
import React, { type PropsWithChildren } from 'react'
import './style.scss'
const RaTooltip: React.FC<PropsWithChildren<{ content: string; showArrow?: boolean }>> = ({
  children,
  content,
  showArrow
}) => {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>{children}</Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content className='TooltipContent' sideOffset={5}>
            {content}
            {showArrow && <Tooltip.Arrow className='TooltipArrow' />}
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}

export default RaTooltip
