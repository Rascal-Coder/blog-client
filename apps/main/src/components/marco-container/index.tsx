const MarcoContainer: React.FC<{ src: string }> = ({ src }) => {
  return (
    <div className='h-[calc(100vh-50px)] w-screen  bg-white box-border'>
      <iframe src={src} className='h-full w-[calc(100vw)]' />
    </div>
  )
}

export default MarcoContainer
