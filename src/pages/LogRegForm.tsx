// LogRegForm.tsx
import { useState } from 'react';
import { Box, TextField, Button, Typography, CircularProgress } from '@mui/material';
import { useLogin } from './Login/useLogin';
import { useRegister } from './Register/useRegister';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import yupValidation from '../components/core/yupValidation';
import LoginIcon from '@mui/icons-material/Login';
import { HowToReg } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { snackbar, setSnackbarMessage } from '../redux/slices/ToogleSlice';
import '../styles/App.css';

interface LogRegFormProps {
  setOpenModal: (open: boolean) => void;
  setUserName: (name: string) => void;
}

const LogRegForm = ({ setOpenModal, setUserName }: LogRegFormProps) => {
  const [isLogin, setIsLogin] = useState(true);
  const dispatch = useDispatch();

  const { handleLogin, loading: loginLoading, error: loginError } = useLogin();
  const { handleRegister, loading: registerLoading, error: registerError } = useRegister();
  const { loginValidationSchema, registerValidationSchema } = yupValidation();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (values: { email: string; password: string; username: string }, { resetForm }: any) => {
    if (isLogin) {
      handleLogin(values.email, values.password)
        .then((value) => {
          console.log(value);
          if (value && value.token) {
            setUserName(value.name);
            dispatch(setSnackbarMessage('Login successful!'));
            dispatch(snackbar(true));
            resetForm();
            setTimeout(() => {
              setOpenModal(false);
            }, 1000);
          } else {
            dispatch(setSnackbarMessage('Login failed. Incorrect email or password.'));
            dispatch(snackbar(true));
          }
        })
        .catch(() => {
          dispatch(setSnackbarMessage('Login failed. Please try again.'));
          dispatch(snackbar(true));
        });
    } else {
      handleRegister(values.username, values.email, values.password)
        .then((value) => {
          if (value && values) {
            dispatch(setSnackbarMessage('Registration successful!'));
            dispatch(snackbar(true));
            resetForm();
            setTimeout(() => {
              setIsLogin(true);
            }, 2000);
          } else {
            dispatch(setSnackbarMessage('Registration failed. Please try again.'));
            dispatch(snackbar(true));
          }
        })
        .catch(() => {
          dispatch(setSnackbarMessage('Registration failed. User already exists.'));
          dispatch(snackbar(true));
        });
    }
  };

  return (
    <Box sx={{ textAlign: 'center', maxWidth: 400, mx: 'auto', p: 3, marginBottom: '100px' }}>
      <Typography variant="h5" fontWeight="bold">
        {isLogin ? 'User Login' : 'Create an Account'}
      </Typography>

      <Formik
        initialValues={{
          email: '',
          password: '',
          username: ''
        }}
        validationSchema={isLogin ? loginValidationSchema : registerValidationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            {!isLogin && (
              <div>
                <Field name="username" as={TextField} label="Username" fullWidth sx={{ my: 2 }} />
                <ErrorMessage name="username" component="div" className="errormsg" />
              </div>
            )}

            <div>
              <Field name="email" as={TextField} label="Email" type="email" fullWidth sx={{ my: 2 }} />
              <ErrorMessage name="email" component="div" className="errormsg" />
            </div>

            <div>
              <Field name="password" as={TextField} label="Password" type="password" fullWidth sx={{ my: 2 }} />
              <ErrorMessage name="password" component="div" className="errormsg" />
            </div>

            {isLogin
              ? loginError && (
                  <Typography color="error" sx={{ my: 1 }}>
                    {loginError}
                  </Typography>
                )
              : registerError && (
                  <Typography color="error" sx={{ my: 1 }}>
                    {registerError}
                  </Typography>
                )}

            <Button
              variant="contained"
              color="success"
              fullWidth
              type="submit"
              sx={{ mt: 2 }}
              endIcon={isLogin ? <LoginIcon /> : <HowToReg />}
            >
              {isLogin ? (
                loginLoading ? (
                  <CircularProgress size={20} color="inherit" />
                ) : (
                  'Login'
                )
              ) : registerLoading ? (
                <CircularProgress size={20} color="inherit" />
              ) : (
                'Sign Up'
              )}
            </Button>
          </Form>
        )}
      </Formik>

      <Typography sx={{ mt: 2 }}>
        {isLogin ? "Don't have an account?" : 'Already have an account? '}
        <Button onClick={() => setIsLogin(!isLogin)} sx={{ textDecoration: 'none', color: '#1e88e5' }}>
          {isLogin ? 'Sign Up' : 'Login'}
        </Button>
      </Typography>
    </Box>
  );
};

export default LogRegForm;

// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { useState } from 'react';
// import { Box, TextField, Button, Typography, CircularProgress, Snackbar, SnackbarCloseReason } from '@mui/material';
// import { useLogin } from './Login/useLogin';
// import { useRegister } from './Register/useRegister';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import yupValidation from '../components/core/yupValidation';
// import LoginIcon from '@mui/icons-material/Login';
// import { HowToReg } from '@mui/icons-material';
// import '../styles/App.css';
// import { useAppDispatch, useAppSelector } from '../redux/hooks';
// import { loggedIn, snackbar } from '../redux/slices/ToogleSlice';

// interface LogRegFormProps {
//   setOpenModal: (open: boolean) => void;
//   setUserName: (name: string) => void;
// }

// const LogRegForm = ({ setOpenModal, setUserName }: LogRegFormProps) => {
//   const logging = useAppSelector((state) => state.mode.isLogin);
//   const snack = useAppSelector((state) => state.mode.snackBar);
//   const dispatch = useAppDispatch();

//   const [snackbarMessage, setSnackbarMessage] = useState('');

//   const { handleLogin, loading: loginLoading, error: loginError } = useLogin();
//   const { handleRegister, loading: registerLoading, error: registerError } = useRegister();
//   const { loginValidationSchema, registerValidationSchema } = yupValidation();

//   const handleSubmit = (values: { email: string; password: string; username: string }, { resetForm }: any) => {
//     if (logging) {
//       handleLogin(values.email, values.password)
//         .then((value) => {
//           console.log(value);
//           if (value && value.token) {
//             setUserName(value.name);
//             setSnackbarMessage('Login successful!');
//             dispatch(snackbar(true));
//             resetForm();
//             setTimeout(() => {
//               setOpenModal(false);
//             }, 1000);
//           } else {
//             setSnackbarMessage('Login failed. Incorrect email or password.');
//             dispatch(snackbar(true));
//           }
//         })
//         .catch(() => {
//           setSnackbarMessage('Login failed. Please try again.');
//           dispatch(snackbar(true));
//         });
//     } else {
//       handleRegister(values.username, values.email, values.password)
//         .then((value) => {
//           if (value && values) {
//             setSnackbarMessage('Registration successful!');
//             dispatch(snackbar(true));
//             resetForm();
//             setTimeout(() => {
//               dispatch(loggedIn(true));
//             }, 2000);
//           } else {
//             setSnackbarMessage('Registration failed. Please try again.');
//             dispatch(snackbar(true));
//           }
//         })
//         .catch(() => {
//           setSnackbarMessage('Registration failed. User already exists.');
//           dispatch(snackbar(true));
//         });
//     }
//   };

//   const handleCloseSnackbar = (_event: React.SyntheticEvent | Event, reason?: SnackbarCloseReason) => {
//     if (reason === 'clickaway') {
//       return;
//     }
//     dispatch(snackbar(false));
//   };

//   return (
//     <Box sx={{ textAlign: 'center', maxWidth: 400, mx: 'auto', p: 3, marginBottom: '100px' }}>
//       <Typography variant="h5" fontWeight="bold">
//         {logging ? 'User Login' : 'Create an Account'}
//       </Typography>

//       <Formik
//         initialValues={{
//           email: '',
//           password: '',
//           username: ''
//         }}
//         validationSchema={logging ? loginValidationSchema : registerValidationSchema}
//         onSubmit={handleSubmit}
//       >
//         {() => (
//           <Form>
//             {!logging && (
//               <div>
//                 <Field name="username" as={TextField} label="Username" fullWidth sx={{ my: 2 }} />
//                 <ErrorMessage name="username" component="div" className="errormsg" />
//               </div>
//             )}

//             <div>
//               <Field name="email" as={TextField} label="Email" type="email" fullWidth sx={{ my: 2 }} />
//               <ErrorMessage name="email" component="div" className="errormsg" />
//             </div>

//             <div>
//               <Field name="password" as={TextField} label="Password" type="password" fullWidth sx={{ my: 2 }} />
//               <ErrorMessage name="password" component="div" className="errormsg" />
//             </div>

//             {logging
//               ? loginError && (
//                   <Typography color="error" sx={{ my: 1 }}>
//                     {loginError}
//                   </Typography>
//                 )
//               : registerError && (
//                   <Typography color="error" sx={{ my: 1 }}>
//                     {registerError}
//                   </Typography>
//                 )}

//             <Button
//               variant="contained"
//               color="success"
//               fullWidth
//               type="submit"
//               sx={{ mt: 2 }}
//               endIcon={logging ? <LoginIcon /> : <HowToReg />}
//             >
//               {logging ? (
//                 loginLoading ? (
//                   <CircularProgress size={20} color="inherit" />
//                 ) : (
//                   'Login'
//                 )
//               ) : registerLoading ? (
//                 <CircularProgress size={20} color="inherit" />
//               ) : (
//                 'Sign Up'
//               )}
//             </Button>
//           </Form>
//         )}
//       </Formik>

//       <Typography sx={{ mt: 2 }}>
//         {logging ? "Don't have an account?" : 'Already have an account? '}
//         <Button onClick={() => dispatch(loggedIn(false))} sx={{ textDecoration: 'none', color: '#1e88e5' }}>
//           {logging ? 'Sign Up' : 'Login'}
//         </Button>
//       </Typography>
//       <Snackbar open={snack} autoHideDuration={2000} onClose={handleCloseSnackbar} message={snackbarMessage} />
//     </Box>
//   );
// };

// export default LogRegForm;

// /* eslint-disable @typescript-eslint/no-explicit-any */
