import { styled } from '@stitches/react'
import { blue, blackA, green, mauve, red } from '@radix-ui/colors'
export const Button = styled('button', {
  all: 'unset',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  padding: '0 15px',
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
  height: 35,
  cursor: 'pointer',
  variants: {
    variant: {
      blue: {
        backgroundColor: `white !important`,
        color: blue.blue11,
        boxShadow: `0 2px 10px ${blackA.blackA4}`,
        '&:hover': { backgroundColor: `${mauve.mauve3} !important` },
        '&:focus': { boxShadow: `0 0 0 2px black !important` }
      },
      green: {
        backgroundColor: `${green.green4} !important`,
        color: green.green11,
        '&:hover': { backgroundColor: `${green.green5} !important` },
        '&:focus': { boxShadow: `0 0 0 2px ${green.green7} !important` }
      },
      red: {
        backgroundColor: `${red.red4} !important`,
        color: `${red.red11} !important`,
        '&:hover': { backgroundColor: `${red.red5} !important` },
        '&:focus': { boxShadow: `0 0 0 2px ${red.red7} !important` }
      }
    }
  },
  defaultVariants: {
    variant: 'blue'
  }
})
