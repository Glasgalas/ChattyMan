import Sidebar from '../../components/sidebar';
import Dialog from '../../components/dialog';
import s from './Main.module.css';

const Main = () => {
  return (
    <div className={s.wrapper}>
      <Sidebar />
      <Dialog />
    </div>
  );
};
export default Main;
