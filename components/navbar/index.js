import NavLink from './nav-link'

const Navbar = () => {
  return (
    <div className="text-white-opacity hidden md:block font-spartan font-bold text-sm leading-lg">
      <nav>
        <ul className="flex items-center justify-center lg:justify-start">
          <NavLink title="mercury" href="/mercury/overview" />
          <NavLink title="venus" href="/venus/overview" />
          <NavLink title="earth" href="/earth/overview" />
          <NavLink title="mars" href="/mars/overview" />
          <NavLink title="jupiter" href="/jupiter/overview" />
          <NavLink title="saturn" href="/saturn/overview" />
          <NavLink title="uranus" href="/uranus/overview" />
          <NavLink title="neptune" href="/neptune/overview" />
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
