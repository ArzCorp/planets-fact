'use client'

import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

import Menu from './Menu'
import { ANIMATIONS } from '../utils/constants/animations'

export default function Navbar() {
  const [animation, setAnimation] = useState('hidden')
  const menuOpenStyles =
    animation === ANIMATIONS.FADE_IN ? 'text-[#979797]' : 'text-white'

  const toggleMenu = () => {
    setAnimation((currentAnimation) => {
      if (currentAnimation === ANIMATIONS.FADE_IN) return ANIMATIONS.FADE_OUT
      return ANIMATIONS.FADE_IN
    })
  }

  return (
    <nav>
      <button type="button" onClick={toggleMenu}>
        <FontAwesomeIcon
          icon={faBars}
          className={`text-[25px] ${menuOpenStyles} transition-colors duration-300`}
        />
      </button>
      <Menu handleMenuClick={toggleMenu} animation={animation} />
    </nav>
  )
}
