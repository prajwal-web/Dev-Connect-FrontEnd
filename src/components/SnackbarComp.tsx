// SnackbarComponent.tsx
import { useSelector, useDispatch } from 'react-redux';
import { Snackbar, SnackbarCloseReason } from '@mui/material';
import { RootState } from '../redux/store';
import { snackbar } from '../redux/slices/ToogleSlice';

const SnackbarComp = () => {
  const dispatch = useDispatch();
  const { snackBar, snackbarMessage } = useSelector((state: RootState) => state.mode);

  const handleCloseSnackbar = (_event: React.SyntheticEvent | Event, reason?: SnackbarCloseReason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(snackbar(false));
  };

  return (
    <Snackbar
      open={snackBar}
      autoHideDuration={2000}
      onClose={handleCloseSnackbar}
      message={snackbarMessage}
      sx={{
        '& .MuiSnackbarContent-root': {
          backgroundColor: 'green'
        }
      }}
    />
  );
};

export default SnackbarComp;
