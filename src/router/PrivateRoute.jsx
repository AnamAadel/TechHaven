import PropTypes from 'prop-types';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContexts } from '../components/context/AuthContext';

function PrivateRoute({children}) {
    const {user} = AuthContexts();
    const location = useLocation()
    console.log(location);
  // return (
  //   <>
        
  //   </>
  // )
  if(user?.email){
    return <div>{children}</div>
  }
  // user && return;
  return <Navigate to="/login" state={location.pathname} replace></Navigate>
  // if(!user){
  // }
  // !user && return 
}

PrivateRoute.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.node,
  ]).isRequired,
};

export default PrivateRoute