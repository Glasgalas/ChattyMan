import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useGetUserQuery, setUser } from '../../redux/auth';
import PropagateLoader from 'react-spinners/PropagateLoader';
import s from './GoogleAuth.module.css';

const GoogleAuth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const email = searchParams.get('email');
  const { isSuccess, isLoading, data = [] } = useGetUserQuery(email);

  useEffect(() => {
    if (isSuccess) {
      const { token, user } = data.data;
      navigate('/main', { replace: true });
      dispatch(
        setUser({
          name: user.name,
          email: user.email,
          token,
          avatar: user.avatar,
        }),
      );
    }
  });

  return (
    <div className={s.wrapper}>
      <p className={s.text}>Google auth...</p>
      <PropagateLoader
        className={s.loader}
        color={'blue'}
        loading={isLoading}
        size={15}
      />
    </div>
  );
};

export default GoogleAuth;
