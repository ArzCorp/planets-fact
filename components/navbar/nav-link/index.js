import Link from 'next/link'

const NavLink = ({ title = 'title', href = '#' }) => {
  return (
    <li>
      <Link href={href}>
        <a className="uppercase mx-3-xs md:mx-3-md lg:mx-3-lg xl:mx-3-xl">
          {title}
        </a>
      </Link>
    </li>
  )
}

export default NavLink
