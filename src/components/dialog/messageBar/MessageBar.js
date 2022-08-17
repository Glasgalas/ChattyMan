import { useSelector } from 'react-redux';
import s from './MessageBar.module.css';

const MessageBar = () => {
  const { id } = useSelector(state => state.currentChat.current);

  const arrMessages = useSelector(state => state.messages.chat);
  const chat = arrMessages.find(el => el.id === id);

  return (
    <div className={s.wrapper}>
      <ul className={s.list}>
        {chat?.messages.map(({ isFrom, text, dateLong, id }) => (
          <li className={isFrom ? s.messageItemFrom : s.messageItemTo} key={id}>
            {isFrom && <img className={s.avatar} src={chat.avatar} />}
            <div className={s.textWrap}>
              <p className={isFrom ? s.textFrom : s.textTo}>{text}</p>
              <p className={isFrom ? s.dateFrom : s.dateTo}>{dateLong}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default MessageBar;
