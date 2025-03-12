// import { useForm } from 'react-hook-form';
// import { Box, TextField, Button, Typography, CircularProgress } from '@mui/material';
// import { useRegister } from './useRegister';

// type RegisterFormInputs = {
//   name: string;
//   email: string;
//   password: string;
// };

// const RegisterForm = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors }
//   } = useForm<RegisterFormInputs>();
//   const { handleRegister, loading, error } = useRegister();

//   const onSubmit = (data: RegisterFormInputs) => handleRegister(data.name, data.email, data.password);

//   return (
//     <Box sx={{ maxWidth: 400, mx: 'auto', textAlign: 'center', p: 3, marginBottom: '100px' }}>
//       <Typography variant="h5" fontWeight="bold">
//         Create an Account
//       </Typography>

//       <form onSubmit={handleSubmit(onSubmit)}>
//         <TextField
//           label="Name"
//           fullWidth
//           {...register('name', { required: 'Name is required' })}
//           error={!!errors.name}
//           helperText={errors.name?.message}
//           sx={{ my: 2 }}
//         />

//         <TextField
//           label="Email"
//           type="email"
//           fullWidth
//           {...register('email', { required: 'Email is required' })}
//           error={!!errors.email}
//           helperText={errors.email?.message}
//           sx={{ my: 2 }}
//         />

//         <TextField
//           label="Password"
//           type="password"
//           fullWidth
//           {...register('password', {
//             required: 'Password is required',
//             minLength: { value: 6, message: 'Password must be at least 6 characters' }
//           })}
//           error={!!errors.password}
//           helperText={errors.password?.message}
//           sx={{ my: 2 }}
//         />

//         {error && (
//           <Typography color="error" sx={{ my: 1 }}>
//             {error}
//           </Typography>
//         )}

//         <Button type="submit" fullWidth variant="contained" disabled={loading} sx={{ mt: 2 }}>
//           {loading ? <CircularProgress size={24} /> : 'Register'}
//         </Button>
//       </form>

//       <Typography sx={{ mt: 2 }}>
//         Already have an account?{' '}
//         <a href="/login" style={{ textDecoration: 'none', color: '#1e88e5' }}>
//           Login
//         </a>
//       </Typography>
//     </Box>
//   );
// };

// export default RegisterForm;
