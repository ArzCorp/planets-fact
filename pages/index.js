import Header from 'components/header'

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex justify-center items-center mb-5-xs md:mb-5-md lg:mb-5-lg xl:mb-5-xl">
        <h1 className="font-spartan text-center text-4xl-xl md:text-4xl-md lg:text-4xl-lg xl:text-4xl-xl">
          Welcome to{' '}
          <a
            href="https://nextjs.org"
            className="font-antonio md:text-grey-dark text-orange-own"
          >
            Next.js!
          </a>
        </h1>
      </main>
    </>
  )
}
