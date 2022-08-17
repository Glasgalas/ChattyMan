import s from './Auth.module.css';

const Auth = () => {
  return (
    <div className={s.wrapper}>
      <a
        className={s.link}
        href="https://chatty-man.herokuapp.com/api/users/google"
      >
        Click me to authorize with Google!
      </a>
    </div>
  );
};
export default Auth;
