import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import PlanetDescription from './planet-description'
import PlanetStats from './planet-stats'
import Loader from 'components/loader'

const Planet = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [planet, setPlanet] = useState({})
  const [headerSize, setHeaderSize] = useState()

  const getData = async () => {
    const planet = router.pathname.split('/[id]', 5)
    const url =
      window.location.origin === 'http://localhost:3000'
        ? 'http://localhost:3000/api'
        : 'https://planets-fact.vercel.app/api/'

    const response = await fetch(url + planet[0])
    const data = await response.json()
    setPlanet(data)
    setLoading(false)
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
      {loading ? (
        <Loader />
      ) : (
        <>
          <PlanetDescription planetData={planet} />
          <PlanetStats planetData={planet} />
        </>
      )}
    </section>
  )
}

export default Planet
