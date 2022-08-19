import { useSelector } from 'react-redux';
import s from './Header.module.css';

const Header = () => {
  const { name, avatar } = useSelector(state => state.authUser);
  const defaultAvatar =
    'https://upload.wikimedia.org/wikipedia/commons/1/1e/Default-avatar.jpg';
  return (
    <div className={s.header}>
      <img
        className={s.avatar}
        alt="user avatar"
        src={avatar ? avatar : defaultAvatar}
      />
      <p className={s.name}>{name}</p>
    </div>
  );
};
export default Header;
