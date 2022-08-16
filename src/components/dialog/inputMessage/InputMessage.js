import s from './InputMessage.module.css';

const InputMessage = params => {
  return (
    <div className={s.wrapper}>
      <input className={s.input} type="text" placeholder="Type your message" />
    </div>
  );
};
export default InputMessage;
