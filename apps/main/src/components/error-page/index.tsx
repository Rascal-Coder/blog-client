import { useRouteError, useNavigate } from 'react-router-dom'
import Parallax from 'parallax-js'
import { useMount } from 'ahooks'
import './style.scss'
const ErrorPage = () => {
  const error = useRouteError() as Error
  const navigate = useNavigate()

  console.log('error.message', error.stack)

  useMount(() => {
    const scene = document.getElementById('scene')
    const parallax = new Parallax(scene)
  })

  return (
    <>
      <section className='wrapper'>
        <div className='container-404'>
          <div id='scene' className='scene' data-hover-only='false'>
            <div className='circle' data-depth='1.2'></div>
            <div className='one' data-depth='0.9'>
              <div className='content'>
                <span className='piece'></span>
                <span className='piece'></span>
                <span className='piece'></span>
              </div>
            </div>

            <div className='two' data-depth='0.60'>
              <div className='content'>
                <span className='piece'></span>
                <span className='piece'></span>
                <span className='piece'></span>
              </div>
            </div>

            <div className='three' data-depth='0.40'>
              <div className='content'>
                <span className='piece'></span>
                <span className='piece'></span>
                <span className='piece'></span>
              </div>
            </div>

            <p className='page-404' data-depth='0.50'>
              404
            </p>
            <p className='page-404' data-depth='0.10'>
              404
            </p>
          </div>

          <div className='text'>
            <article>
              <p>
                Uh oh! Looks like you got lost. <br />
                Go back to the homepage if you dare!
              </p>
              <button
                onClick={() => {
                  navigate('/')
                }}
              >
                i dare!
              </button>
            </article>
          </div>
        </div>
      </section>
    </>
  )
}

export default ErrorPage
