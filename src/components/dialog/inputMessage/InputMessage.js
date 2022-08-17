import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useGetResponseQuery } from '../../../redux/chuck';
import { addMessage } from '../../../redux/messages';
import { v4 } from 'uuid';
import { MdOutlineSend } from 'react-icons/md';
import s from './InputMessage.module.css';

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
        date: Date.now(),
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
        date: Date.now(),
      }),
    );
  }
  const handleSubmit = () => {
    if (value) {
      submitFrom();
      setValue('');
      handleRefetchOne();
      setTimeout(submitTo, 10000);
    }
  };
  const handleSubmitOnKey = e => {
    if (value) {
      if (e.key === 'Enter') {
        submitFrom();
        setValue('');
        handleRefetchOne();
        setTimeout(submitTo, 10000);
      }
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

      <MdOutlineSend
        aria-label="submit message"
        className={s.button}
        type="submit"
        onClick={handleSubmit}
      />
    </div>
  );
};
export default InputMessage;
