import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const RedirectRoute = ({ children }) => {
  // const isLogged = true;
  const isLogged = useSelector(state => state.auth.isLogged);
  return <>{isLogged ? <Navigate to="/main" replace /> : children}</>;
};
export default RedirectRoute;
