import { defineConfig, loadEnv } from 'vite'
import process from 'node:process';
import { setupVitePlugins } from './build/plugins'

export default defineConfig(configEnv => {
  const viteEnv = loadEnv(configEnv.mode, process.cwd()) as unknown as Env.ImportMeta
  return {
    plugins: setupVitePlugins(viteEnv)
  }
})
