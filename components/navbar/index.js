const Navbar = () => {
  return (
    <div className="hidden md:block font-spartan font-bold text-sm-xs md:text-sm-md lg:text-sm-lg xl:text-sm-xl leading-lg-xs md:leading-lg-md lg:leading-lg-lg xl:leading-lg-xl">
      <ul className="flex items-center justify-center lg:justify-start">
        <li>
          <a
            href="/mercury"
            className="uppercase mx-3-xs md:mx-3-md lg:mx-3-lg xl:mx-3-xl"
          >
            mercury
          </a>
        </li>
        <li>
          <a
            href="/venus"
            className="uppercase mx-3-xs md:mx-3-md lg:mx-3-lg xl:mx-3-xl"
          >
            venus
          </a>
        </li>
        <li>
          <a
            href="/earth"
            className="uppercase mx-3-xs md:mx-3-md lg:mx-3-lg xl:mx-3-xl"
          >
            earth
          </a>
        </li>
        <li>
          <a
            href="/mars"
            className="uppercase mx-3-xs md:mx-3-md lg:mx-3-lg xl:mx-3-xl"
          >
            mars
          </a>
        </li>
        <li>
          <a
            href="/jupiter"
            className="uppercase mx-3-xs md:mx-3-md lg:mx-3-lg xl:mx-3-xl"
          >
            jupiter
          </a>
        </li>
        <li>
          <a
            href="/saturn"
            className="uppercase mx-3-xs md:mx-3-md lg:mx-3-lg xl:mx-3-xl"
          >
            saturn
          </a>
        </li>
        <li>
          <a
            href="/uranus"
            className="uppercase mx-3-xs md:mx-3-md lg:mx-3-lg xl:mx-3-xl"
          >
            uranus
          </a>
        </li>
        <li>
          <a
            href="/neptune"
            className="uppercase mx-3-xs md:mx-3-md lg:mx-3-lg xl:mx-3-xl"
          >
            neptune
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
