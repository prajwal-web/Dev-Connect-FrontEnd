import { Box } from '@mui/material';
import Modal from '@mui/material/Modal';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import LogRegForm from '../pages/LogRegForm';

const style = {
  position: 'relative',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '500px',
  height: 'auto',
  bgcolor: 'background.paper',
  boxShadow: 24
};

interface BasicModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setUserName: (name: string) => void;
}

export default function BasicModal({ open, setOpen, setUserName }: BasicModalProps) {
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <HighlightOffIcon
            sx={{
              position: 'absolute',
              right: '2%',
              top: '1%',
              cursor: 'pointer'
            }}
            onClick={handleClose}
          />
          <LogRegForm setOpenModal={setOpen} setUserName={setUserName} />
        </Box>
      </Modal>
    </Box>
  );
}
