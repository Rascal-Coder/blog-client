import { useEffect, useState } from 'react'
import MarcoContainer from '~/marco-container'
export const GRADIENTS = [
  {
    icon: 'flat-color-icons:folder',
    name: 'Blog',
    value: 'Blog'
  },
  {
    icon: 'vscode-icons:file-type-vscode',
    name: 'Editor',
    value: 'Editor'
  },
  {
    icon: 'emojione:sun-behind-cloud',
    name: 'Weather',
    value: 'Weather'
  }
]

// 外部应用
const Editor = () => <MarcoContainer id='editor' src='https://rick-chou.github.io/repl/' />
const Blog = () => <MarcoContainer id='blog' src='https://juejin.cn/' />
const Weather = () => {
  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)

  useEffect(() => {
    const getLocation = () => {
      window.navigator.geolocation.getCurrentPosition(
        res => {
          const { latitude, longitude } = res.coords
          setLatitude(latitude)
          setLongitude(longitude)
        },
        err => {
          console.error('Error getting location:', err)
        }
      )
    }

    getLocation()
  }, [])
  return (
    <MarcoContainer
      id='weather'
      src={`https://rascal-coder.github.io/weather-io/#/weather?lat=${latitude}&lon=${longitude}&isIframe=${true}`}
    ></MarcoContainer>
  )
}

export const APPLIST = [
  {
    key: 'Blog',
    component: Blog
  },
  {
    key: 'Editor',
    component: Editor
  },
  {
    key: 'Weather',
    component: Weather
  }
]
