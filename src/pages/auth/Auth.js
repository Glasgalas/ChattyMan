import { useState } from 'react';
import PropagateLoader from 'react-spinners/PropagateLoader';
import s from './Auth.module.css';

const Auth = () => {
  const [isLoad, setLoad] = useState(false);
  const handleClick = () => {
    setLoad(true);
  };
  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Chatty-man</h1>
      <div className={s.authWrap}>
        <h2 className={s.login}>Log in to your account</h2>
        <a
          onClick={handleClick}
          className={s.link}
          href="https://chatty-man.herokuapp.com/api/users/google"
        >
          Auth with Google
        </a>
      </div>
      <PropagateLoader
        className={s.loader}
        color={'blue'}
        loading={isLoad}
        size={15}
      />
    </div>
  );
};
export default Auth;
