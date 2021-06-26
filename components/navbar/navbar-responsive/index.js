import { useState, useEffect } from 'react'
import NavLinkResponsive from './nav-link-responsive'

const NavbarResponsive = () => {
  const [toggle, setToggle] = useState(false)
  const [navbarHeight, setNavbarHeight] = useState()

  const isVisible = toggle ? 'block' : 'hidden'
  const isOpen = toggle ? 'opacity-25' : 'opacity-100'

  useEffect(() => {
    const header = document.querySelector('#header')
    setNavbarHeight(header.offsetHeight)
  }, [])

  return (
    <div className="block md:hidden font-spartan font-bold text-md leading-lg">
      <button className="focus:outline-none" onClick={() => setToggle(!toggle)}>
        <i className={`fas fa-bars text-lg leading-lg ${isOpen}`} aria-hidden />
      </button>
      <nav>
        <ul
          className={`${isVisible} bg-dark absolute z-50 min-h-screen left-0 right-0`}
          style={{ top: `${navbarHeight}px` }}
        >
          <NavLinkResponsive
            title="mercury"
            dotColor="#DEF4FC"
            href="/mercury/overview"
            onClick={() => setToggle(!toggle)}
          />
          <NavLinkResponsive
            title="venus"
            dotColor="#F7CC7F"
            href="/venus/overview"
            onClick={() => setToggle(!toggle)}
          />
          <NavLinkResponsive
            title="earth"
            dotColor="#545BFE"
            href="/earth/overview"
            onClick={() => setToggle(!toggle)}
          />
          <NavLinkResponsive
            title="mars"
            dotColor="#FF6A45"
            href="/mars/overview"
            onClick={() => setToggle(!toggle)}
          />
          <NavLinkResponsive
            title="jupiter"
            dotColor="#ECAD7A"
            href="/jupiter/overview"
            onClick={() => setToggle(!toggle)}
          />
          <NavLinkResponsive
            title="saturn"
            dotColor="#FCCB6B"
            href="/saturn/overview"
            onClick={() => setToggle(!toggle)}
          />
          <NavLinkResponsive
            title="uranus"
            dotColor="#65F0D5"
            href="/uranus/overview"
            onClick={() => setToggle(!toggle)}
          />
          <NavLinkResponsive
            title="neptune"
            dotColor="#497EFA"
            href="/neptune/overview"
            onClick={() => setToggle(!toggle)}
          />
        </ul>
      </nav>
    </div>
  )
}

export default NavbarResponsive
