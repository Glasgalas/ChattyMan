import { useDispatch } from 'react-redux';
import { setCurrentChat } from '../../redux/currentChat';
import s from './Contacts.module.css';

const Contacts = ({ data }) => {
  const dispatch = useDispatch();
  const handleClick = e => {
    const contactId = e.currentTarget.id;
    const contact = data.find(el => el.id === contactId);
    dispatch(setCurrentChat(contact));
  };
  return (
    <div className={s.wrapper}>
      <ul className={s.list}>
        {data
          .sort((a, b) => a.dateLong - b.dateLong)
          .map(el => (
            <li
              key={el.id}
              id={el.id}
              className={s.listItem}
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
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Contacts;
