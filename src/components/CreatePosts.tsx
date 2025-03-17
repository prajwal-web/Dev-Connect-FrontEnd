/* eslint-disable @typescript-eslint/no-explicit-any */
import { Add, Delete } from '@mui/icons-material';
import { Box, Button, IconButton, styled, TextField, Tooltip, Typography } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const CreatePosts = () => {
  const [fileName, setFileName] = useState('No file chosen');
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1
  });

  const handleFileChange = (event: { target: { files: any } }) => {
    const files = event.target.files;
    if (files.length > 0) {
      const file = files[0];
      setFileName(file.name);

      const objectURL = URL.createObjectURL(file);
      setImageSrc(objectURL);
    } else {
      setFileName('No file chosen');
      setImageSrc(null);
    }
  };

  const handleDeleteImage = () => {
    setImageSrc(null);
    setFileName('No file chosen');
  };

  const [cookies] = useCookies(['token']);
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleSubmit = () => {
    setOpenModal(false);
  };

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
          />

          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2, flexDirection: 'row' }}>
            <Box>
              <Box
                component="img"
                sx={{
                  height: 150,
                  width: 200,
                  objectFit: 'cover',
                  borderRadius: 1,
                  border: '1px solid #ddd',
                  boxShadow: 2
                }}
                alt="Preview"
                src={imageSrc || 'https://circleofcricket.com/post_image/post_image_9632bcb.jpg'}
              />
            </Box>
            <Box>
              {imageSrc && (
                <IconButton
                  onClick={handleDeleteImage}
                  sx={{
                    position: 'relative',
                    left: 50,
                    backgroundColor: 'white',
                    boxShadow: 2
                  }}
                >
                  <Delete sx={{ color: 'red' }} />
                </IconButton>
              )}
            </Box>
          </Box>

          <Box display="flex" flexDirection="row" alignItems="center" gap={2}>
            <Button
              component="label"
              variant="outlined"
              color="inherit"
              startIcon={<CloudUploadIcon />}
              sx={{ height: '30px', fontSize: { xs: '12px' }, width: { xs: '130px' } }}
            >
              Choose file
              <VisuallyHiddenInput type="file" onChange={handleFileChange} />
            </Button>
            <Typography sx={{ fontSize: { xs: '13px' } }}>{fileName}</Typography>
          </Box>
          <TextField
            fullWidth
            label="Tags"
            variant="outlined"
            sx={{ mb: 2, mt: 1 }}
            placeholder="Add tags (comma separated)"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Post
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CreatePosts;
