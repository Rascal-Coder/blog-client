import type { PluginOption } from 'vite'
import { setupUnocss } from './unocss'
import { setupReact } from './react'
export function setupVitePlugins(viteEnv: ImportMetaEnv) {
  const plugins: PluginOption = [setupUnocss(viteEnv), setupReact()]

  return plugins
}
