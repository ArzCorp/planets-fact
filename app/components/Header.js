import Navbar from './Navbar'

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 pt-4 pb-[26px] border-b border-white border-opacity-20">
      <h1 className="font-antonio text-logo">THE PLANETS</h1>
      <Navbar />
    </header>
  )
}
