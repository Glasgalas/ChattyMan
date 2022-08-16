import { useSelector } from 'react-redux';
import s from './MessageBar.module.css';

const MessageBar = () => {
  const value = useSelector(state => state.currentChat.current);
  console.log(value);
  return (
    <div className={s.wrapper}>
      <ul className={s.list}>
        {value?.messages.map(({ isFrom, text, date, id }) => (
          <li className={isFrom ? s.messageItemFrom : s.messageItemTo} key={id}>
            {isFrom && <img className={s.avatar} src={value.avatar} />}
            <div className={s.textWrap}>
              <p className={isFrom ? s.textFrom : s.textTo}>{text}</p>
              <p className={isFrom ? s.dateFrom : s.dateTo}>{date}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default MessageBar;
