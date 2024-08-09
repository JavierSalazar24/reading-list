import './App.css'
import Filtros from './components/Filtros'
import BooksList from './components/BooksList'
import ReadingList from './components/ReadingList'
import { useBooks } from './hooks/useBooks'
import { useReading } from './hooks/useReading'

function App() {
  const { genre, page, books, handleRange, handleGenre } = useBooks()
  const { reading, handleList, handleRemoveList, changeClass } = useReading()
  return (
    <div className='container'>
      <section className='lista-disponible'>
        <header>
          <h2>{books.library.length} libro(s) disponible</h2>
          <p>{reading.length} en la lista de lectura</p>
        </header>
        <Filtros
          page={page}
          genre={genre}
          handleGenre={handleGenre}
          handleRange={handleRange}
        />
        <BooksList
          books={books}
          handleList={handleList}
          changeClass={changeClass}
        />
      </section>
      <ReadingList reading={reading} handleRemoveList={handleRemoveList} />
    </div>
  )
}

export default App
