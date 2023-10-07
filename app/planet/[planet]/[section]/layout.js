import PlanetNavbar from '@/app/components/PlanetNavbar'
import { getPlanetData } from '@/app/utils/getPlanet'
import Image from 'next/image'

export default function PlanetPageLayout({ params, children }) {
  const { image_size } = getPlanetData(params.planet)
  const planetImage = `/planet-${params.planet}.svg`

  return (
    <section>
      <PlanetNavbar currentPlanet={params.planet} currentTab={params.section} />
      <Image
        width={image_size}
        height={image_size}
        src={planetImage}
        alt={`${params.planet} - ${params.section}`}
      />

      {children}
    </section>
  )
}
