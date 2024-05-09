import { defineConfig, loadEnv } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import process from 'node:process'
import { setupVitePlugins } from './build/plugins'

export default defineConfig(configEnv => {
  const viteEnv = loadEnv(configEnv.mode, process.cwd()) as unknown as ImportMetaEnv
  return {
    resolve: {
      alias: {
        '~': fileURLToPath(new URL('./src/components', import.meta.url)),
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    plugins: setupVitePlugins(viteEnv),
    server: {
      host: '0.0.0.0',
      port: 9527
      // proxy
    },
    preview: {
      port: 9725
    }
  }
})
