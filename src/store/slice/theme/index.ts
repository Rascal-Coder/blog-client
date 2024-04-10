import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  mode: 'dark' as UnionKey.ThemeScheme,
  fontFamily: import.meta.env.VITE_CODE_FONTFAMILY
}

type PayloadType = {
  mode: UnionKey.ThemeScheme
  fontFamily: string
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    onThemeModeChange(state, action: PayloadAction<PayloadType['mode']>) {
      state.mode = action.payload
      return state
    },
    onThemeFontFamilyChange(state, action: PayloadAction<PayloadType['fontFamily']>) {
      state.fontFamily = action.payload
      return state
    }
  }
})

export const { onThemeModeChange, onThemeFontFamilyChange } = themeSlice.actions

export default themeSlice.reducer
