import style from './Pagination.module.css'

export default function Pagination({ gamesPerPage, allVideoGames, onPageChange }) {
  let pageNumber = [];
  let page = Math.ceil(allVideoGames / gamesPerPage);
  for (let i = 0; i < page; i++) {
    pageNumber = [];
  }
  let currentPage = 1;
  return (
    <div className={style.container}>
      <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>Prev</button>
      <label htmlFor="" className={style.label}>{currentPage} of {pageNumber.length}</label>
      <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === pageNumber.length}>Next</button>
    </div>
  );
}
