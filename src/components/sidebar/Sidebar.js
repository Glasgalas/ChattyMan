import Header from './header';
import Search from './search';
import ChatList from './chatList';
import s from './Sidebar.module.css';

const Sidebar = params => {
  return (
    <div className={s.wrapper}>
      <Header />
      <Search />
      <ChatList />
    </div>
  );
};
export default Sidebar;
