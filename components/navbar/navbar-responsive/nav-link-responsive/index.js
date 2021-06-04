import Link from 'next/link'

const NavLinkResponsive = ({
  title = 'title',
  dotColor = '#979797',
  href = '#',
}) => {
  return (
    <li className="flex items-center justify-between w-10/12 mx-auto border-b py-5 border-grey-light">
      <div className="flex items-center">
        <span
          className="mr-5 block text-transparent h-5 w-5 rounded-full"
          style={{
            backgroundColor: dotColor,
          }}
        />
        <Link href={href}>
          <a
            className="uppercase mx-3-xs md:mx-3-md lg:mx-3-lg xl:mx-3-xl"
            href="/mercury"
          >
            {title}
          </a>
        </Link>
      </div>
      <div>
        <i
          className="block fas fa-angle-right text-md"
          style={{ color: '#D8D8D8' }}
          aria-hidden
        />
      </div>
    </li>
  )
}

export default NavLinkResponsive
