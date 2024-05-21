import * as Dialog from '@radix-ui/react-dialog'
import { styled, keyframes } from '@stitches/react'
import { blackA, mauve } from '@radix-ui/colors'
import Flex from '~/flex'
import SvgIcon from '~/svg-icon'
import { Button, IconButton } from '~/button'
import { type Props } from './types'
import { useState } from 'react'
const defaultAction = {
  cancelText: '取消',
  confirmText: '确定'
}
const defaultTitle = 'Dialog Title'
const defaultDescription = 'Dialog Description'

const RaDialog: React.FC<Props> = ({
  showClose = true,
  showFooter = true,
  showDescription = true,
  showTitle = true,
  description = defaultDescription,
  title = defaultTitle,
  action = defaultAction,
  dialogChildren,
  open,
  setOpen,
  css
}) => {
  const { cancelText, confirmText } = action
  const createTitle = () => showTitle && <DialogTitle>{title}</DialogTitle>

  const createDescription = () => showDescription && <DialogDescription>{description}</DialogDescription>

  const createFooter = () => (
    <>
      <Dialog.Close asChild>
        <Button>{cancelText}</Button>
      </Dialog.Close>
      <Dialog.Close asChild>
        <Button css={{ marginLeft: 25 }}>{confirmText}</Button>
      </Dialog.Close>
    </>
  )
  return (
    <Dialog.Root
      open={open}
      onOpenChange={() => {
        setOpen(!open)
      }}
    >
      <Dialog.Trigger asChild>{dialogChildren.trigger}</Dialog.Trigger>
      <Dialog.Portal>
        <DialogOverlay />
        <DialogContent css={css}>
          {createTitle()}
          {createDescription()}
          {dialogChildren.body}
          {showFooter && (
            <Flex css={{ marginTop: 25, justifyContent: 'flex-end' }}>
              {dialogChildren.footer ? dialogChildren.footer : createFooter()}
            </Flex>
          )}
          {showClose && (
            <Dialog.Close asChild>
              <IconButton aria-label='Close'>
                <SvgIcon icon='line-md:close-small'></SvgIcon>
              </IconButton>
            </Dialog.Close>
          )}
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 }
})

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' }
})

const DialogOverlay = styled(Dialog.Overlay, {
  backgroundColor: blackA.blackA6,
  position: 'fixed',
  inset: 0,
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`
})

const DialogContent = styled(Dialog.Content, {
  backgroundColor: 'white',
  borderRadius: 6,
  boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  width: '90vw',
  maxWidth: '650px',
  maxHeight: '85vh',
  transform: 'translate(-50%, -50%)',
  padding: 25,
  animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  '&:focus': { outline: 'none' }
})

const DialogTitle = styled(Dialog.Title, {
  margin: 0,
  fontWeight: 500,
  color: mauve.mauve12,
  fontSize: 17
})

const DialogDescription = styled(Dialog.Description, {
  margin: '10px 0 20px',
  color: mauve.mauve11,
  fontSize: 15,
  lineHeight: 1.5
})

export default RaDialog
