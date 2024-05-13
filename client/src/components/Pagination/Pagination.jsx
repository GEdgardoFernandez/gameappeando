import style from './Pagination.module.css'

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <div className={style.container}>
      <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>Prev</button>
      <label htmlFor="" className={style.label}>{currentPage} of {totalPages}</label>
      <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
    </div>
  );
}
