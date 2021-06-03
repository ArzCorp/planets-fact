import { useState, useEffect } from 'react'

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
        <i className={`fas fa-bars text-lg leading-lg ${isOpen}`} />
      </button>
      <ul
        className={`${isVisible} bg-dark absolute left-0 right-0 bottom-0`}
        style={{ top: `${navbarHeight}px` }}
      >
        <li>
          <a
            href="/mercury"
            className="uppercase mx-3-xs md:mx-3-md lg:mx-3-lg xl:mx-3-xl"
          >
            mercury
          </a>
        </li>
        <li>
          <a
            href="/venus"
            className="uppercase mx-3-xs md:mx-3-md lg:mx-3-lg xl:mx-3-xl"
          >
            venus
          </a>
        </li>
        <li>
          <a
            href="/earth"
            className="uppercase mx-3-xs md:mx-3-md lg:mx-3-lg xl:mx-3-xl"
          >
            earth
          </a>
        </li>
        <li>
          <a
            href="/mars"
            className="uppercase mx-3-xs md:mx-3-md lg:mx-3-lg xl:mx-3-xl"
          >
            mars
          </a>
        </li>
        <li>
          <a
            href="/jupiter"
            className="uppercase mx-3-xs md:mx-3-md lg:mx-3-lg xl:mx-3-xl"
          >
            jupiter
          </a>
        </li>
        <li>
          <a
            href="/saturn"
            className="uppercase mx-3-xs md:mx-3-md lg:mx-3-lg xl:mx-3-xl"
          >
            saturn
          </a>
        </li>
        <li>
          <a
            href="/uranus"
            className="uppercase mx-3-xs md:mx-3-md lg:mx-3-lg xl:mx-3-xl"
          >
            uranus
          </a>
        </li>
        <li>
          <a
            href="/neptune"
            className="uppercase mx-3-xs md:mx-3-md lg:mx-3-lg xl:mx-3-xl"
          >
            neptune
          </a>
        </li>
      </ul>
    </div>
  )
}

export default NavbarResponsive
