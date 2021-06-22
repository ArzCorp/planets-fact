import Link from 'next/link'

const NavLink = ({
  title = 'title',
  href = '#',
  id,
  className = '',
  onClick = () => {},
}) => {
  return (
    <li>
      <Link href={href}>
        <a
          className={`${className} uppercase mx-3-xs md:mx-3-md lg:mx-3-lg xl:mx-3-xl`}
          id={id}
          onClick={onClick}
        >
          {title}
        </a>
      </Link>
    </li>
  )
}

export default NavLink
