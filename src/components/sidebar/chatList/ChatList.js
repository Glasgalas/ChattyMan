import s from './ChatList.module.css';

const ChatList = params => {
  return (
    <div className={s.wrapper}>
      <div className={s.title}>
        <p>Chats</p>
      </div>

      <ul className={s.list}>
        <li className={s.listItem}>Alice</li>
        <li className={s.listItem}>Josefina</li>
        <li className={s.listItem}>John</li>
        {/* <li className={s.listItem}>Alice</li>
        <li className={s.listItem}>Josefina</li>
        <li className={s.listItem}>John</li>
        <li className={s.listItem}>Alice</li>
        <li className={s.listItem}>Josefina</li>
        <li className={s.listItem}>John</li>
        <li className={s.listItem}>Alice</li>
        <li className={s.listItem}>Josefina</li>
        <li className={s.listItem}>John</li>
        <li className={s.listItem}>Alice</li>
        <li className={s.listItem}>Josefina</li>
        <li className={s.listItem}>John</li>
        <li className={s.listItem}>Alice</li>
        <li className={s.listItem}>Josefina</li>
        <li className={s.listItem}>John</li>{' '}
        <li className={s.listItem}>Alice</li>
        <li className={s.listItem}>Josefina</li>
        <li className={s.listItem}>John</li>
        <li className={s.listItem}>Alice</li>
        <li className={s.listItem}>Josefina</li>
        <li className={s.listItem}>John</li>
        <li className={s.listItem}>Alice</li>
        <li className={s.listItem}>Josefina</li>
        <li className={s.listItem}>John</li>
        <li className={s.listItem}>Alice</li>
        <li className={s.listItem}>Josefina</li>
        <li className={s.listItem}>John</li>
        <li className={s.listItem}>Alice</li>
        <li className={s.listItem}>Josefina</li>
        <li className={s.listItem}>John</li> */}
      </ul>
    </div>
  );
};
export default ChatList;
