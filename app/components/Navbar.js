'use client'

import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

import NavbarMenu from './NavbarMenu'

export default function Navbar() {
  const [openNavbar, setOpenNavbar] = useState(false)
  const [animation, setAnimation] = useState('animate-fade-in')
  const menuOpenStyles = openNavbar ? 'text-[#979797]' : 'text-white'

  const toggleMenu = () => {
    if (openNavbar) {
      setAnimation('animate-fade-out')
    } else {
      setAnimation('animate-fade-in')
    }

    setTimeout(() => {
      setOpenNavbar(!openNavbar)
    }, 300)
  }

  return (
    <nav>
      <button type="button" onClick={toggleMenu}>
        <FontAwesomeIcon
          icon={faBars}
          className={`text-[25px] ${menuOpenStyles} transition-colors duration-300`}
        />
      </button>
      {openNavbar ? (
        <NavbarMenu handleMenuClick={toggleMenu} animation={animation} />
      ) : null}
    </nav>
  )
}
