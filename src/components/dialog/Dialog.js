import Header from './header';
import MessageBar from './messageBar';
import InputMessage from './inputMessage';
import { useSelector } from 'react-redux';
import s from './Dialog.module.css';

const Dialog = () => {
  const current = useSelector(state => state.currentChat.current);
  return (
    <div className={s.wrapper}>
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
