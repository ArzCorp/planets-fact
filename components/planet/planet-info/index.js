import PlanetInfoCard from './planet-info-card'

const PlanetInfo = () => {
  return (
    <section className="w-10/12 md:w-11/12 mx-auto grid-rows-4 md:grid-rows-none md:grid grid-cols-4 pb-12 md:pb-9 lg:pb-14">
      <PlanetInfoCard />
      <PlanetInfoCard />
      <PlanetInfoCard />
      <PlanetInfoCard />
    </section>
  )
}

export default PlanetInfo
