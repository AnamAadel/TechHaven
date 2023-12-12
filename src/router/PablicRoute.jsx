import PropTypes from 'prop-types';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContexts } from '../components/context/AuthContext';

function PablicRoute({ children }) {
  const { user } = AuthContexts();
  const location = useLocation()

  return (
    <div>
      {!user && children}
      {user && <Navigate to="/" state={location.pathname} />}
    </div>
  );
}

PablicRoute.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.node,
    
  ]).isRequired,
};

export default PablicRoute;
