import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import ButtonLink from 'components/botton-link'

const PlanetNavbarResponsive = ({ color, planet }) => {
  const router = useRouter()
  const [active, setActive] = useState()

  useEffect(() => {
    setActive(router.query.id)
  }, [])

  return (
    <div className="grid grid-cols-3 border-b border-white border-opacity-30 md:hidden w-full md:w-4/12 lg:w-full mb-20">
      <ButtonLink
        id="overview"
        href={`/${planet}/overview`}
        title="OVERVIEW"
        bgColor={active === 'overview' ? color : 'transparent'}
        uppercase={true}
        onClick={() => {
          setActive('overview')
        }}
      />
      <ButtonLink
        id="structure"
        href={`/${planet}/structure`}
        title="Internal Structure"
        bgColor={active === 'structure' ? color : 'transparent'}
        uppercase={true}
        onClick={() => setActive('structure')}
      />
      <ButtonLink
        id="geology"
        href={`/${planet}/geology`}
        title="Surface Geology"
        bgColor={active === 'geology' ? color : 'transparent'}
        uppercase={true}
        onClick={() => setActive('geology')}
      />
    </div>
  )
}

export default PlanetNavbarResponsive
