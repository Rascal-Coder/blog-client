import { type Dispatch, type SetStateAction } from 'react'
import { type CSS } from '@stitches/react'
interface Styles {
  top: string
  left: string
  width: string
  maxWidth: string
  maxHeight: string
}
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
  css?: CSS
}
interface ActionProps {
  cancelText: string
  confirmText: string
}
