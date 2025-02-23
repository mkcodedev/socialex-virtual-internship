// import { useEffect } from 'react';

// const AuthProtector =  ({ children }) => {

//   useEffect(() => {

//     if (!localStorage.getItem('userToken')) {
//       window.location.href = '/landing';
//     }
//   }, [localStorage]);


//   return children;
// };

// export default AuthProtector;
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthProtector = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('userToken')) {
      navigate('/landing'); // Redirect without full page reload
    }
  }, []); // Empty dependency array to run only on mount

  return children;
};

export default AuthProtector;
