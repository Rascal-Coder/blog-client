import { defineConfig } from '@unocss/vite'
import transformerDirectives from '@unocss/transformer-directives'
import transformerVariantGroup from '@unocss/transformer-variant-group'
import presetUno from '@unocss/preset-uno'
import type { Theme } from '@unocss/preset-uno'
import { presetRascal } from '@rascal/uno-preset'
import { themeVars } from './src/theme/vars'
import presetAttributify from '@unocss/preset-attributify'
export default defineConfig<Theme>({
  content: {
    pipeline: {
      exclude: ['node_modules', 'dist']
    }
  },
  theme: {
    ...themeVars,
    fontSize: {
      'icon-xs': '0.875rem',
      'icon-small': '1rem',
      icon: '1.125rem',
      'icon-large': '1.5rem',
      'icon-xl': '2rem'
    }
  },
  shortcuts: {
    'border-1-black': 'border border-solid border-black'
  },
  transformers: [transformerDirectives(), transformerVariantGroup()],
  presets: [presetUno({ dark: 'class' }), presetRascal(), presetAttributify()]
})
