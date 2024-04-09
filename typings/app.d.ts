/** The global namespace for the app */
declare namespace App {
  import type { ColorPaletteNumber } from '@rascal/uno-preset'
  /** Theme namespace */
  namespace Theme {
    type ColorPaletteNumber = ColorPaletteNumber
    type OtherColor = {
      info: string
      success: string
      warning: string
      error: string
    }
    type ThemeToken = {
      colors: ThemeTokenColor
      boxShadow: {
        header: string
        sider: string
        tab: string
      }
    }
    type ThemeColor = {
      primary: string
    } & OtherColor

    type ThemeColorKey = keyof ThemeColor

    type ThemePaletteColor = {
      [key in ThemeColorKey | `${ThemeColorKey}-${ColorPaletteNumber}`]: string
    }

    type ThemeTokenColor = {
      [key: string]: string
      nprogress: string
      container: string
      layout: string
      inverted: string
      'base-text': string
    } & ThemePaletteColor
  }
}
