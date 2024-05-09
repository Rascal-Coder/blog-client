import react from '@vitejs/plugin-react'
export function setupReact(viteEnv?: ImportMetaEnv) {
  return react({
    // jsxImportSource: '@emotion/react',
    // babel: {
    //   plugins: ['@emotion/babel-plugin']
    // }
  })
}
