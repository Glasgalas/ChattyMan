import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentChat } from '../../../redux/currentChat';
import { clearFilter } from '../../../redux/filter';
import Media from 'react-media';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import s from './Header.module.css';

const Header = () => {
  const dispatch = useDispatch();
  const handleBack = () => {
    dispatch(setCurrentChat(null));
    dispatch(clearFilter());
  };
  const value = useSelector(state => state.currentChat);
  return (
    <div className={s.header}>
      {value.current && (
        <>
          <Media
            queries={{
              mobile: '(max-width: 667px)',
            }}
          >
            {matches => (
              <Fragment>
                {matches.mobile && (
                  <div className={s.btnBack} onClick={handleBack}>
                    <MdOutlineArrowBackIosNew aria-label="back button" />
                  </div>
                )}
              </Fragment>
            )}
          </Media>
          <img
            className={s.avatar}
            alt="users avatar"
            src={value.current.avatar}
          />
          <p>{value.current.name}</p>
        </>
      )}
    </div>
  );
};
export default Header;
