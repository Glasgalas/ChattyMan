import Contacts from '../../contacts';
import { useSelector } from 'react-redux';
import s from './ChatList.module.css';

const ChatList = () => {
  const filter = useSelector(state => state.filter.value);
  const messages = useSelector(state => state.messages.chat);

  const filteredContacts = messages.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );
  return (
    <div className={s.wrapper}>
      <div className={s.title}>
        <p className={s.titleText}>Chats</p>
      </div>
      <Contacts data={filteredContacts} />
    </div>
  );
};
export default ChatList;
