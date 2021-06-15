import NavbarResponsive from 'components/navbar/navbar-responsive'
import Navbar from '../navbar'

const Header = () => {
  return (
    <header
      id="header"
      className="text-white bg-dark text-center lg:text-right border-b border-grey-light pt-6 pb-7"
    >
      <div className="w-11/12 mx-auto flex md:block lg:flex justify-between items-center">
        <div className="font-antonio mb-0 md:mb-10 lg:mb-0 text-xl leading-3xl">
          <h1>THE PLANETS</h1>
        </div>
        <Navbar />
        <NavbarResponsive />
      </div>
    </header>
  )
}

export default Header
