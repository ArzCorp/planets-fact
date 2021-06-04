import NavbarResponsive from 'components/navbar/navbar-responsive'
import Navbar from '../navbar'

const Header = () => {
  return (
    <header
      id="header"
      className="text-white bg-dark text-center lg:text-right flex md:block lg:flex justify-between items-center border border-grey-light py-4 md:py-8-md lg:py-5-lg xl:py-5-xl"
    >
      <div className="font-antonio mb-0 md:mb-8-md lg:mb-0 text-xl md:text-xl-md lg:text-xl-lg xl:text-xl-xl leading-3xl md:leading-3xl-md lg:leading-3xl-lg xl:leading-3xl-xl">
        <h1>THE PLANETS</h1>
      </div>
      <Navbar />
      <NavbarResponsive />
    </header>
  )
}

export default Header
