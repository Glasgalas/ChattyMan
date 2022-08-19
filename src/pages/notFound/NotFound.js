import s from './NotFound.module.css';

const NotFound = () => {
  return (
    <div className={s.wrapper}>
      <img alt="logo site" src="./logo256.png" width="256" />
      <h1 className={s.title}>404</h1>
      <h2 className={s.login}>Page not found</h2>
      <a href="/main" className={s.link}>
        Back to main
      </a>
    </div>
  );
};
export default NotFound;
