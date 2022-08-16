import Sidebar from '../../components/sidebar';
import s from './Main.module.css';

const Main = params => {
  return (
    <div className={s.wrapper}>
      <Sidebar />
    </div>
  );
};
export default Main;
