import { useEffect, useState } from 'react'

export function useReading() {
  const [reading, setReading] = useState([])

  useEffect(() => {
    const lista = localStorage.getItem('lista')
    if (lista === null) localStorage.setItem('lista', JSON.stringify(reading))
    else setReading(JSON.parse(lista))

    return () => {
      localStorage.removeItem('lista')
    }
  }, [reading])

  const handleList = (libro) => {
    const query = reading.filter((lib) => lib.book.ISBN === libro.book.ISBN)
    if (query.length === 0) setReading((prevLectura) => [...prevLectura, libro])
  }

  const handleRemoveList = (libro) => {
    const newList = reading.filter((lib) => lib.book.ISBN !== libro.book.ISBN)
    setReading(newList)
  }

  const changeClass = (libro) => {
    const query = reading.filter((lib) => lib.book.ISBN === libro.book.ISBN)
    if (query.length === 1) return 'seleccionado'

    return ''
  }

  return { reading, handleList, handleRemoveList, changeClass }
}
