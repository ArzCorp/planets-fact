import { useEffect, useState } from 'react'

const Loader = () => {
  const [headerSize, setHeaderSize] = useState()
  const [loaderSize, setLoaderSize] = useState()

  useEffect(() => {
    const header = document.querySelector('#header')
    setHeaderSize(header.offsetHeight)
  }, [])

  useEffect(() => {
    if (window.screen.width <= 320) {
      setLoaderSize('150')
    } else {
      setLoaderSize('250')
    }
  }, [])

  return (
    <div
      className="flex justify-center items-center"
      style={{ minHeight: `calc(100vh - ${headerSize}px)` }}
    >
      <i
        className="fas fa-globe-americas text-white m-auto text-center animate-spin"
        style={{ fontSize: `${loaderSize}px`, animationDuration: '5s' }}
      ></i>
    </div>
  )
}

export default Loader
