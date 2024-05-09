const MarcoContainer: React.FC<{ src: string }> = ({ src }) => {
  return (
    <div className='h-[calc(100vh-50px)] w-screen p-6   box-border'>
      <iframe
        src={src}
        className='h-[calc(100vh-98px)] bg-white shadow-2xl shadow-dark rounded-2 w-[calc(100vw-48px)]'
      />
    </div>
  )
}

export default MarcoContainer
