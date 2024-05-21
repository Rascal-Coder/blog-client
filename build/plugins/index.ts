import type { PluginOption } from 'vite'
import { setupUnocss } from './unocss'
import { setupReact } from './react'
import { setupUnplugin } from './unplugin'
export function setupVitePlugins(viteEnv: ImportMetaEnv) {
  const plugins: PluginOption = [setupReact(), setupUnocss(viteEnv), ...setupUnplugin(viteEnv)]
  return plugins
}
