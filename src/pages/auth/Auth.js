import s from './Auth.module.css';

const Auth = () => {
  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Chatty-man</h1>
      <div className={s.authWrap}>
        <h2 className={s.login}>Log in to your account</h2>
        <a
          className={s.link}
          href="https://chatty-man.herokuapp.com/api/users/google"
        >
          Auth with Google
        </a>
      </div>
    </div>
  );
};
export default Auth;
