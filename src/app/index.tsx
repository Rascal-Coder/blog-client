import { Theme } from '@/theme'
import { Global } from '@emotion/react'
import { useMount } from 'ahooks'
import $, { type Cash } from 'cash-dom'
import './animation.scss'
import { appList } from './app-list'
import { globalStyle } from './style'

type AppProps = {
  apps: Array<() => JSX.Element>
}

const App: React.FC<AppProps> = ({ apps }) => {
  useMount(() => {
    $.fn.addSwitchAppAnimation = function () {
      return this.each(function () {
        const $this = $(this)
        const $cards = $this.find('.sub-app')
        let $current = $cards.filter('.sub-app--current')
        let $next: Cash
        $cards.on('click', function (this: Cash) {
          if (!$current.is(this)) {
            $cards.removeClass('sub-app--current sub-app--out sub-app--next')
            $current.addClass('sub-app--out')
            $current = $(this).addClass('sub-app--current')
            $next = $current.next()
            $next = $next.length ? $next : $cards.first()
            $next.addClass('sub-app--next')
          }
        })

        if (!$current.length) {
          $current = $cards.last()
          $cards.first().trigger('click')
        }
      })
    }

    $('.app-wrapper').addSwitchAppAnimation()
  })

  return (
    <>
      <Global styles={globalStyle} />
      <Theme />
      <div className='app-wrapper'>
        {apps.map((_App, idx) => (
          <div key={idx} className='sub-app'>
            <_App />
          </div>
        ))}
      </div>
    </>
  )
}

// eslint-disable-next-line react/display-name
export default () => <App apps={appList} />
