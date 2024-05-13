interface Props extends React.PropsWithChildren {
  src?: string
  isInner?: boolean
  id: string
}
const MarcoContainer: React.FC<Props> = ({ src, isInner = false, id, children }) => {
  return (
    <div className='h-[calc(100vh-50px)] w-screen p-6 box-border'>
      {isInner ? (
        <div id={id} className='h-[calc(100vh-98px)] bg-white shadow-2xl shadow-dark rounded-2 w-[calc(100vw-48px)]'>
          {children}
        </div>
      ) : (
        <iframe
          src={src}
          id={id}
          className='h-[calc(100vh-98px)] bg-white shadow-2xl shadow-dark rounded-2 w-[calc(100vw-48px)]'
        />
      )}
    </div>
  )
}

export default MarcoContainer
