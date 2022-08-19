import { useDispatch } from 'react-redux';
import { setFilter } from '../../../redux/filter';
import { MdOutlineSearch } from 'react-icons/md';
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
      <MdOutlineSearch className={s.searchIcon} />
    </div>
  );
};
export default Search;
