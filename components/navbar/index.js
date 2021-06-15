import NavLink from './nav-link'

const Navbar = () => {
  return (
    <div className="text-white-opacity hidden md:block font-spartan font-bold text-sm leading-lg">
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
