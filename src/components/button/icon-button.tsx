import { styled } from '@stitches/react'
import { blue } from '@radix-ui/colors'
export const IconButton = styled('button', {
  all: 'unset',
  fontFamily: 'inherit',
  borderRadius: '100%',
  height: 25,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: blue.blue11,
  position: 'absolute',
  top: 10,
  right: 10,
  cursor: 'pointer',
  '&:hover': { backgroundColor: blue.blue4 },
  '&:focus': { boxShadow: `0 0 0 2px ${blue.blue7}` }
})
