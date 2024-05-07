import Blog from '@/blog/layouts'
const Editor = () => {
  return <div className='h-[90vh] w-[65vw] p-6 bg-white box-border'></div>
}

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
