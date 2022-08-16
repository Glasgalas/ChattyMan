import Contacts from '../../contacts';
import { useSelector } from 'react-redux';
import data from '../../../data.json';
import s from './ChatList.module.css';

const ChatList = () => {
  const filter = useSelector(state => state.filter.value);
  const filteredContacts = data.filter(contact =>
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
