import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import s from './InputMessage.module.css';
import { useGetResponseQuery } from '../../../redux/chuck';
import { addMessage } from '../../../redux/messages';
import { v4 } from 'uuid';

const InputMessage = params => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const { id } = useSelector(state => state.currentChat.current);
  const { data = [], refetch } = useGetResponseQuery();
  function handleRefetchOne() {
    refetch();
  }
  function transformDateLong() {
    // 4/22/17, 4:00AM
    const currentDate = new Date().toISOString();
    const currentTime = new Date().toString();
    return `${currentDate.slice(5, 7)}/${currentDate.slice(
      8,
      10,
    )}/${currentDate.slice(2, 4)}, ${currentTime.slice(16, 21)}`;
  }
  function transformDateShort() {
    //  Jun 12, 2022
    const today = new Date().toString();
    return `${today.slice(4, 10)}, ${today.slice(11, 15)}`;
  }
  function submitFrom() {
    dispatch(
      addMessage({
        id: v4(),
        contactId: id,
        isFrom: false,
        dateLong: transformDateLong(),
        dateShort: transformDateShort(),
        text: value,
      }),
    );
  }
  function submitTo() {
    dispatch(
      addMessage({
        id: v4(),
        contactId: id,
        isFrom: true,
        dateLong: transformDateLong(),
        dateShort: transformDateShort(),
        text: data.value,
      }),
    );
  }
  const handleSubmit = () => {
    submitFrom();
    setValue('');
    handleRefetchOne();
    setTimeout(submitTo, 3000);
  };

  const handleSubmitOnKey = e => {
    if (e.key === 'Enter') {
      submitFrom();
      setValue('');
      handleRefetchOne();
      setTimeout(submitTo, 3000);
    }
  };
  return (
    <div className={s.wrapper}>
      <input
        value={value}
        className={s.input}
        type="text"
        placeholder="Type your message"
        onChange={e => setValue(e.target.value)}
        onKeyPress={handleSubmitOnKey}
      />
      <button type="submit" onClick={handleSubmit}>
        Send
      </button>
    </div>
  );
};
export default InputMessage;
