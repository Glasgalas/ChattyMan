import Header from './header';
import MessageBar from './messageBar';
import InputMessage from './inputMessage';
import s from './Dialog.module.css';

const Dialog = () => {
  return (
    <div className={s.wrapper}>
      <Header />
      <MessageBar />
      <InputMessage />
    </div>
  );
};
export default Dialog;
