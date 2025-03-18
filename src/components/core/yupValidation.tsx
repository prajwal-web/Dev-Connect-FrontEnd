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

export const updateProfileSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  bio: Yup.string().required('Bio is required'),
  skills: Yup.string().required('Skills are required'),
  experience: Yup.array().of(
    Yup.object({
      title: Yup.string().required('Title is required'),
      company: Yup.string().required('Company is required'),
      location: Yup.string().required('Location is required'),
      from: Yup.string()
        .required('Start date is required')
        .matches(/^\d{4}-\d{2}$/, 'Invalid date format (should be YYYY-MM)'),
      to: Yup.string()
        .required('End date is required')
        .matches(/^\d{4}-\d{2}$/, 'Invalid date format (should be YYYY-MM)'),
      description: Yup.string().required('Description is required')
    })
  ),
  socialLinks: Yup.object({
    Github: Yup.string().required('Github Link is required'),
    LinkedIn: Yup.string().required('LinkedIn Link is required')
  })
  // createdAt: Yup.date().required('Created At is required'),
  // updatedAt: Yup.date().required('Updated At is required')
});

export default yupValidation;
