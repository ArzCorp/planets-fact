import { useEffect, useState } from 'react'
import NavLink from './nav-link'

const Navbar = () => {
  const [active, setActive] = useState(null)

  const changeActive = (element) => {
    active.style = 'color: #c1c1c8'
    element.style = `color: #${element.id}`
  }

  useEffect(() => {
    const tab = document.getElementsByClassName('mercury')
    setActive(tab[0])
    if (!active) {
      tab[0].style = 'color: #419EBB'
    }
  }, [])

  return (
    <div className="text-white-opacity hidden md:block font-spartan font-bold text-sm leading-lg">
      <nav>
        <ul className="flex items-center justify-center lg:justify-start">
          <NavLink
            title="mercury"
            id="419EBB"
            className="mercury"
            href="/mercury/overview"
            onClick={(e) => {
              changeActive(e.target)
              setActive(e.target)
            }}
          />
          <NavLink
            title="venus"
            id="EDA249"
            href="/venus/overview"
            onClick={(e) => {
              changeActive(e.target)
              setActive(e.target)
            }}
          />
          <NavLink
            title="earth"
            id="6D2ED5"
            href="/earth/overview"
            onClick={(e) => {
              changeActive(e.target)
              setActive(e.target)
            }}
          />
          <NavLink
            title="mars"
            id="D14C32"
            href="/mars/overview"
            onClick={(e) => {
              changeActive(e.target)
              setActive(e.target)
            }}
          />
          <NavLink
            title="jupiter"
            id="D83A34"
            href="/jupiter/overview"
            onClick={(e) => {
              changeActive(e.target)
              setActive(e.target)
            }}
          />
          <NavLink
            title="saturn"
            id="CD5120"
            href="/saturn/overview"
            onClick={(e) => {
              changeActive(e.target)
              setActive(e.target)
            }}
          />
          <NavLink
            title="uranus"
            id="1EC1A2"
            href="/uranus/overview"
            onClick={(e) => {
              changeActive(e.target)
              setActive(e.target)
            }}
          />
          <NavLink
            title="neptune"
            id="2D68F0"
            href="/neptune/overview"
            onClick={(e) => {
              changeActive(e.target)
              setActive(e.target)
            }}
          />
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
