/* eslint-disable @typescript-eslint/no-explicit-any */
import { Add, Delete } from '@mui/icons-material';
import { Box, Button, IconButton, TextField, Tooltip, Typography } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const CreatePosts = () => {
  const [imageSrcs, setImageSrcs] = useState<string[]>([]);
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [cookies] = useCookies(['token']);
  const [openModal, setOpenModal] = useState(false);

  const handleFileChange = (event: { target: { files: FileList | null } }) => {
    if (event.target.files) {
      const filesArray = Array.from(event.target.files);
      const imageUrls = filesArray.map((file) => URL.createObjectURL(file));
      setImageSrcs((prevState) => [...prevState, ...imageUrls]);
      setImageFiles((prevState) => [...prevState, ...filesArray]);
    }
  };

  const handleDeleteImage = (index: number) => {
    setImageSrcs((prevState) => prevState.filter((_, i) => i !== index));
    setImageFiles((prevState) => prevState.filter((_, i) => i !== index));
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const createPost = async (postData: any) => {
    try {
      const formData = new FormData();
      formData.append('content', postData.content);
      formData.append('tags', postData.tags);
      imageFiles.forEach((file) => {
        formData.append('images', file);
      });
      const response = await fetch('https:dev-connect-service.onrender.com/api/posts', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${cookies.token}`
        },
        body: formData
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Post creation failed:', errorData);
        throw new Error(`Post creation failed: ${errorData.message || 'Unknown error'}`);
      }

      const jsonData = await response.json();
      console.log('Post created successfully:', jsonData);
    } catch (error) {
      console.error('Error occurred during post creation:', error);
    }
  };

  const formik = useFormik({
    initialValues: {
      content: '',
      tags: ''
    },
    validationSchema: Yup.object({
      content: Yup.string().required('Content is required'),
      tags: Yup.string().required('Tag is required')
    }),
    onSubmit: (values) => {
      const postData = {
        content: values.content,
        tags: values.tags,
        images: imageFiles
      };
      createPost(postData);
      handleCloseModal();
    }
  });

  return (
    <>
      {cookies.token && (
        <IconButton
          onClick={handleOpenModal}
          sx={{
            position: 'fixed',
            bottom: 20,
            right: 20,
            backgroundColor: 'primary.main',
            color: 'white',
            boxShadow: 3
          }}
        >
          <Tooltip title="Create Posts">
            <Add />
          </Tooltip>
        </IconButton>
      )}

      <Dialog open={openModal} onClose={handleCloseModal} sx={{ padding: 2 }}>
        <DialogTitle sx={{ fontWeight: 'bold', width: 400 }}>Create a New Post</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            label="Post Content"
            variant="outlined"
            multiline
            rows={4}
            sx={{ mb: 2, mt: 1 }}
            placeholder="Write something here..."
            value={formik.values.content}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="content"
            error={formik.touched.content && Boolean(formik.errors.content)}
            helperText={formik.touched.content && formik.errors.content}
          />

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 2 }}>
            {imageSrcs.map((imageSrc, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Box
                  component="img"
                  sx={{
                    height: 100,
                    width: 100,
                    objectFit: 'cover',
                    borderRadius: 1,
                    border: '1px solid #ddd',
                    boxShadow: 2
                  }}
                  alt="Preview"
                  src={imageSrc}
                />
                <IconButton
                  onClick={() => handleDeleteImage(index)}
                  sx={{
                    position: 'absolute',
                    top: 5,
                    right: 5,
                    backgroundColor: 'white',
                    boxShadow: 2
                  }}
                >
                  <Delete sx={{ color: 'red' }} />
                </IconButton>
              </Box>
            ))}
          </Box>

          <Box display="flex" flexDirection="row" alignItems="center" gap={2}>
            <Button
              component="label"
              variant="outlined"
              color="inherit"
              startIcon={<CloudUploadIcon />}
              sx={{ height: '30px', fontSize: { xs: '12px' }, width: { xs: '130px', lg: '150px' } }}
            >
              Choose files
              <input type="file" accept="image/*" multiple onChange={handleFileChange} style={{ display: 'none' }} />
            </Button>
            <Typography sx={{ fontSize: { xs: '12px' } }}>
              {imageSrcs.length > 0 ? `${imageSrcs.length} image(s) uploaded` : 'No images chosen'}
            </Typography>
          </Box>

          <TextField
            fullWidth
            label="Tags"
            variant="outlined"
            sx={{ mb: 2, mt: 1 }}
            placeholder="Add tags (comma separated)"
            value={formik.values.tags}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="tags"
            error={formik.touched.tags && Boolean(formik.errors.tags)}
            helperText={formik.touched.tags && formik.errors.tags}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="secondary">
            Cancel
          </Button>
          <Button onClick={formik.handleSubmit} color="primary">
            Post
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CreatePosts;

//  import { Add, Delete } from '@mui/icons-material';
//  import { Box, Button, IconButton, TextField, Tooltip, Typography } from '@mui/material';
//  import Dialog from '@mui/material/Dialog';
//  import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogTitle from '@mui/material/DialogTitle';
// import { useState } from 'react';
// import { useCookies } from 'react-cookie';
// import CloudUploadIcon from '@mui/icons-material/CloudUpload';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';

// type Post = {
//   content: string;
//   tags: string;
//   images: string[];
// };

// const CreatePosts = ({ onNewPost }: { onNewPost: (post: Post) => void }) => {
//   const [imageSrcs, setImageSrcs] = useState<string[]>([]);
//   const [imageFiles, setImageFiles] = useState<File[]>([]);
//   const [cookies] = useCookies(['token']);
//   const [openModal, setOpenModal] = useState(false);

//   const handleFileChange = (event: { target: { files: FileList | null } }) => {
//     if (event.target.files) {
//       const filesArray = Array.from(event.target.files);
//       const imageUrls = filesArray.map((file) => URL.createObjectURL(file));
//       setImageSrcs((prevState) => [...prevState, ...imageUrls]);
//       setImageFiles((prevState) => [...prevState, ...filesArray]);
//     }
//   };

//   const handleDeleteImage = (index: number) => {
//     setImageSrcs((prevState) => prevState.filter((_, i) => i !== index));
//     setImageFiles((prevState) => prevState.filter((_, i) => i !== index));
//   };

//   const handleOpenModal = () => {
//     setOpenModal(true);
//   };

//   const handleCloseModal = () => {
//     setOpenModal(false);
//   };

//   const createPost = async (postData: Post) => {
//     try {
//       const formData = new FormData();
//       formData.append('content', postData.content);
//       formData.append('tags', postData.tags);
//       imageFiles.forEach((file) => {
//         formData.append('images', file);
//       });

//       const response = await fetch('https://dev-connect-service.onrender.com/api/posts', {
//         method: 'POST',
//         headers: {
//           Authorization: `Bearer ${cookies.token}`
//         },
//         body: formData
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         console.error('Post creation failed:', errorData);
//         throw new Error(`Post creation failed: ${errorData.message || 'Unknown error'}`);
//       }

//       const jsonData = await response.json();
//       console.log('Post created successfully:', jsonData);

//       // Pass the new post back to the parent
//       onNewPost({
//         content: postData.content,
//         tags: postData.tags,
//         images: imageSrcs
//       });
//     } catch (error) {
//       console.error('Error occurred during post creation:', error);
//     }
//   };

//   const formik = useFormik({
//     initialValues: {
//       content: '',
//       tags: ''
//     },
//     validationSchema: Yup.object({
//       content: Yup.string().required('Content is required'),
//       tags: Yup.string().required('Tag is required')
//     }),
//     onSubmit: (values) => {
//       const postData = {
//         content: values.content,
//         tags: values.tags,
//         images: imageFiles
//       };
//       createPost(postData);
//       handleCloseModal();
//     }
//   });

//   return (
//     <>
//       {cookies.token && (
//         <IconButton
//           onClick={handleOpenModal}
//           sx={{
//             position: 'fixed',
//             bottom: 20,
//             right: 20,
//             backgroundColor: 'primary.main',
//             color: 'white',
//             boxShadow: 3
//           }}
//         >
//           <Tooltip title="Create Posts">
//             <Add />
//           </Tooltip>
//         </IconButton>
//       )}

//       <Dialog open={openModal} onClose={handleCloseModal} sx={{ padding: 2 }}>
//         <DialogTitle sx={{ fontWeight: 'bold', width: 400 }}>Create a New Post</DialogTitle>
//         <DialogContent>
//           <TextField
//             fullWidth
//             label="Post Content"
//             variant="outlined"
//             multiline
//             rows={4}
//             sx={{ mb: 2, mt: 1 }}
//             placeholder="Write something here..."
//             value={formik.values.content}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             name="content"
//             error={formik.touched.content && Boolean(formik.errors.content)}
//             helperText={formik.touched.content && formik.errors.content}
//           />

//           <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 2 }}>
//             {imageSrcs.map((imageSrc, index) => (
//               <Box
//                 key={index}
//                 sx={{
//                   display: 'flex',
//                   flexDirection: 'column',
//                   alignItems: 'center',
//                   justifyContent: 'center'
//                 }}
//               >
//                 <Box
//                   component="img"
//                   sx={{
//                     height: 100,
//                     width: 100,
//                     objectFit: 'cover',
//                     borderRadius: 1,
//                     border: '1px solid #ddd',
//                     boxShadow: 2
//                   }}
//                   alt="Preview"
//                   src={imageSrc}
//                 />
//                 <IconButton
//                   onClick={() => handleDeleteImage(index)}
//                   sx={{
//                     position: 'absolute',
//                     top: 5,
//                     right: 5,
//                     backgroundColor: 'white',
//                     boxShadow: 2
//                   }}
//                 >
//                   <Delete sx={{ color: 'red' }} />
//                 </IconButton>
//               </Box>
//             ))}
//           </Box>

//           <Box display="flex" flexDirection="row" alignItems="center" gap={2}>
//             <Button
//               component="label"
//               variant="outlined"
//               color="inherit"
//               startIcon={<CloudUploadIcon />}
//               sx={{ height: '30px', fontSize: { xs: '12px' }, width: { xs: '130px', lg: '150px' } }}
//             >
//               Choose files
//               <input type="file" accept="image/*" multiple onChange={handleFileChange} style={{ display: 'none' }} />
//             </Button>
//             <Typography sx={{ fontSize: { xs: '12px' } }}>
//               {imageSrcs.length > 0 ? `${imageSrcs.length} image(s) uploaded` : 'No images chosen'}
//             </Typography>
//           </Box>

//           <TextField
//             fullWidth
//             label="Tags"
//             variant="outlined"
//             sx={{ mb: 2, mt: 1 }}
//             placeholder="Add tags (comma separated)"
//             value={formik.values.tags}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             name="tags"
//             error={formik.touched.tags && Boolean(formik.errors.tags)}
//             helperText={formik.touched.tags && formik.errors.tags}
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseModal} color="secondary">
//             Cancel
//           </Button>
//           <Button onClick={formik.handleSubmit} color="primary">
//             Post
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </>
//   );
// };

// export default CreatePosts;
