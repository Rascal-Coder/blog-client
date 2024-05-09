import { gray, blue, red, green, grayDark, blueDark, redDark, greenDark } from '@radix-ui/colors'
import { createStitches } from '@stitches/react'
const { styled, createTheme } = createStitches({
  theme: {
    colors: {
      ...gray,
      ...blue,
      ...red,
      ...green
    }
  }
})

const darkTheme = createTheme({
  colors: {
    ...grayDark,
    ...blueDark,
    ...redDark,
    ...greenDark
  }
})

// Use the colors in your styles
const Button = styled('button', {
  backgroundColor: '$blue4',
  color: '$blue11',
  borderColor: '$blue7',
  '&:hover': {
    backgroundColor: '$blue5',
    borderColor: '$blue8'
  }
})
const BttonDemo = () => {
  return <Button className={darkTheme}>Hello</Button>
}

export default BttonDemo
