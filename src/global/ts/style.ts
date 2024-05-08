import { css } from '@emotion/react'
export const globalStyle = css`
  ::-webkit-scrollbar {
    width: 2px;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--accent-10);
    border-radius: 10px;
  }

  body {
    font-family: var(--body-font);
    color: var(--indigo-contrast);
  }
`
