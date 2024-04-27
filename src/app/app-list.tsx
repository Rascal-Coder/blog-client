import SvgIcon from '@/components/svg-icon'
import ThemeSwitch from '@/components/theme-switch'

const Blog = () => {
  return (
    <div className='w-[65vw] h-[90vh]'>
      <ThemeSwitch className='scale-[0.2] w-4 h-4 ml-8' />
    </div>
  )
}

const ReplWrapper = () => {
  return (
    <div className='h-[95vh] w-[65vw] p-6 bg-white'>
      {/* <iframe src='https://rick-chou.github.io/repl/' className='h-[95vh] w-[65vw]' /> */}
    </div>
  )
}

export const appList = [Blog, ReplWrapper]
