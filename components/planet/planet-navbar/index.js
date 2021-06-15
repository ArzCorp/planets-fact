import ButtonLink from 'components/botton-link'

const PlanetNavbar = () => {
  return (
    <section className="hidden md:block w-4/12 lg:w-full">
      <ButtonLink
        id="overview"
        title="OVERVIEW"
        accountant="01"
        uppercase={true}
      />
      <ButtonLink
        id="internal"
        title="Internal Structure"
        accountant="02"
        uppercase={true}
      />
      <ButtonLink
        id="surface"
        title="Surface Geology"
        accountant="03"
        uppercase={true}
      />
    </section>
  )
}

export default PlanetNavbar
