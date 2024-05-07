import Header from './modules/header'
import Content from './modules/content'
import SideBar from './modules/sidebar'
const Blog = () => {
  return (
    <div className='w-[65vw] h-[90vh]'>
      <Header></Header>
      <Content></Content>
      <SideBar></SideBar>
    </div>
  )
}

export default Blog
