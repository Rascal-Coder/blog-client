import MarcoContainer from '~/marco-container'
const Editor = () => <MarcoContainer src='https://rick-chou.github.io/repl/' />
const Blog = () => <MarcoContainer src='https://juejin.cn/' />
export const appList = [
  {
    key: 'Blog',
    component: Blog
  },
  {
    key: 'Editor',
    component: Editor
  }
]
