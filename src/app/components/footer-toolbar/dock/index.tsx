import * as React from 'react'

interface DockProps {
  children: React.ReactNode
}

export const Dock = ({ children }: DockProps) => {
  return <div className='flex gap-3 items-end'>{children}</div>
}
