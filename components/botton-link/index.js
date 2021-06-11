import Link from 'next/link'

const ButtonLink = ({
  title = 'titulo',
  bgColor = 'bg-transparent',
  textColor = 'text-white',
  accountant = false,
  width,
  margin,
  disabled = false,
  href = '#',
  uppercase = false,
  lowercase = false,
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
        className={`${isDisabled} ${isLowercase} ${isUppercase} ${textColor} ${bgColor} block font-spartan border border-white border-opacity-30 hover:bg-grey-dark focus:bg-blue-own pl-7 md:pl-7-md lg:pl-7-lg xl:pl-7-xl py-4 md:py-4-md lg:py-4-lg xl:py-4-xl mb-4 md:mb-4-md lg:mb-4-lg xl:mb-4-xl text-sm md:text-sm-md lg:text-sm-lg xl:text-sm-xl leading-lg md:leading-lg-md lg:leading-lg-lg xl:leading-lg-xl`}
      >
        <span
          className={`${haveAccountant} mr-6 md:mr-6-md lg:mr-6-lg xl:mr-6-xl`}
        >
          {accountant}
        </span>
        <span className="font-bold">{title}</span>
      </a>
    </Link>
  )
}

export default ButtonLink
