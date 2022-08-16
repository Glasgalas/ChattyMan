import s from './ChatList.module.css';
import Contacts from '../../contacts';

const ChatList = params => {
  return (
    <div className={s.wrapper}>
      <div className={s.title}>
        <p className={s.titleText}>Chats</p>
      </div>
      <Contacts />
    </div>
  );
};
export default ChatList;
