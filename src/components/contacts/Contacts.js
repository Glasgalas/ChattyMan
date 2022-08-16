import s from './Contacts.module.css';
import data from '../../data.json';

const Contacts = params => {
  return (
    <div className={s.wrapper}>
      <ul className={s.list}>
        {data.map(el => (
          <li className={s.listItem}>
            <div className={s.avatarWrapper}>
              <img className={s.avatar} alt="contacts avatar" src={el.avatar} />
            </div>
            <div className={s.textWrapper}>
              <p className={s.contactName}>{el.name}</p>
              <div className={s.messageWrapper}>
                <p className={s.contactMessage}>{el.message}</p>
              </div>
            </div>
            <div className={s.dateWrapper}>
              <p className={s.date}>Jun 17, 2022</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contacts;
