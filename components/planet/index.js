import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import PlanetDescription from './planet-description'
import PlanetStats from './planet-stats'

const Planet = () => {
  const router = useRouter()
  const [planet, setPlanet] = useState()
  const [headerSize, setHeaderSize] = useState()

  const getData = async () => {
    const url =
      window.location.origin === 'http://localhost:3000'
        ? 'http://localhost:3000/api'
        : 'https://planets-fact.vercel.app/api/'

    const response = await fetch(url + router.pathname)
    const data = await response.json()
    console.log(data)
    setPlanet(data)
  }

  useEffect(() => {
    const header = document.querySelector('#header')
    setHeaderSize(header.offsetHeight)
  }, [])

  useEffect(() => {
    getData()
  }, [])

  return (
    <section
      className="bg-dark"
      style={{
        backgroundImage: 'url(/img/bg/background-stars.svg)',
        minHeight: `calc(100vh - ${headerSize}px)`,
      }}
    >
      {planet ? (
        <>
          <PlanetDescription planetData={planet} />
          <PlanetStats planetData={planet} />
        </>
      ) : (
        <h2>Cargando</h2>
      )}
    </section>
  )
}

export default Planet
