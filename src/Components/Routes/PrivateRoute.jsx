import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { authSelectors } from 'redux/auth';

export default function PrivateRoute({ children, ...props }) {
  const IsLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Route {...props}>{IsLoggedIn ? children : <Redirect to="/" />}</Route>
  );
}
