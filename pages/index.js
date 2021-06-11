import Layout from 'components/layout'
import PlanetDetails from 'components/planet/planet-details'

export default function Home() {
  return (
    <>
      <Layout>
        <PlanetDetails
          planetName="mercury"
          planetDescription="Mercury is the smallest planet in the Solar System and the closest to
          the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest
          of all the Sun's planets. Mercury is one of four terrestrial
          planets in the Solar System, and is a rocky body like Earth."
        />
      </Layout>
    </>
  )
}
