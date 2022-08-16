import s from './Search.module.css';

const Search = params => {
  return (
    <div className={s.search}>
      <input
        className={s.input}
        type="text"
        placeholder={'Search or start new chat'}
      ></input>
    </div>
  );
};
export default Search;
