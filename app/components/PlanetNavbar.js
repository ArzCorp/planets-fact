import Link from 'next/link'
import { PLANET_NAVBAR } from '../utils/constants/staticData'
import { getPlanetData } from '../utils/getPlanet'

export default function PlanetNavbar({ currentPlanet = '', currentTab = '' }) {
  const planetData = getPlanetData(currentPlanet)

  const isActiveTab = (tab) => tab.toLowerCase() === currentTab.toLowerCase()

  return (
    <nav className="border-b border-white border-opacity-10">
      <ul className="grid grid-cols-3 place-items-center">
        {PLANET_NAVBAR.map((navbar) => (
          <li
            className={`max-w-[80px] w-full text-center uppercase border-b-4 py-5 pb-[17px] font-spartan text-navbar-planet`}
            style={{
              borderColor: isActiveTab(navbar)
                ? planetData.planet_color
                : 'transparent',
              opacity: isActiveTab(navbar) ? 1 : 0.5,
            }}
          >
            <Link href={`/planet/${currentPlanet}/${navbar.toLowerCase()}`}>
              {navbar}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
