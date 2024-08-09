import { useState } from 'react'
import booksJson from '../books.json'

export function useBooks() {
  const [genre, setGenre] = useState('Todos')
  const [page, setPage] = useState(2000)
  const [books, setBooks] = useState(booksJson)

  const handleRange = (e) => {
    const countPage = e.target.value
    setPage(countPage)

    handleFiltros(genre, countPage)
  }

  const handleGenre = (e) => {
    const genreData = e.target.value
    setGenre(genreData)

    handleFiltros(genreData, page)
  }

  const handleFiltros = (genre, range) => {
    let filteredBooks = booksJson.library

    if (genre !== 'Todos') {
      filteredBooks = filteredBooks.filter(
        (lib) => lib.book.genre === genre && lib.book.pages <= range
      )
    } else {
      filteredBooks = filteredBooks.filter((lib) => lib.book.pages <= range)
    }

    setBooks({ library: filteredBooks })
  }

  return { genre, page, books, handleRange, handleGenre }
}
