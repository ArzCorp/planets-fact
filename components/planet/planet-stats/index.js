import PlanetStatsCard from './planet-stats-card'

const PlanetStats = () => {
  return (
    <section className="w-10/12 md:w-11/12 mx-auto grid-rows-4 md:grid-rows-none md:grid grid-cols-4 pb-12 md:pb-9 lg:pb-14">
      <PlanetStatsCard />
      <PlanetStatsCard />
      <PlanetStatsCard />
      <PlanetStatsCard />
    </section>
  )
}

export default PlanetStats
