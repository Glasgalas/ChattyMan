import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useGetUserQuery, setUser } from '../../redux/auth';
import s from './GoogleAuth.module.css';

const GoogleAuth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const email = searchParams.get('email');
  const { isSuccess, data = [] } = useGetUserQuery(email);

  useEffect(() => {
    if (isSuccess) {
      const { token, user, messages } = data.data;
      navigate('/main', { replace: true });
      dispatch(
        setUser({
          name: user.name,
          email: user.email,
          token,
          avatar: user.avatar,
          messages,
        }),
      );
    }
  });

  return (
    <>
      <p className={s.text}>Google auth...</p>
    </>
  );
};
export default GoogleAuth;
