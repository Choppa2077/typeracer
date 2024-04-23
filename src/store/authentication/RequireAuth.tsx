import { useLocation, useNavigate } from 'react-router-dom';
// import { useAppSelector } from '../hooks';
import { Outlet } from 'react-router-dom';

const RequireAuth = () => {
  // const token = useAppSelector((state) => state.auth.token);
  const token = localStorage.getItem('token');
  const location = useLocation();
  const navigate = useNavigate();

  if (!token) {
    navigate('/login', { state: { from: location }, replace: true });
    // Return null or some placeholder while navigation is in progress
    return null;
  }

  return <Outlet />;
};

export default RequireAuth;


// import { useLocation, useNavigate } from 'react-router-dom';
// import { useAppSelector } from '../hooks';
// import { Outlet } from 'react-router-dom';

// const RequireAuth = () => {
//   const token = useAppSelector((state) => state.auth.token);
//   const location = useLocation();
//   const navigate = useNavigate();
//   return token ? (
//     <Outlet />
//   ) : (
//     navigate('/login', { state: { from: location }, replace: true })
//   );
// };

// export default RequireAuth;
