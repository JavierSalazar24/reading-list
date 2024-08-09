export default function Filtros({ page, genre, handleGenre, handleRange }) {
  return (
    <form className='filtros'>
      <div className='filtro-pagina'>
        <label htmlFor='filtroPaginasInput'>
          Filtrar por página: de 0 a {page}
        </label>
        <br />
        <input
          step={50}
          min={0}
          max={2000}
          value={page}
          type='range'
          id='filtroPaginasInput'
          onChange={handleRange}
        />
      </div>

      <div className='filtro-genero'>
        <label htmlFor='filtroGeneroInput'>Filtrar por género</label>
        <br />
        <select
          id='filtroGeneroInput'
          onChange={handleGenre}
          defaultValue={genre}
        >
          <option value='Todos'>Todos</option>
          <option value='Fantasía'>Fantasía</option>
          <option value='Ciencia ficción'>Ciencia ficción</option>
          <option value='Zombies'>Zombies</option>
          <option value='Terror'>Terror</option>
        </select>
      </div>
    </form>
  )
}
