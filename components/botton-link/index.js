import Link from 'next/link'

const ButtonLink = ({
  title = 'titulo',
  textColor = 'text-white',
  accountant = false,
  width,
  margin,
  bgColor,
  disabled = false,
  href = '#',
  uppercase = false,
  lowercase = false,
  id,
  onClick = () => {},
}) => {
  const isDisabled = disabled ? 'pointer-events-none' : 'pointer-events-auto'
  const isUppercase = uppercase ? 'uppercase' : ''
  const isLowercase = lowercase ? 'lowercase' : ''
  const haveAccountant = accountant ? 'inline' : 'hidden'

  return (
    <Link
      href={href}
      style={{
        width: width,
        margin: margin,
      }}
    >
      <a
        className={`${isDisabled} ${isLowercase} ${isUppercase} hover:shadow-inner hover:scale-95 transition-all transform block font-spartan border-0 md:border text-center md:text-left border-white border-opacity-30 hover:bg-grey-dark focus:bg-blue-own pl-0 md:pl-5 lg:pl-7-lg xl:pl-7-xl py-4 md:py-2 lg:py-4-lg xl:py-4-xl mb-0 md:mb-4-md lg:mb-4-lg xl:mb-4-xl text-xs md:text-xs lg:text-sm-lg xl:text-sm-xl leading-lg md:leading-xl lg:leading-lg-lg xl:leading-lg-xl`}
        onClick={onClick}
        id={id}
        style={{ backgroundColor: bgColor }}
      >
        <span className={`${haveAccountant} pointer-events-none mr-0 md:mr-6`}>
          {accountant}
        </span>
        <span className="pointer-events-none font-bold">{title}</span>
      </a>
    </Link>
  )
}

export default ButtonLink
