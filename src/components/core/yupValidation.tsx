import * as Yup from 'yup';
const yupValidation = () => {
  const loginValidationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required')
  });

  const registerValidationSchema = Yup.object({
    username: Yup.string().min(3, 'Username must be at least 3 characters').required('Username is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .matches(/[0-9]/, 'Must contain a number')
      .matches(/[^a-zA-Z0-9]/, 'Must contain a special character')
      .required('Password is required')
  });
  return { loginValidationSchema, registerValidationSchema };
};

export default yupValidation;
