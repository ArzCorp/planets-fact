import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import PlanetNavbar from '../planet-navbar'
import PlanetNavbarResponsive from '../planet-navbar/planet-navbar-responsive'

const PlanetDescription = ({ planetData }) => {
  const { query } = useRouter()
  const [data, setData] = useState({})

  useEffect(() => {
    const url =
      window.location.origin === 'http://localhost:3000'
        ? 'http://localhost:3000/'
        : 'https://planets-fact.vercel.app/'

    if (query.id === 'overview') {
      setData({
        name: planetData.name,
        content: planetData.overview.content,
        source: planetData.overview.source,
        img: url + planetData.images.planet,
      })
    }
    if (query.id === 'structure') {
      setData({
        name: planetData.name,
        content: planetData.structure.content,
        source: planetData.structure.source,
        img: url + planetData.images.internal,
      })
    }
    if (query.id === 'geology') {
      setData({
        name: planetData.name,
        content: planetData.geology.content,
        source: planetData.geology.source,
        img: url + planetData.images.geology,
        planet: url + planetData.images.planet,
      })
    }
  }, [query.id])

  return (
    <div className="text-white font-spartan pt-0 md:pt-56 lg:pt-48 pb-0 lg:pb-22">
      <PlanetNavbarResponsive
        planet={planetData.name.toLowerCase()}
        color={planetData.color}
      />
      <div className="block lg:flex w-11/12 lg:w-10/12 mx-auto">
        <div className="relative w-full lg:w-7/12 xl:w-8/12 flex items-center pb-24 md:pb-32 lg:pb-0">
          <img
            className={`${
              query.id === 'geology' ? 'block' : 'hidden'
            } m-auto max-w-10/12`}
            src={query.id === 'geology' ? data.planet : data.img}
          />
          <img
            className={`${
              query.id === 'geology'
                ? 'absolute m-auto max-w-2/12 bottom-16 xl:bottom-0'
                : 'm-auto max-w-11/12'
            } block`}
            style={{ right: '41.80%' }}
            src={data.img}
            alt={data.name}
          />
        </div>
        <div className="flex justify-between items-center lg:block w-full lg:w-5/12 xl:w-4/12 text-sm lg:text-md leading-lg lg:leading-xl">
          <div className="w-11/12 md:w-7/12 lg:w-full mx-auto md:mx-0">
            <h1 className="font-antonio uppercase text-center md:text-left font-medium mb-4 lg:mb-6 text-4xl md:text-6xl lg:text-16xl leading-7xl md:leading-9xl lg:leading-19xl">
              {data.name}
            </h1>
            <p className="text-center md:text-left mb-8 lg:mb-6">
              {data.content}
            </p>
            <p className="text-center md:text-left mb-7 lg:mb-10">
              Source :{' '}
              <a
                href={data.source}
                className="text-grey-light underline font-bold mr-2 md:mr-2-md lg:mr-2-lg xl:mr-2-xl"
              >
                Wikipedia
              </a>
              <i className="fas fa-external-link-square-alt text-grey-light"></i>
            </p>
          </div>
          <PlanetNavbar
            planet={planetData.name.toLowerCase()}
            color={planetData.color}
          />
        </div>
      </div>
    </div>
  )
}

export default PlanetDescription
