import React, { useState, useEffect } from 'react'
import 'tachyons/css/tachyons.min.css'

import github from './assets/github.svg'
import instagram from './assets/instagram.svg'
import twitter from './assets/twitter.svg'

export const App = () => {
  const [showName, toggleShowName] = useState(false)
  const [showSocial, toggleShowSocial] = useState(false)

  useEffect(() => {
    const onLoad = () => {
      toggleShowName(true)
      toggleShowSocial(true)
    }

    if (document.readyState === 'complete') {
      onLoad()
    }

    window.addEventListener('load', onLoad)
    return () => window.removeEventListener('load', onLoad)
  }, [])

  return (
    <div className='bg-image flex flex-column justify-center w-100 vh-100 bg-center cover pv4'>
      <div className={`name o-0 ${showName ? 'name-active' : ''} 
      flex flex-auto flex-column justify-center items-center white`}>
        <div className='f2'>Joel George V</div>
      </div>
      <div className={`social o-0 ${showSocial ? 'social-active' : ''} flex justify-center`}>
        <a className='mh1' href='https://github.com/joelgeorgev'>
          <img src={github} alt='GitHub' />
        </a>
        <a className='mh1' href='https://www.instagram.com/joelgeorgev'>
          <img src={instagram} alt='Instagram' />
        </a>
        <a className='mh1' href='https://twitter.com/joelgeorgev'>
          <img src={twitter} alt='Twitter' />
        </a>
      </div>
    </div>
  )
}