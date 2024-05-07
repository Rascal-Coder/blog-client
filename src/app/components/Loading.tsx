import { type CSSProperties } from 'react'
import HashLoader from 'react-spinners/HashLoader'
const override: CSSProperties = {
  display: 'block',
  margin: '0 auto'
}

function Loading() {
  return (
    <>
      <HashLoader cssOverride={override} color={'#646cff'} loading={true} size={100} />
      <div className='text-[#646cff] mt-2'>Rascal-WebSite</div>
    </>
  )
}

export default Loading
