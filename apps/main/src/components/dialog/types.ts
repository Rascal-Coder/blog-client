import { type Dispatch, type SetStateAction } from 'react'
export interface Props {
  dialogChildren: {
    body?: React.ReactNode
    trigger: React.ReactNode
    footer?: React.ReactNode
  }
  showClose?: boolean
  showFooter?: boolean
  showTitle?: boolean
  showDescription?: boolean
  description?: string
  action?: ActionProps
  open: boolean
  title?: string
  setOpen: Dispatch<SetStateAction<boolean>>
  handleClose?: () => void
}
interface ActionProps {
  cancelText: string
  confirmText: string
}
