import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import Sidebar from '../../components/sidebar';
import Dialog from '../../components/dialog';
import Media from 'react-media';
import s from './Main.module.css';

const Main = () => {
  const current = useSelector(state => state.currentChat.current);
  return (
    <div className={s.wrapper}>
      <Media
        queries={{
          mobile: '(max-width: 667px)',
          tablet: '(min-width: 668px) and (max-width: 1079px)',
          desktop: '(min-width: 1080px)',
        }}
      >
        {matches => (
          <Fragment>
            {matches.mobile && (
              <div className={s.wrapperMobile}>
                {current ? <Dialog /> : <Sidebar />}
              </div>
            )}
            {matches.tablet && (
              <>
                <div className={s.sidebarTablet}>
                  <Sidebar />
                </div>
                <div className={s.dialogTablet}>
                  <Dialog />
                </div>
              </>
            )}
            {matches.desktop && (
              <>
                <div className={s.sidebarTablet}>
                  <Sidebar />
                </div>
                <div className={s.dialogTablet}>
                  <Dialog />
                </div>
              </>
            )}
          </Fragment>
        )}
      </Media>
    </div>
  );
};
export default Main;
