import { PLANETS } from './constants/staticData'

export const getPlanetData = (planet) =>
  PLANETS.find(
    (planetData) =>
      planetData.planet_name.toLowerCase() === planet.toLowerCase()
  )
