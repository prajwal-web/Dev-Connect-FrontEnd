/* eslint-disable @typescript-eslint/no-explicit-any */
import { TextField, Button, Box, Grid2, Typography, Container, styled } from '@mui/material';
import { Formik, Form } from 'formik';
import { updateProfileSchema } from '../../components/core/yupValidation';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

interface Experience {
  title: string;
  company: string;
  location: string;
  from: string;
  to: string;
  description: string;
}

interface FormValues {
  name: string;
  email: string;
  bio: string;
  skills: string;
  experience: Experience[{}];
  password: string;
  socialLinks: {
    Github: string;
    LinkedIn: string;
  };
  createdAt: string;
  updatedAt: string;
}

const UpdateProfile = () => {
  const [fileName, setFileName] = useState('No file chosen');

  const handleFileChange = (event: { target: { files: any } }) => {
    const files = event.target.files;
    if (files.length > 0) {
      setFileName(`${files[0].name} `);
    } else {
      setFileName('No file chosen');
    }
  };
  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  return (
    <Container maxWidth="md" sx={{ marginBottom: 2 }}>
      <Typography variant="h5" gutterBottom>
        Update Profile
      </Typography>

      <Formik<FormValues>
        initialValues={{
          name: '',
          email: '',
          bio: '',
          skills: '',
          experience: [{ title: '', company: '', location: '', from: '', to: '', description: '' }],
          password: '',
          socialLinks: { Github: '', LinkedIn: '' },
          createdAt: '',
          updatedAt: ''
        }}
        validationSchema={updateProfileSchema}
        onSubmit={(values) => {
          console.log('Form Values:', values);
          setLoading(true);
          setTimeout(() => {
            navigate('/profile');
          }, 2000);
        }}
      >
        {({ values, handleChange, handleBlur, errors, touched }) => {
          console.log('Form Values:', values);
          console.log('Form Errors:', errors);
          console.log('Touched Fields:', touched);

          return (
            <Form>
              <TextField
                sx={{ marginTop: 10 }}
                label="Name*"
                name="name"
                variant="outlined"
                fullWidth
                margin="normal"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.name && !!errors.name}
                helperText={touched.name && errors.name}
              />
              <TextField
                label="Email*"
                name="email"
                variant="outlined"
                fullWidth
                margin="normal"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && !!errors.email}
                helperText={touched.email && errors.email}
              />
              <TextField
                label="Bio*"
                name="bio"
                variant="outlined"
                fullWidth
                margin="normal"
                value={values.bio}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.bio && !!errors.bio}
                helperText={touched.bio && errors.bio}
              />

              <TextField
                label="Skills (comma separated)"
                name="skills"
                variant="outlined"
                fullWidth
                margin="normal"
                value={values.skills}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.skills && !!errors.skills}
                helperText={touched.skills && errors.skills}
              />

              <Typography variant="h6" gutterBottom>
                Experience
              </Typography>
              <Box sx={{ border: 1, borderColor: 'gray', p: 2, mb: 2 }}>
                <Grid2 container spacing={2}>
                  {values.experience.map((exp: any, index: any) => (
                    <React.Fragment key={index}>
                      <Grid2 size={{ xs: 12, sm: 6, lg: 4 }}>
                        <TextField
                          label="Title"
                          name={`experience[${index}].title`}
                          variant="outlined"
                          fullWidth
                          margin="normal"
                          value={exp.title}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={touched.experience?.[index]?.title && !!errors.experience?.[index]?.title}
                          helperText={touched.experience?.[index]?.title && errors.experience?.[index]?.title}
                        />
                      </Grid2>
                      <Grid2 size={{ xs: 12, sm: 6, lg: 4 }}>
                        <TextField
                          label="Company"
                          name={`experience[${index}].company`}
                          variant="outlined"
                          fullWidth
                          margin="normal"
                          value={exp.company}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={touched.experience?.[index]?.company && !!errors.experience?.[index]?.company}
                          helperText={touched.experience?.[index]?.company && errors.experience?.[index]?.company}
                        />
                      </Grid2>
                      <Grid2 size={{ xs: 12, sm: 6, lg: 4 }}>
                        <TextField
                          label="Location"
                          name={`experience[${index}].location`}
                          variant="outlined"
                          fullWidth
                          margin="normal"
                          value={exp.location}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={touched.experience?.[index]?.location && !!errors.experience?.[index]?.location}
                          helperText={touched.experience?.[index]?.location && errors.experience?.[index]?.location}
                        />
                      </Grid2>
                      <Grid2 size={{ xs: 12, sm: 6, lg: 4 }}>
                        <TextField
                          label="From"
                          name={`experience[${index}].from`}
                          type="month"
                          variant="outlined"
                          fullWidth
                          margin="normal"
                          value={exp.from}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={touched.experience?.[index]?.from && !!errors.experience?.[index]?.from}
                          helperText={touched.experience?.[index]?.from && errors.experience?.[index]?.from}
                        />
                      </Grid2>
                      <Grid2 size={{ xs: 12, sm: 6, lg: 4 }}>
                        <TextField
                          label="To"
                          name={`experience[${index}].to`}
                          type="month"
                          variant="outlined"
                          fullWidth
                          margin="normal"
                          value={exp.to}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={touched.experience?.[index]?.to && !!errors.experience?.[index]?.to}
                          helperText={touched.experience?.[index]?.to && errors.experience?.[index]?.to}
                        />
                      </Grid2>
                      <Grid2 size={{ xs: 12, sm: 12, lg: 12 }}>
                        <TextField
                          label="Description"
                          name={`experience[${index}].description`}
                          variant="outlined"
                          multiline
                          rows={4}
                          fullWidth
                          margin="normal"
                          value={exp.description}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={touched.experience?.[index]?.description && !!errors.experience?.[index]?.description}
                          helperText={
                            touched.experience?.[index]?.description && errors.experience?.[index]?.description
                          }
                        />
                      </Grid2>
                    </React.Fragment>
                  ))}
                </Grid2>
              </Box>
              <Typography>Social Links</Typography>
              <TextField
                label="Github*"
                name="socialLinks.Github"
                variant="outlined"
                margin="normal"
                value={values.socialLinks.Github}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.socialLinks?.Github && !!errors.socialLinks?.Github}
                helperText={touched.socialLinks?.Github && errors.socialLinks?.Github}
              />
              <TextField
                sx={{ marginLeft: 1 }}
                label="LinkedIn*"
                name="socialLinks.LinkedIn"
                variant="outlined"
                margin="normal"
                value={values.socialLinks.LinkedIn}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.socialLinks?.LinkedIn && !!errors.socialLinks?.LinkedIn}
                helperText={touched.socialLinks?.LinkedIn && errors.socialLinks?.LinkedIn}
              />

              <TextField
                label="Password*"
                name="password"
                type="password"
                variant="outlined"
                fullWidth
                margin="normal"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.password && !!errors.password}
                helperText={touched.password && errors.password}
              />

              {/* <Button
                variant="outlined"
                sx={{ color: 'black', border: '1px solid black', fontSize: '12px', width: '200px' }}
                component="label"
                fullWidth
              >
                Upload Profile Picture
                <input type="file" hidden />
              </Button> */}
              <Box display="flex" flexDirection="row" alignItems="center" gap={2}>
                <Button
                  component="label"
                  variant="outlined"
                  color="inherit"
                  startIcon={<CloudUploadIcon />}
                  sx={{ height: '30px' }}
                >
                  choose a file
                  <VisuallyHiddenInput type="file" onChange={handleFileChange} />
                </Button>
                <Typography>{fileName}</Typography>
              </Box>
              <Button variant="contained" fullWidth sx={{ mt: 2 }} type="submit" loading={loading}>
                Update Profile
              </Button>
            </Form>
          );
        }}
      </Formik>
    </Container>
  );
};

export default UpdateProfile;
