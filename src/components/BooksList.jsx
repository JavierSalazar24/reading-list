export default function BooksList({ books, handleList, changeClass }) {
  return (
    <div className='lista-disponible-container'>
      {books.library.length > 0 ? (
        books.library.map((libro) => {
          return (
            <button
              onClick={() => handleList(libro)}
              key={libro.book.ISBN}
              className={`lista-disponible_libros ${changeClass(libro)}`}
            >
              <img
                className='lista-disponible_libros-img'
                src={libro.book.cover}
                alt={`Libro de ${libro.book.title}`}
              />
            </button>
          )
        })
      ) : (
        <p>No hay ningún libro para mostrar...</p>
      )}
    </div>
  )
}
