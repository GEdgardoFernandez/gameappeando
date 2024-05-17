import style from './Loading.module.css'
const Loading = () => {
  return (
    <div class="loader">
      <div data-glitch="Loading..." className={style.glitch}>
        Loading...
      </div>
    </div>
  );
};

export default Loading;
