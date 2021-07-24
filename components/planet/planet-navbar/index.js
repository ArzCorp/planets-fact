import { useEffect, useState } from 'react'

import ButtonLink from 'components/botton-link'
import { useRouter } from 'next/router'

const PlanetNavbar = ({ color, planet }) => {
  const router = useRouter()
  const [active, setActive] = useState({})

  useEffect(() => {
    setActive(router.query.id)
  }, [])

  return (
    <div className="hidden md:block w-4/12 lg:w-full">
      <ButtonLink
        id="overview"
        href={`/${planet}/overview`}
        title="OVERVIEW"
        bgColor={active === 'overview' ? color : 'transparent'}
        accountant="01"
        uppercase={true}
        onClick={() => {
          setActive('overview')
        }}
      />
      <ButtonLink
        id="structure"
        href={`/${planet}/structure`}
        title="Internal Structure"
        accountant="02"
        bgColor={active === 'structure' ? color : 'transparent'}
        uppercase={true}
        onClick={() => setActive('structure')}
      />
      <ButtonLink
        id="geology"
        href={`/${planet}/geology`}
        title="Surface Geology"
        bgColor={active === 'geology' ? color : 'transparent'}
        accountant="03"
        uppercase={true}
        onClick={(e) => setActive('geology')}
      />
    </div>
  )
}

export default PlanetNavbar
