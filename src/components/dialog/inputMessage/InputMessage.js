import { MdOutlineSend } from 'react-icons/md';
import s from './InputMessage.module.css';

const InputMessage = () => {
  // 4/22/17, 4:00AM
  //  Jun 12, 2022
  function transformDateForMessage() {
    const todayDate = new Date().toISOString();
    let amPm = todayDate.slice(11, 13) < 12 ? 'AM' : 'PM';
    return `${todayDate.slice(5, 7)}/${todayDate.slice(
      8,
      10,
    )}/${todayDate.slice(2, 4)}, ${todayDate.slice(11, 16)}${amPm}`;
  }

  function transformDate() {
    const today = new Date().toString();
    return `${today.slice(4, 10)}, ${today.slice(11, 16)}`;
  }
  const currentDate = transformDate();
  const currentDateForMessage = transformDateForMessage();

  return (
    <div className={s.wrapper}>
      <input className={s.input} type="text" placeholder="Type your message" />
    </div>
  );
};
export default InputMessage;
