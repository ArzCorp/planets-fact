import PlanetStatsCard from './planet-stats-card'

const PlanetStats = ({ planetData = {} }) => {
  return (
    <div className="w-10/12 md:w-11/12 mx-auto grid-rows-4 md:grid-rows-none md:grid grid-cols-4 pb-12 md:pb-9 lg:pb-14">
      <PlanetStatsCard title="ROTATION TIME" content={planetData.rotation} />
      <PlanetStatsCard
        title="REVOLUTION TIME"
        content={planetData.revolution}
      />
      <PlanetStatsCard title="radius" content={planetData.radius} />
      <PlanetStatsCard title="AVERAGE TEMP." content={planetData.temperature} />
    </div>
  )
}

export default PlanetStats
