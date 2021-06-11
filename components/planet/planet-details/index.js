import { useEffect, useState } from 'react'
import PlanetNavbar from '../planet-navbar'

const PlanetDetails = ({ planetName, planetDescription, sourceLink }) => {
  const [headerSize, setHeaderSize] = useState()

  useEffect(() => {
    const header = document.querySelector('#header')
    setHeaderSize(header.offsetHeight)
  }, [])

  return (
    <section
      className="text-white bg-dark font-spartan pt-32 md:pt-32-md lg:pt-32-lg xl:pt-32-xl"
      style={{
        backgroundImage: 'url(/img/bg/background-stars.svg)',
        minHeight: `calc(100vh - ${headerSize}px)`,
      }}
    >
      <div className="w-10/12 mx-auto flex">
        <div className="w-8/12 flex items-center">
          <img
            className="m-auto max-w-52-xs md:max-w-52-md lg:max-w-52-lg xl:max-w-52-xl"
            src="/img/planet-mercury.svg"
            alt=""
          />
        </div>
        <div className="w-4/12 text-sm md:text-sm-md lg:text-sm-lg xl:text-sm-xl leading-lg md:leading-lg-md lg:leading-lg-lg xl:leading-lg-xl">
          <h1 className="font-antonio uppercase font-medium mb-6 md:mb-6-md lg:mb-6-lg xl:mb-6-xl text-13xl md:text-13xl-md lg:text-13xl-lg xl:text-13xl-xl leading-19xl md:leading-19xl-md lg:leading-19xl-lg xl:leading-19xl-xl">
            {planetName}
          </h1>
          <p className="mb-6 md:mb-6-md lg:mb-6-lg xl:mb-6-xl">
            {planetDescription}
          </p>
          <p className="mb-9 md:mb-9-md lg:mb-9-lg xl:mb-9-xl">
            Source :{' '}
            <a
              href={sourceLink}
              className="text-grey-light underline font-bold mr-2 md:mr-2-md lg:mr-2-lg xl:mr-2-xl"
            >
              Wikipedia
            </a>
            <i className="fas fa-external-link-square-alt text-grey-light"></i>
          </p>
          <PlanetNavbar />
        </div>
      </div>
    </section>
  )
}

export default PlanetDetails
