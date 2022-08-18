import Header from './header';
import MessageBar from './messageBar';
import InputMessage from './inputMessage';
import { useSelector, useDispatch } from 'react-redux';
import { clearPushed } from '../../redux/messages';
import s from './Dialog.module.css';

const Dialog = () => {
  const current = useSelector(state => state.currentChat.current);
  const arrMessages = useSelector(state => state.messages.chat);
  const chat = arrMessages.find(el => el.id === current?.id);
  const dispatch = useDispatch();
  const handleClick = () => {
    if (chat?.pushed > 0) {
      dispatch(
        clearPushed({
          contactId: chat.id,
        }),
      );
    }
  };
  return (
    <div onClick={handleClick} className={s.wrapper}>
      {current ? (
        <>
          <Header />
          <MessageBar />
          <InputMessage />
        </>
      ) : (
        <div className={s.noDialog}>Select a chat to start a conversation</div>
      )}
    </div>
  );
};
export default Dialog;
