import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const RedirectRoute = ({ children }) => {
  const isLogged = useSelector(state => state.authUser.isLogged);
  return <>{isLogged ? <Navigate to="/main" replace /> : children}</>;
};
export default RedirectRoute;
