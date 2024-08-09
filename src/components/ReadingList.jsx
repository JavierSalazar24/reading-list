export default function ReadingList({ reading, handleRemoveList }) {
  return (
    <main className='lista-lectura'>
      <h2>Lista de lectura</h2>
      <div className='lista-lectura-container'>
        {reading.length > 0 ? (
          reading.map((libro) => {
            return (
              <div key={libro.book.ISBN} className='lista-lectura_libros'>
                <button
                  onClick={() => handleRemoveList(libro)}
                  className='boton-borrar'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='25'
                    height='25'
                    fill='#ff0000'
                    viewBox='0 0 16 16'
                  >
                    <path d='M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708' />
                  </svg>
                </button>
                <img
                  className='lista-lectura_libros-img'
                  src={libro.book.cover}
                  alt={`Libro de ${libro.book.title}`}
                />
              </div>
            )
          })
        ) : (
          <p>No hay ningún libro aún...</p>
        )}
      </div>
    </main>
  )
}
