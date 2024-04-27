// import { onThemeFontFamilyChange, onThemeModeChange } from '@/store/slice/theme'
import { onThemeModeChange } from '@/store/slice/theme'
import { useCallback } from 'react'
import { useRootDispatch, useRootSelector } from './useStore'

export const useTheme = () => {
  const { mode, fontFamily } = useRootSelector(state => state.theme)
  const dispatch = useRootDispatch()

  const toggleThemeMode = useCallback(
    (_theme?: UnionKey.ThemeScheme) => {
      const newMode = _theme ?? (mode === 'dark' ? 'light' : 'dark')
      dispatch(onThemeModeChange(newMode))
    },
    [dispatch, mode]
  )

  // const toggleThemeFontFamily = useCallback(
  //   (_font: string) => {
  //     dispatch(onThemeFontFamilyChange(_font))
  //   },
  //   [dispatch]
  // )

  return {
    // mode
    mode,
    dark: mode === 'dark',
    light: mode === 'light',
    inverseTheme: (mode === 'dark' ? 'light' : 'dark') as typeof mode,
    toggleThemeMode,

    // font
    fontFamily
    // toggleThemeFontFamily
  }
}
