import { useEffect, useState } from 'react'

import ButtonLink from 'components/botton-link'

const PlanetNavbarResponsive = ({ color, planet }) => {
  const [active, setActive] = useState()

  useEffect(() => {
    const tab = document.querySelector('#overview')
    setActive(tab)
    tab.style = `background-color: ${color}`
  }, [])

  const changeActive = (element) => {
    active.style = 'background-color: transparent'
    element.style = `background-color: ${color}`
    setActive(element)
  }

  return (
    <div className="grid grid-cols-3 border-b border-white border-opacity-30 md:hidden w-full md:w-4/12 lg:w-full mb-20">
      <ButtonLink
        id="overview"
        href={`/${planet}/overview`}
        title="OVERVIEW"
        uppercase={true}
        onClick={(e) => {
          changeActive(e.target)
        }}
      />
      <ButtonLink
        id="structure"
        href={`/${planet}/structure`}
        title="Internal Structure"
        uppercase={true}
        onClick={(e) => changeActive(e.target)}
      />
      <ButtonLink
        id="geology"
        href={`/${planet}/geology`}
        title="Surface Geology"
        uppercase={true}
        onClick={(e) => changeActive(e.target)}
      />
    </div>
  )
}

export default PlanetNavbarResponsive
