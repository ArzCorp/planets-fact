import NavLink from './nav-link'

const Navbar = () => {
  return (
    <div className="hidden md:block font-spartan font-bold text-sm-xs md:text-sm-md lg:text-sm-lg xl:text-sm-xl leading-lg-xs md:leading-lg-md lg:leading-lg-lg xl:leading-lg-xl">
      <nav>
        <ul className="flex items-center justify-center lg:justify-start">
          <NavLink title="mercury" href="/mercury" />
          <NavLink title="venus" href="/venus" />
          <NavLink title="earth" href="/earth" />
          <NavLink title="mars" href="/mars" />
          <NavLink title="jupiter" href="/jupiter" />
          <NavLink title="saturn" href="/saturn" />
          <NavLink title="uranus" href="/uranus" />
          <NavLink title="neptune" href="/neptune" />
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
