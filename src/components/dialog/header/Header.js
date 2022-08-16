import { useSelector } from 'react-redux';
import s from './Header.module.css';

const Header = () => {
  const value = useSelector(state => state.currentChat);
  // console.log(value);
  return (
    <div className={s.header}>
      {value.current && (
        <>
          <img
            className={s.avatar}
            alt="users avatar"
            src={value.current.avatar}
          />
          <p>{value.current.name}</p>
        </>
      )}
    </div>
  );
};
export default Header;
