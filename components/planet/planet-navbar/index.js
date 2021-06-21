import { useEffect, useState } from 'react'

import ButtonLink from 'components/botton-link'

const PlanetNavbar = ({ color, planet }) => {
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
    <div className="hidden md:block w-4/12 lg:w-full">
      <ButtonLink
        id="overview"
        href={`/${planet}/overview`}
        title="OVERVIEW"
        accountant="01"
        uppercase={true}
        onClick={(e) => {
          changeActive(e.target)
        }}
      />
      <ButtonLink
        id="structure"
        href={`/${planet}/structure`}
        title="Internal Structure"
        accountant="02"
        uppercase={true}
        onClick={(e) => changeActive(e.target)}
      />
      <ButtonLink
        id="geology"
        href={`/${planet}/geology`}
        title="Surface Geology"
        accountant="03"
        uppercase={true}
        onClick={(e) => changeActive(e.target)}
      />
    </div>
  )
}

export default PlanetNavbar
