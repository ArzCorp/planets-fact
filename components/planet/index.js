import { useEffect, useState } from 'react'

import PlanetDetails from './planet-details'
import PlanetStats from './planet-stats'

const Planet = () => {
  const [headerSize, setHeaderSize] = useState()

  useEffect(() => {
    const header = document.querySelector('#header')
    setHeaderSize(header.offsetHeight)
  }, [])

  return (
    <section
      className="bg-dark"
      style={{
        backgroundImage: 'url(/img/bg/background-stars.svg)',
        minHeight: `calc(100vh - ${headerSize}px)`,
      }}
    >
      <PlanetDetails
        planetName="mercury"
        planetDescription="Mercury is the smallest planet in the Solar System and the closest to
          the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest
          of all the Sun's planets. Mercury is one of four terrestrial
          planets in the Solar System, and is a rocky body like Earth."
      />
      <PlanetStats />
    </section>
  )
}

export default Planet
