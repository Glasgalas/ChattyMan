import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useGetUserQuery, setUser } from '../../redux/auth';
// import authOperations from '../../redux/auth/authOperations';
// import { Spinner } from '../spinner/spinner';
import s from './GoogleAuth.module.css';

const GoogleAuth = () => {
  const { isLogged } = useSelector(state => state.auth);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const email = searchParams.get('email');

  const { isSuccess } = useGetUserQuery(email);
  console.log(useGetUserQuery(email));
  console.log(isSuccess);
  // console.log(getUser(email));
  // const { isSuccess, isError } = data;

  useEffect(() => {
    if (isSuccess) {
      dispatch(setUser());
      navigate('/main', { replace: true });
    }
  }, [navigate]);

  // useEffect(() => {
  //   if (!isLogged) {
  //     getUser(email);
  //   }
  // }, [dispatch, email]);

  return (
    <>
      <p className={s.text}>Google auth...</p>
    </>
  );
};
export default GoogleAuth;
