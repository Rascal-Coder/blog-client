import * as React from 'react'

import styles from './styles.module.scss'

interface DockProps {
  children: React.ReactNode
}

export const Dock = ({ children }: DockProps) => {
  return <div className={styles.dock}>{children}</div>
}
