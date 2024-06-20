import style from './Pagination.module.css'

export default function Pagination({ gamesPerPage, totalGames, paginate, currentPage }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalGames / gamesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className={style.pagination}>
        <li>
          <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} className={style.btn}>
            Previous
          </button>
        </li>
        {pageNumbers.map(number => (
          <li key={number} className={currentPage === number ? style.active : ''}>
            <button onClick={() => paginate(number)} className={style.btn}>
              {number}
            </button>
          </li>
        ))}
        <li>
          <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === pageNumbers.length} className={style.btn}>
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
}
