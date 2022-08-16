import { useDispatch } from 'react-redux';
import { setFilter } from '../../../redux/filter';
import s from './Search.module.css';

const Search = () => {
  const dispatch = useDispatch();
  return (
    <div className={s.search}>
      <input
        className={s.input}
        type="text"
        placeholder={'Search or start new chat'}
        onChange={e => dispatch(setFilter(e.target.value))}
      />
    </div>
  );
};
export default Search;
