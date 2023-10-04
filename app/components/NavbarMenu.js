import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { PLANETS, PLANET_NAVBAR } from '../utils/constants/staticData'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

export default function NavbarMenu({ handleMenuClick, animation }) {
  return (
    <section
      className={`absolute top-[86.4px] left-0 right-0 bottom-0 z-10 bg-dark ${animation} transition-all`}
    >
      <ul className="flex flex-col gap-[1px] bg-opacity-10 bg-white">
        {PLANETS.map((planet) => (
          <li
            key={planet.id}
            className="flex justify-between pr-8 pl-6 py-5 bg-dark"
          >
            <Link
              className="flex items-center w-full"
              href={`/planet/${
                planet.planet_name
              }/${PLANET_NAVBAR[0].toLowerCase()}`}
              onClick={handleMenuClick}
            >
              <span
                className={`${planet.planet_color_class} rounded-[50%] block w-5 h-5 mr-[25px]`}
              />
              <p className="font-spartan text-[0.938rem] font-bold uppercase">
                {planet.planet_name}
              </p>
            </Link>
            <FontAwesomeIcon
              icon={faChevronRight}
              className="text-white text-opacity-10"
            />
          </li>
        ))}
      </ul>
    </section>
  )
}
