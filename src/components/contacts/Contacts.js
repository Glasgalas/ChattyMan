import { useDispatch, useSelector } from 'react-redux';
import { setCurrentChat } from '../../redux/currentChat';
import { clearPushed } from '../../redux/messages';
import s from './Contacts.module.css';

const Contacts = ({ data }) => {
  const current = useSelector(state => state.currentChat.current);
  const dispatch = useDispatch();
  const handleClick = e => {
    const contactId = e.currentTarget.id;
    const contact = data.find(el => el.id === contactId);
    dispatch(setCurrentChat(contact));
    if (contact.pushed > 0) {
      dispatch(
        clearPushed({
          contactId: contact.id,
        }),
      );
    }
  };
  return (
    <div className={s.wrapper}>
      <ul className={s.list}>
        {data
          .sort(
            (a, b) =>
              b.messages[b.messages.length - 1].date -
              a.messages[a.messages.length - 1].date,
          )
          .map(el => (
            <li
              key={el.id}
              id={el.id}
              className={
                el.id === current?.id ? `${s.listItem} ${s.active}` : s.listItem
              }
              onClick={handleClick}
            >
              <div className={s.avatarWrapper}>
                <img
                  className={s.avatar}
                  alt="contacts avatar"
                  src={el.avatar}
                />
              </div>
              <div className={s.textWrapper}>
                <p className={s.contactName}>{el.name}</p>
                <div className={s.messageWrapper}>
                  <p className={s.contactMessage}>
                    {el.messages[el.messages.length - 1].text}
                  </p>
                </div>
              </div>
              <div className={s.dateWrapper}>
                <p className={s.date}>
                  {el.messages[el.messages.length - 1].dateShort}
                </p>
                {el.pushed > 0 && <div className={s.pushed}>{el.pushed}</div>}
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Contacts;
